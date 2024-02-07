import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={2}
    >
      {data?.results?.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
