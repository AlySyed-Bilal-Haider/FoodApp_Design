import React from "react";
import { Box, Typography, Container, Grid, Checkbox } from "@mui/material";
import bg from "../images/bg.png";
import { borderRadius } from "@mui/system";
import flag from "../images/flag.png";
import rocket from "../images/rocket.png";
import call from "../images/call.png";
import infinity from "../images/infinity.png";
import person from "../images/person.png";
import rmShadow from "../images/rmShadow.png";

export default function Roadmap() {
  return (
    <>
      <Box
        id="roadmap"
        position="relative"
        mt={5}
        pt={5}
        pb={100}
        height="100%"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={rmShadow}
          alt=""
          style={{
            width: "100%",
            zIndex: -1,
            position: "absolute",
            left: "0%",
            top: "-10%",
          }}
        />

        <Container maxWidth="xl">
          <Box
            mb={5}
            display="flex"
            justifyContent="center"
            fontFamily="Light Bold"
            color="#000000"
            fontSize={{ xs: "40px", md: "80px" }}
          >
            Roadmap
          </Box>
          <Box
            position="absolute"
            // zIndex={1}
            top="45%"
            left="0px"
            width="100%"
            textAlign="center"
            fontFamily="Light Bold"
            fontSize={{ xs: "30px", md: "50px" }}
            color="#ffffff"
          >
            Foodefi
          </Box>
          <Box position="relative">
            <Box
              position="absolute"
              left="44%"
              top="10%"
              border="1.20521px solid #E6E6E6"
              boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
              borderRadius="19px"
              display="flex"
              flexDirection="column"
              bgcolor="#ffffff"
              p={2}
              width="170px"
              height="80px"
              overflow="hidden"
              sx={{
                "&:hover": {
                  height: "250px",
                  width: "250px",
                },
                cursor: "pointer",
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={flag} alt="" />
                <Box
                  m={1.5}
                  alignContent="center"
                  color="#000000"
                  fontFamily="Light Bold"
                >
                  Phase 1
                </Box>
              </Box>
              <Box mt={1.1} fontSize="12px" color="#000000">
                Main-net Food-Fi release
                <br /> So-FI Integration
                <br /> Metaverse Development
                <br /> First IDO launch on GemPad <br /> Second & Third IDO’s
                secured on Munchpad
                <br /> External Partnerships <br /> Tailored Assistance Service
                for Vetted Projects
              </Box>
            </Box>
            <Box
              position="absolute"
              right="20rem"
              top="14rem"
              border="1.20521px solid #E6E6E6"
              boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
              borderRadius="19px"
              display="flex"
              flexDirection="column"
              bgcolor="#ffffff"
              p={2}
              width="170px"
              height="80px"
              overflow="hidden"
              sx={{
                "&:hover": {
                  height: "250px",
                  width: "250px",
                },
                cursor: "pointer",
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={rocket} alt="" />
                <Box
                  m={1.5}
                  alignContent="center"
                  color="#000000"
                  fontFamily="Light Bold"
                >
                  Phase 5
                </Box>
              </Box>
              <Box mt={1.1} fontSize="12px" color="#000000">
                Main-net Food-Fi release
                <br /> So-FI Integration
                <br /> Metaverse Development
                <br /> First IDO launch on GemPad <br /> Second & Third IDO’s
                secured on Munchpad
                <br /> External Partnerships <br /> Tailored Assistance Service
                for Vetted Projects
              </Box>
            </Box>
            <Box
              position="absolute"
              left="20rem"
              top="14rem"
              border="1.20521px solid #E6E6E6"
              boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
              borderRadius="19px"
              display="flex"
              flexDirection="column"
              bgcolor="#ffffff"
              p={2}
              width="170px"
              height="80px"
              overflow="hidden"
              sx={{
                "&:hover": {
                  height: "250px",
                  width: "250px",
                },
                cursor: "pointer",
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={call} alt="" />
                <Box
                  m={1.5}
                  alignContent="center"
                  color="#000000"
                  fontFamily="Light Bold"
                >
                  Phase 2
                </Box>
              </Box>
              <Box mt={1.1} fontSize="12px" color="#000000">
                Main-net Food-Fi release
                <br /> So-FI Integration
                <br /> Metaverse Development
                <br /> First IDO launch on GemPad <br /> Second & Third IDO’s
                secured on Munchpad
                <br /> External Partnerships <br /> Tailored Assistance Service
                for Vetted Projects
              </Box>
            </Box>
            <Box
              position="absolute"
              left="22rem"
              top="29rem"
              border="1.20521px solid #E6E6E6"
              boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
              borderRadius="19px"
              display="flex"
              flexDirection="column"
              bgcolor="#ffffff"
              p={2}
              width="170px"
              height="80px"
              overflow="hidden"
              sx={{
                "&:hover": {
                  height: "250px",
                  width: "250px",
                },
                cursor: "pointer",
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={infinity} alt="" />
                <Box
                  m={1.5}
                  alignContent="center"
                  color="#000000"
                  fontFamily="Light Bold"
                >
                  Phase 3
                </Box>
              </Box>
              <Box mt={1.1} fontSize="12px" color="#000000">
                Main-net Food-Fi release
                <br /> So-FI Integration
                <br /> Metaverse Development
                <br /> First IDO launch on GemPad <br /> Second & Third IDO’s
                secured on Munchpad
                <br /> External Partnerships <br /> Tailored Assistance Service
                for Vetted Projects
              </Box>
            </Box>
            <Box
              position="absolute"
              right="22rem"
              top="29rem"
              border="1.20521px solid #E6E6E6"
              boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
              borderRadius="19px"
              display="flex"
              flexDirection="column"
              bgcolor="#ffffff"
              p={2}
              width="170px"
              height="80px"
              overflow="hidden"
              sx={{
                "&:hover": {
                  height: "250px",
                  width: "250px",
                },
                cursor: "pointer",
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={person} alt="" />
                <Box
                  m={1.5}
                  alignContent="center"
                  color="#000000"
                  fontFamily="Light Bold"
                >
                  Phase 4
                </Box>
              </Box>
              <Box mt={1.1} fontSize="12px" color="#000000">
                Main-net Food-Fi release
                <br /> So-FI Integration
                <br /> Metaverse Development
                <br /> First IDO launch on GemPad <br /> Second & Third IDO’s
                secured on Munchpad
                <br /> External Partnerships <br /> Tailored Assistance Service
                for Vetted Projects
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
