import { Box, Heading, Text } from "@chakra-ui/react";

const Title = () => {
  return (
    <Heading pt={"50px"} borderBottom={'3px solid #000'} width={'1000px'} display={'flex'} justifyContent={'center'} pb={'30px'}>
      <Box display={"flex"}>
        <Box height={"200px"} width={"100px"} bgColor={"red"} mr={"10px"} />
        <Box display={"flex"} flexDirection={"column"} alignItems={"baseline"}>
          <Text>Gazeta</Text>
          <Text fontSize={"100px"}>Literacka</Text>
          <Text>Alexandr Holobokov 8A klasa</Text>
        </Box>
      </Box>
    </Heading>
  );
};

export default Title;
