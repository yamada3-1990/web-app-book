import {Box, Button, Heading, Text} from "@chakra-ui/react";

function App() {
  return (
    <>
    <Box
      as="header"
      bg="teal.500"
      color="white"
      py={4}
      textAlign="center"
      boxShadow="md"
    >
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        My Kakeibo App
      </Text>
      </Box>
      <Button colorPalette="teal" fontWeight="bold">
        登録
      </Button>
    </>
  );
}

export default App;