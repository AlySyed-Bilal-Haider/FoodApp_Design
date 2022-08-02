import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import tw from "../images/fTwitter.png";
import tg from "../images/fTelegram.png";
import ds from "../images/fDiscord.png";
import ig from "../images/fInstagram.png";
import MetaverseIntegration from "./MetaverseIntegration";

export default function FollowUs() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <Box pt={10} height="100%">
      <Box
        width="100%"
        textAlign="center"
        fontFamily="Light Bold"
        fontSize={matches ? "40px" : "80px"}
        color="#000000"
      >
        FOLLOW US
      </Box>
      <Box
        style={{
          background:
            " linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
        }}
        height="600px"
        mt={matches ? 10 : 20}
      >
        <Container maxWidth="md">
          <Grid container spacing={matches ? 0 : 5}>
            <Grid mt={matches ? -3 : -10} item xs={6} sm={3}>
              <Box
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                py={2}
                overflow="hidden"
                height="88px"
                width="100%"
                sx={{
                  "&:hover": {
                    height: "145px",
                  },
                  cursor: "pointer",
                }}
              >
                <Box
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src={tw} alt="" />
                  <Box ml={2} color="#000000" fontSize="13px">
                    {" "}
                    <span
                      style={{
                        fontFamily: "Regular",
                        fontSize: "20px",
                      }}
                    >
                      150k
                    </span>
                    <br />
                    Visitors
                  </Box>
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <Box
                    mt={2}
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
                    Follow
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid mt={matches ? -3 : -10} item xs={6} sm={3}>
              <Box
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                py={2}
                overflow="hidden"
                height="88px"
                sx={{
                  "&:hover": {
                    height: "145px",
                  },
                  cursor: "pointer",
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img src={tg} alt="" />
                  <Box ml={2} color="#000000" fontSize="13px">
                    {" "}
                    <span
                      style={{
                        fontFamily: "Regular",
                        fontSize: "20px",
                      }}
                    >
                      150k
                    </span>
                    <br />
                    Visitors
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box
                    mt={2}
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
                    Follow
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid mt={matches ? 2 : -10} item xs={6} sm={3}>
              <Box
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                py={2}
                overflow="hidden"
                height="88px"
                sx={{
                  "&:hover": {
                    height: "145px",
                  },
                  cursor: "pointer",
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img src={ds} alt="" />
                  <Box ml={2} color="#000000" fontSize="13px">
                    {" "}
                    <span
                      style={{
                        fontFamily: "Regular",
                        fontSize: "20px",
                      }}
                    >
                      150k
                    </span>
                    <br />
                    Visitors
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box
                    mt={2}
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
                    Follow
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid mt={matches ? 2 : -10} item xs={6} sm={3}>
              <Box
                border="1.20521px solid #E6E6E6"
                boxShadow="3.61562px 9.64167px 20.4885px rgba(0, 0, 0, 0.15)"
                borderRadius="19px"
                display="flex"
                flexDirection="column"
                bgcolor="#ffffff"
                py={2}
                overflow="hidden"
                height="88px"
                sx={{
                  "&:hover": {
                    height: "145px",
                  },
                  cursor: "pointer",
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img src={ig} alt="" />
                  <Box ml={2} color="#000000" fontSize="13px">
                    {" "}
                    <span
                      style={{
                        fontFamily: "Regular",
                        fontSize: "20px",
                      }}
                    >
                      150k
                    </span>
                    <br />
                    Visitors
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box
                    mt={2}
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
                    Follow
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <MetaverseIntegration />
      </Box>
    </Box>
  );
}
