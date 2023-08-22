import { Box, Text } from "@chakra-ui/react";
import { EmissionsOffsetLabel } from "./EmissionsOffsetLabel";
import { RaitingStars } from "./RaitingStars";
import { memo } from "react";
import { Card } from "../Cards";

function CardItem({
  name,
  imageSrc,
  countriesNumber,
  duration,
  emissionsOffset,
  raiting,
  id,
}: Card) {
  const countryText = `${
    countriesNumber > 1 ? "Countries" : "Country"
  } ${countriesNumber}`;

  const durationText = `${duration > 1 ? "Days" : "day"} ${duration}`;

  const description = `${countryText}, ${durationText}`;
  return (
    <Box borderRadius="2xl" p="3" backgroundColor="white" boxShadow="2xl">
      <Box
        borderRadius="xl"
        backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url('${imageSrc}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h="300px"
        display="flex"
        justifyContent="end"
        alignItems="center"
        flexDirection="column"
      >
        <Text textAlign="center" fontSize="3xl" fontWeight="bold" color="white">
          {name}
        </Text>
        <Text color="gray.100" fontWeight="semibold" fontSize="md" mb="2">
          {description}
        </Text>
        <EmissionsOffsetLabel emissionOffest={emissionsOffset} />
        <Box
          backgroundColor="white"
          borderTopRadius="xl"
          padding="5"
          display="flex"
          gap="5"
          mt="6"
        >
          <Text fontWeight="bold">Trip raiting</Text>
          {/* The svgIndex need for uniq svg id. For prod env better to add some svg loader */}
          <RaitingStars raiting={raiting} svgIndex={id} />
        </Box>
      </Box>
    </Box>
  );
}

export default memo(CardItem);
