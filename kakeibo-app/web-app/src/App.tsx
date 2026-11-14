import { Box, Button, Container, Text, Flex } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

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
        <Flex justifyContent="flex-end">
          <Button colorPalette="teal" fontWeight="bold">
            <FaPlus />
            登録
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default App;