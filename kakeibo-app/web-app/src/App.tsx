import { Box, Button, Container, Text } from "@chakra-ui/react";

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
      <Container as="main" maxW="4xl" py={8}>
        <Button colorPalette="teal" fontWeight="bold">
          登録
        </Button>
      </Container>
    </>
  );
}

export default App;