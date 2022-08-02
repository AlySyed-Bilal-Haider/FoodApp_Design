import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import Marquee from "react-fast-marquee";

export default function Partners() {
  const matches = useMediaQuery("(max-width:830px)");

  return (
    <Box mt={5} width="100%">
      <Container maxWidth="xl">
        <Marquee
          speed={50}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
          // gradientColor={[255, 255, 255]}
          // gradientWidth={50}
          // style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <img
              style={{ marginRight: "50px" }}
              width="150px"
              src={m1}
              alt=""
            />
            <img
              style={{ marginRight: "50px" }}
              width="130px"
              src={m2}
              alt=""
            />

            <img
              style={{ marginRight: "50px" }}
              width="140px"
              src={m3}
              alt=""
            />

            <img
              style={{ marginRight: "50px" }}
              width="150px"
              src={m4}
              alt=""
            />
            <img
              style={{ marginRight: "50px" }}
              width="200px"
              src={m5}
              alt=""
            />
            <img
              style={{ marginRight: "50px" }}
              width="130px"
              src={m6}
              alt=""
            />
          </Box>
        </Marquee>
      </Container>
    </Box>
  );
}
