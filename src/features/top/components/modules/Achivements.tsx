import { Carousel } from "../../../Carousel/container/Carousel";
import { SectionContainer } from "../layout";
import { SectionTitle, AchivementsCard } from "../ui";

export const Achivements = () => {
  const slides = [
    <AchivementsCard key={1} />,
    <AchivementsCard key={2} />,
    <AchivementsCard key={3} />,
    <AchivementsCard key={4} />,
    <AchivementsCard key={5} />,
  ];
  return (
    <SectionContainer>
      <SectionTitle align={"right"}>Achivements</SectionTitle>
      <Carousel gap={64} itemWidth={400} items={slides} />
    </SectionContainer>
  );
};
