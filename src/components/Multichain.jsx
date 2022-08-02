import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import bg from "../images/bgMultichain.png";
import bnb from "../images/bnb.png";
import cro from "../images/cro.png";
import pol from "../images/pol.png";
import list from "../images/list.png";
import widgetL from "../images/widgetL.png";
import widgetR from "../images/widgetR.png";
import shadowMul from "../images/shadowMul.png";

export default function Multichain() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <Box mt={matches ? 140 : 80} position="relative">
      <img
        width="150px"
        style={{
          marginRight: "10px",
          zIndex: -1,
          position: "absolute",
          left: "0px",
          top: "-130px",
        }}
        src={widgetL}
        alt=""
      />
      <img
        width="150px"
        style={{
          marginRight: "10px",
          zIndex: -1,
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
        src={widgetR}
        alt=""
      />
      <img
        src={shadowMul}
        alt=""
        style={{
          position: "absolute",
          top: "-30%",
          left: "0px",
          zIndex: -1,
          width: "100%",
        }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={8}>
            <Box display="flex" flexDirection="column">
              <Box
                my={0}
                fontFamily="Light Bold"
                lineHeight={matches ? "50px" : "90px"}
                color="#202020"
                fontSize={matches ? "40px" : "80px"}
                mt={matches ? -2 : -6}
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                Multi-Chain Integration brought by <br />
                <span
                  style={{
                    fontFamily: "Light Bold",
                    backgroundImage:
                      "linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  Food-Fi{" "}
                </span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              display="flex"
              flexDirection="column"
              borderRadius="19px"
              p={2}
            >
              <Box
                color="#000000"
                sx={{
                  borderRadius: "6px",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
                p={0.2}
                position="relative"
              >
                <Box position="absolute" right="0px" bottom="-5px">
                  <img
                    width="100px"
                    style={{ marginRight: "10px" }}
                    src={bnb}
                    alt=""
                  />
                </Box>
                <Box
                  pt={2}
                  px={2}
                  display="flex"
                  alignItems="center"
                  fontSize={18}
                >
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Low transaction cost
                </Box>
                <Box px={2} display="flex" alignItems="center" fontSize={18}>
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  High-speed
                </Box>
                <Box
                  pb={2}
                  px={2}
                  display="flex"
                  alignItems="center"
                  fontSize={18}
                >
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Proven track-record
                </Box>
              </Box>
              <Box
                mt={2}
                color="#000000"
                sx={{
                  borderRadius: "6px",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
                p={0.2}
                position="relative"
              >
                <Box position="absolute" right="0px" bottom="-5px">
                  <img
                    width="100px"
                    style={{ marginRight: "10px" }}
                    src={cro}
                    alt=""
                  />
                </Box>
                <Box
                  pt={2}
                  px={2}
                  display="flex"
                  alignItems="center"
                  fontSize={18}
                >
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Permission-less
                </Box>
                <Box px={2} display="flex" alignItems="center" fontSize={18}>
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Fully Decentralized
                </Box>
                <Box
                  pb={2}
                  px={2}
                  display="flex"
                  alignItems="center"
                  fontSize={18}
                >
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Energy Efficient
                </Box>
              </Box>
              <Box
                mt={2}
                color="#000000"
                sx={{
                  borderRadius: "6px",
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
                p={0.2}
                position="relative"
              >
                <Box position="absolute" right="0px" bottom="-5px">
                  <img
                    width="100px"
                    style={{ marginRight: "10px" }}
                    src={pol}
                    alt=""
                  />
                </Box>
                <Box
                  pt={2}
                  px={2}
                  display="flex"
                  alignItems="center"
                  fontSize={18}
                >
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Multiple Use Cases
                </Box>
                <Box px={2} display="flex" alignItems="center" fontSize={18}>
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Secure
                </Box>
                <Box
                  pb={2}
                  px={2}
                  display="flex"
                  alignItems="center"
                  fontSize={18}
                >
                  <img
                    width="10px"
                    style={{ marginRight: "10px" }}
                    src={list}
                    alt=""
                  />
                  Rapid Expansion
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
