import { Box, Text } from "@chakra-ui/react";

type EmissionsOffsetLabelProps = {
  emissionOffest: number;
};

const oneTonInKg = 1000;

export function EmissionsOffsetLabel({
  emissionOffest,
}: EmissionsOffsetLabelProps) {
  const mesurementUnit = emissionOffest > oneTonInKg ? "t" : "kg";
  const emissionOffsetAmount =
    emissionOffest > oneTonInKg
      ? Math.round((emissionOffest / oneTonInKg) * 100) / 100
      : emissionOffest;

  const emissionOffsetContent = (
    <>
      <span>{`${emissionOffsetAmount} ${mesurementUnit} `}</span>
      <span>
        CO<sub>2</sub>e
      </span>
    </>
  );

  return (
    <Box
      px="2"
      py="4"
      backgroundColor="purple.900"
      color="white"
      fontSize="xl"
      fontWeight="bold"
      borderRadius="xl"
      display="flex"
      gap="5"
    >
      <Text>Emissions offset:</Text>
      <Text>{emissionOffsetContent}</Text>
    </Box>
  );
}
