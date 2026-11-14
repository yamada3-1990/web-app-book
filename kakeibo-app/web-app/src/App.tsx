import { Box, Button, Container, Text, Flex, Card, Heading } from "@chakra-ui/react";
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
        <SummaryCard title="周遊履歴">
          <Text>ここに周遊履歴の内容が表示されます。</Text>
        </SummaryCard>
      </Container>
    </>
  );
}
const SummaryCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Heading size="md"> {title} </Heading>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  )
}


export default App;