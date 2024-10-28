import styles from "./CarouselDotButtons.module.css";

type CarouselDotButtonsProps = {
  numberOfDots: number;
  onDotClick: (index: number) => void;
  currentNum: number;
};

export const CarouselDotButtons = (props: CarouselDotButtonsProps) => {
  const { numberOfDots, onDotClick, currentNum } = props;

  return (
    <div className={styles.dotsWrapper}>
      {[...Array(numberOfDots)].map((_, index) => (
        <button
          key={index}
          //currentNum === indexのときdotIsActiveクラスを付与
          className={`${styles.dot} ${
            index ===
            // 余りを 0 から numberOfDots - 1 までの範囲に収める
            ((currentNum % numberOfDots) + numberOfDots) % numberOfDots
              ? styles.dotIsActive
              : ""
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};
