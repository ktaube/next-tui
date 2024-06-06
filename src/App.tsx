import { Box, Text } from "ink";
import { useEffect, useState } from "react";

export const App = () => {
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
    <Box height="100%" width="100%" borderStyle="single">
      <Text color="green">{counter} tests passed</Text>
    </Box>
  );
};
