import {
  Flex,
  useColorModeValue,
  Button,
  Box,
  Tab,
  TabPanel,
  Tabs,
  TabPanels,
  TabList,
  Stack,
  Table,
  Thead,
  Td,
  Th,
  Tr,
  Tbody,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Interviews = () => {
  const cardBackground = useColorModeValue("gray.100", "gray.700");

  //data of candidates
  const assignedCandidates = [
    {
      student_id: "190609J",
      student_name: "Geshan Sudasinghe",
      student_cv: "/cv/st1",
      student_email: "geshan@gmail.",
      department: "Electrical",
    },
    {
      student_id: "190619J",
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "190629J",
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
      department: "Electrical",
    },
  ];

  const walkingCandidates = [
    {
      student_id: "190619J",
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "190629J",
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "190639J",
      student_name: "Geshan Sudasinghe",
      student_cv: "/cv/st1",
      student_email: "geshan@gmail.",
      department: "Electrical",
    },
    {
      student_id: "190649J",
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "190659J",
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "190669J",
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "190679J",
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
      department: "Electrical",
    },
  ];
  const inQueue = [
    {
      student_id: "190689J",
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "110629J",
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "120619J",
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
      department: "Electrical",
    },
    {
      student_id: "170629J",
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
      department: "Electrical",
    },
  ];
  const panelHistory = [];

  return (
    <Flex direction="column" alignItems="center">
      <Box
        bg={cardBackground}
        justify="center"
        width="102%"
        rounded={7}
        mt={0}
        ml={7}
        shadow="md"
      >
        <Tabs isFitted>
          <TabList>
            <Tab>Assigned Candidates</Tab>
            <Tab>Walking Candidates</Tab>
            <Tab> In Queue</Tab>
            <Tab>Panel History</Tab>
          </TabList>
          <Stack height="103vh" overflow="scroll" bg={cardBackground}>
            <TabPanels>
              <TabPanel>
                <Table variant="striped" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Student Name</Th>
                      <Th>University ID</Th>
                      <Th>Deoartment</Th>
                      <Th>Email</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {assignedCandidates.map((student) => (
                      <StudentRow data={student} key={student.student_id} />
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table variant="striped" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Student Name</Th>
                      <Th>University ID</Th>
                      <Th>Department</Th>
                      <Th>Email</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {walkingCandidates.map((student) => (
                      <StudentRow data={student} key={student.student_id} />
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table variant="striped" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Student Name</Th>
                      <Th>University ID</Th>
                      <Th>Department</Th>
                      <Th>Email</Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {inQueue.map((student) => (
                      <StudentRowInQ data={student} key={student.student_id} />
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table variant="striped" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Student Name</Th>
                      <Th>University ID</Th>
                      <Th>Department</Th>
                      <Th>Email</Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {panelHistory.map((student) => (
                      <StudentRow data={student} key={student.student_id} />
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Stack>
        </Tabs>
      </Box>
    </Flex>
  );
};

function StudentRow({ data }) {
  return (
    <Tr>
      <Td>{data.student_name}</Td>
      <Td>{data.student_id}</Td>
      <Td>{data.department}</Td>
      <Td>{data.student_email}</Td>
      <Td>
        <Router>
          <Link to={data.student_cv}>
            <Button colorScheme="teal" size="sm">
              CV
            </Button>
          </Link>
        </Router>
      </Td>
    </Tr>
  );
}
function StudentRowInQ({ data }) {
  return (
    <Tr>
      <Td>{data.student_name}</Td>
      <Td>{data.student_id}</Td>
      <Td>{data.department}</Td>
      <Td>{data.student_email}</Td>
      <Td>
        <Router>
          <Link to={data.student_cv}>
            <Button colorScheme="teal" size="sm">
              CV
            </Button>
          </Link>
        </Router>
      </Td>
      <Td>
        <Button colorScheme="red" size="sm">
          Cancel
        </Button>
      </Td>
    </Tr>
  );
}

export default Interviews;
