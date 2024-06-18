import { Box, Text } from "ink";
import { useEffect, useState } from "react";
import type { Config } from "./types.js";

interface Props {
  config: Config;
}

export const App = ({ config }: Props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box height="100%" width="100%" borderStyle="round">
      <Text color="green">{counter} tests passed</Text>
    </Box>
  );
};
