import { useEffect, useRef, useState } from "react";

type UseCarouselProps = {
  numberOfElements: number;
};

type UseCarouselReturn = {
  currentNum: number;
  isAnimating: boolean;
  diffX: number;
  listRef: React.RefObject<HTMLUListElement>;
  adjustPosition: () => void;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleDotClick: (index: number) => void;
};

export const useCarousel = ({
  numberOfElements,
}: UseCarouselProps): UseCarouselReturn => {
  const [currentNum, setCurrentNum] = useState(0);
  const [diffX, setDiffX] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const intervalId = useRef<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleMouseUp = handleEnd;

    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const handleTouchEnd = handleEnd;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    //コンポーネントがアンマウントされたときにイベントリスナーを削除しメモリリークを防ぐ
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startX, diffX]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, []);

  const handleMove = (clientX: number) => {
    if (startX === null) return;
    //スワイプの終点と始点の差分を取得
    setDiffX(clientX - startX);
  };

  const handleEnd = () => {
    setStartX(null);
    setIsAnimating(true);
    //20px以上移動した場合スライドする 20px+要素幅移動したらその分加えてスライド
    if (listRef.current) {
      const listWidth = listRef.current.offsetWidth;
      //移動量を計算して移動する要素数を自然数で取得
      const absoluteMoveCount = Math.floor(
        (Math.abs(diffX) + (listWidth - 20)) / listWidth
      );
      //diffXの符号を考慮して移動方向を決定
      const moveCount = diffX > 0 ? -absoluteMoveCount : absoluteMoveCount;
      setCurrentNum((prev) => prev + moveCount);
    }
    setDiffX(0);
    startAutoPlay();
  };

  const startAutoPlay = () => {
    //自動再生が既に始まっている場合はclearIntervalを実行してインターバルをリセット
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setCurrentNum((prev) => prev + 1);
      setIsAnimating(true);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const adjustPosition = () => {
    setIsAnimating(false); //アニメーションを見せたくないのでfalse
    setCurrentNum((prev) => (prev + numberOfElements) % numberOfElements); //currentNumが0未満またはCOUNT以上になった場合、currentNumを調整して本体に移動
  };

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    stopAutoPlay(); //マウスダウンしたときに自動再生を停止
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleStart(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleStart(e.touches[0].clientX);
  };

  const handleDotClick = (index: number) => {
    setCurrentNum(index);
    //移動した直後に自動再生されないように自動再生をリセット
    startAutoPlay();
  };

  return {
    currentNum,
    isAnimating,
    diffX,
    listRef,
    adjustPosition,
    handleMouseDown,
    handleTouchStart,
    handleDotClick,
  };
};
