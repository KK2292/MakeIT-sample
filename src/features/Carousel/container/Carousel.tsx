import { CarouselDotButtons } from "../components";
import { useCarousel } from "../hooks/useCarousel";
import styles from "./Carousel.module.css";

type CarouselProps = {
  gap: number;
  itemWidth: number;
  items: JSX.Element[];
};

export const Carousel = (props: CarouselProps) => {
  const { gap, itemWidth, items } = props;

  const {
    currentNum,
    diffX,
    isAnimating,
    listRef,
    handleMouseDown,
    handleTouchStart,
    adjustPosition,
    handleDotClick,
  } = useCarousel({
    numberOfElements: items.length,
  });

  const carouselStyle = {
    //中央からアイテム幅を超えたところから左右に対してマスクグラデーションをかける
    maskImage: `linear-gradient(
    to right,
    transparent,
    black calc(50% - ${itemWidth / 2}px),
    black calc(50% + ${itemWidth / 2}px),
    transparent 100%
  )`,
  };

  const listStyle = {
    transition: isAnimating ? "" : "none",
    width: itemWidth + gap, //要素の幅と要素間の距離を合計した値
    //GPUを使うためにtranslateXではなくtranslate3dを使う
    transform: `translate3d(${
      -100 * (currentNum + items.length) //currentNumの要素に移動
    }%, 0, 0) translate3d(${diffX}px, 0, 0)`, //マウスの移動分を加算
  };

  const listItemStyle = { padding: `0 ${gap / 2}px` };

  return (
    <div
      className={styles.carousel}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={carouselStyle}
    >
      <ul
        className={styles.list}
        style={listStyle}
        onTransitionEnd={adjustPosition}
        ref={listRef}
      >
        {/* 要素をコピー */}
        {items.map((item, index) => (
          <li
            className={styles.listItem}
            key={`copy-back-${index}`}
            style={listItemStyle}
          >
            {item}
          </li>
        ))}
        {/* 本体 */}
        {items.map((item, index) => (
          <li
            className={styles.listItem}
            key={`main-${index}`}
            style={listItemStyle}
          >
            {item}
          </li>
        ))}
        {/* 要素をコピー */}
        {items.map((item, index) => (
          <li
            className={styles.listItem}
            key={`copy-front-${index}`}
            style={listItemStyle}
          >
            {item}
          </li>
        ))}
      </ul>
      <CarouselDotButtons
        numberOfDots={items.length}
        onDotClick={handleDotClick}
        currentNum={currentNum}
      />
    </div>
  );
};
