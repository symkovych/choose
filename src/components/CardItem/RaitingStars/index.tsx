import { Box, Text } from "@chakra-ui/react";
import { StarIcon } from "../../svg-icons/Star";

type RaitingStarsProps = {
  raiting: number;
  svgIndex: number;
};

const starsProgress = [10, 20, 30, 40, 50];

export function RaitingStars({ raiting, svgIndex }: RaitingStarsProps) {
  return (
    <Box display="flex" alignItems="center">
      {starsProgress.map((starProgress, index) => {
        const diff = raiting - starProgress;
        const offset = diff >= 0 ? 100 : diff < -10 ? 0 : (diff + 10) * 10;
        return (
          <StarIcon
            index={svgIndex.toString() + index.toString()}
            key={index}
            offset={offset}
          />
        );
      })}
      <Text fontSize="xl" fontWeight="bold">
        {Math.round(raiting) / 10}
      </Text>
    </Box>
  );
}
