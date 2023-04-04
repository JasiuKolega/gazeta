import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Advertising = () => {
  return (
    <Box pt={"20px"}>
      <Box
        display={"flex"}
        width={"1000px"}
        height={"150px"}
        bgColor={"#F5F5DC"}
      >
        <Box>
          <Text fontSize={"50px"} mr={"70px"}>
            PRZEWODNIK
          </Text>
          <Text fontSize={"50px"} mr={"70px"}>PO LEKACH BEZ RECEPTY</Text>
        </Box>
        <Image
          src={"/bezrecepty.png"}
          alt={"reklama"}
          width={"150"}
          height={"150"}
        />
        <Box color={"blue"} fontWeight={700} pl={"30px"} pt={"30px"}>
          DZIŚ CZ.2.
          <Text color={"black"}>Bóle mięśni i stawów,</Text>
          <Text color={"black"}>bóle żełądka</Text>
          <Text color={"black"}>i dolegliwości wątroby</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Advertising;
