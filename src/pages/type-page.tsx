import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Heading,
  Stack,
  Center,
  TableContainer,
  ButtonGroup,
} from "@chakra-ui/react";


const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://cobalt.npsystems.net/items/eqtype',
  headers: { 
    'Authorization': 'Bearer pZKh0ziXNkz9A70XPoZrqiqIH1xdMHBx'
  }
};

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  }
  catch (error) {
    console.log(error);
  }
}

makeRequest();
 

const data = [
  { id: 4, spec: "Standard price(EXW)", status: "0" },
  { id: 14, spec: "Battery", status: "0" },
  { id: 19, spec: "Control Valve Type", status: "0" },
  { id: 22, spec: "Valve Function", status: "0" },
];

interface typeProps {
  id: number;
  spec: string;
  status: string;
}

const Typeshow = ({ id, spec, status }: typeProps) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{spec}</Td>
      <Td>{status}</Td>
      <Td>
        <ButtonGroup justifySelf={"center"}>
          <Button>Edit</Button>
          <Button>Remove</Button>
        </ButtonGroup>
      </Td>
    </Tr>
  );
};

const Typepage = () => {
  return (
    <Center>
      <Stack direction={{ base: "column" }} minW="70%">
        <Stack direction={{ base: "row" }}>
          <Heading>Type</Heading>
          <Button width={"100px"} marginLeft="auto" >
            Add
          </Button>
        </Stack>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <TableContainer maxWidth={"100%"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th width={{ base: "10%" }}>ID</Th>
                  <Th width={{ base: "30%" }}>Spec</Th>
                  <Th width={{ base: "25%" }}>Status</Th>
                  <Th textAlign={"center"} width={{ base: "25%" }}>
                    Actions
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item) => (
                  <Typeshow
                    key={item.id}
                    id={item.id}
                    spec={item.spec}
                    status={item.status}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Center>
  );
};

export default Typepage;
