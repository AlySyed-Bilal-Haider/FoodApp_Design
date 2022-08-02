import React from "react";
import { Box, Typography, Container, Grid, Checkbox } from "@mui/material";
import bg from "../images/bg.png";
import { borderRadius } from "@mui/system";
import flag from "../images/flag.png";
import rocket from "../images/rocket.png";
import call from "../images/call.png";
import infinity from "../images/infinity.png";
export default function MobileRoadmap() {
  return (
    <>
      <Box
        id="roadmap"
        mt={0}
        pt={10}
        pb={10}
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box>
          <Container maxWidth="xl">
            <Box
              display="flex"
              justifyContent="center"
              fontFamily="Light Bold"
              color="#000000"
              fontSize={{ xs: "42px", md: "54px" }}
            >
              Roadmap
            </Box>
            <Box mt={5}>
              <Box
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                p={2}
                width="100%"
                height="80px"
                overflow="hidden"
                sx={{
                  "&:hover": {
                    height: "250px",
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
                  <br /> External Partnerships <br /> Tailored Assistance
                  Service for Vetted Projects
                </Box>
              </Box>
              <Box
                mt={2}
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                p={2}
                width="100%"
                height="80px"
                overflow="hidden"
                sx={{
                  "&:hover": {
                    height: "250px",
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
                  <br /> External Partnerships <br /> Tailored Assistance
                  Service for Vetted Projects
                </Box>
              </Box>

              <Box
                mt={2}
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                p={2}
                width="100%"
                height="80px"
                overflow="hidden"
                sx={{
                  "&:hover": {
                    height: "250px",
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
                  <br /> External Partnerships <br /> Tailored Assistance
                  Service for Vetted Projects
                </Box>
              </Box>
              <Box
                mt={2}
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                p={2}
                width="100%"
                height="80px"
                overflow="hidden"
                sx={{
                  "&:hover": {
                    height: "250px",
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
                    Phase 4
                  </Box>
                </Box>
                <Box mt={1.1} fontSize="12px" color="#000000">
                  Main-net Food-Fi release
                  <br /> So-FI Integration
                  <br /> Metaverse Development
                  <br /> First IDO launch on GemPad <br /> Second & Third IDO’s
                  secured on Munchpad
                  <br /> External Partnerships <br /> Tailored Assistance
                  Service for Vetted Projects
                </Box>
              </Box>
              <Box
                mt={2}
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                p={2}
                width="100%"
                height="80px"
                overflow="hidden"
                sx={{
                  "&:hover": {
                    height: "250px",
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
                  <br /> External Partnerships <br /> Tailored Assistance
                  Service for Vetted Projects
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
