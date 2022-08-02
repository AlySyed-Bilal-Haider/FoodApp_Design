import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
// import img from "../images/sliderImg.png";
// import tokenomics from "../images/tokenomics.png";
import pic2 from "../images/pic2.png";
import checkImg from "../images/checkImg.png";
import SliderPart from "./Slider";

export default function MetaverseIntegration() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <Box mt={10} height="100%">
      <Container maxWidth="xl">
        <Box
          borderRadius="19px"
          //   bgcolor="#ffffff"
          // style={{
          //   background:
          //     "linear-gradient(2.36deg, #FFFFFF 6.57%, rgba(255, 255, 255, 0) 97.17%)",
          // }}
          style={{
            background: `url(${pic2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
          display="flex"
          alignItems="center"
          flexDirection="column"
          p={2}
        >
          <Box
            width="100%"
            textAlign="center"
            fontFamily="Light Bold"
            fontSize={matches ? "40px" : "80px"}
            lineHeight={matches ? "42px" : "80px"}
            color="#000000"
          >
            Metaverse Integration
          </Box>
          <Box
            color="#000000"
            mt={2}
            width={matches ? "100%" : "55%"}
            textAlign="center"
            fontSize={20}
          >
            {" "}
            The Food-Fi team is committed to direct our metaverse integration
            through an entirely communitarian approach. Our 2222 Munchies will
            be the landlords of our Food-Fi Head Quarters which will serve as an
            anchor point for future development.
          </Box>
          <Box width="100%">
            <SliderPart />
          </Box>

          <Grid mt={5} container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={5}>
              <Box display="flex" flexDirection="column">
                <Box
                  width="100%"
                  fontFamily="Regular"
                  fontSize={matches ? "16px" : "20px"}
                  lineHeight="25px"
                  color="#000000"
                >
                  The FOOD-FI HQ aims at remaining in line with our mission of
                  pragmatically marrying WEB 3.0’s potential with the nutrition
                  industry.
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={2}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Beginning on Phase 3
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Strategic partnerships within the nutrition sector
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Exclusive culinary experiences
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Restaurtation Incubator
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Humanized Support
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box display="flex" flexDirection="column">
                <Box
                  width="100%"
                  fontFamily="Regular"
                  fontSize={matches ? "16px" : "20px"}
                  color="#000000"
                >
                  Food-Fi DAO Structure
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={2}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Governance rights reserved to LP Providers and Munchies
                  Holders
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Voting on any potential WEB 3.0 Development
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Suggestions on existing structure
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Proposals for metaverse Integration
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  color="#000000"
                  mt={1}
                >
                  <img
                    width="20px"
                    style={{ marginRight: "10px" }}
                    src={checkImg}
                    alt=""
                  />
                  Voting on treasury allocations
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center">
            <Box
              mt={2}
              mb={-4}
              p={0.23}
              width="100px"
              height="40px"
              // textAlign="center"
              color="#000000"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderRadius: "6px",
                border: "1px transparent",
                backgroundImage:
                  " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              See More
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
