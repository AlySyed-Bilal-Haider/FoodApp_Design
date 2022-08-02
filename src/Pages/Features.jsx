import {
  Box,
  Typography,
  Container,
  Grid,
  Checkbox,
  useMediaQuery,
} from "@mui/material";

import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";
import feature5 from "../images/feature5.png";
import feature6 from "../images/feature6.png";
import feature7 from "../images/feature7.png";
import featureBG1 from "../images/featureBG1.png";
import featureBG2 from "../images/featureBG2.png";
import mobile from "../images/mobile.png";
import foodi from "../images/foodi.png";

function Features() {
  const matches = useMediaQuery("(min-width: 600px)");
  return (
    <Box mt={10} position="relative" id="features">
      <img
        src={featureBG1}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          top: "0px",
          right: "0px",
          zIndex: -1,
        }}
      />
      <img
        src={featureBG2}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          top: "0px",
          left: "0px",
          zIndex: -1,
        }}
      />

      <Container maxWidth="xl">
        <Typography
          fontSize={{ xs: "40px", md: "80px" }}
          fontFamily="Light Bold"
          color="#202020"
          textAlign="center"
        >
          Features
        </Typography>

        <Typography
          mt={2}
          fontSize="20px"
          display={{ sm: "block", xs: "none" }}
          color="#202020"
          textAlign="center"
        >
          The FOOD-FI ecosystem is at the forefront of incorporating real
          use-case <br /> to blockchain technology applications within the
          nutrition industry.
        </Typography>

        <Typography
          mt={2}
          fontSize="17px"
          display={{ sm: "none", xs: "block" }}
          color="#202020"
          textAlign="center"
        >
          The FOOD-FI ecosystem is at the forefront of incorporating real
          use-case to blockchain technology applications within the nutrition
          industry.
        </Typography>

        <Box mt={{ xs: 5, md: 10 }}>
          <Grid container alignItems="center">
            {/* ----First grid items----- */}
            <Grid item xs={12} sm={6}>
              <Box>
                <img src={matches ? feature1 : feature5} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box textAlign={matches ? "" : "center"}>
                  <Typography
                    fontFamily="Light Bold"
                    color="#202020"
                    fontSize={{ xs: "34px", md: "48px" }}
                  >
                    Track
                  </Typography>
                  <Typography
                    fontFamily="Regular"
                    color="#202020"
                    fontSize={{ xs: "17px", md: "24px" }}
                  >
                    Caloric Intake & Macros
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* ----2nd grid items----- */}
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box textAlign={matches ? "" : "center"}>
                  <Typography
                    fontFamily="Light Bold"
                    color="#202020"
                    fontSize={{ xs: "34px", md: "48px" }}
                  >
                    Food Log
                  </Typography>
                  <Typography
                    fontFamily="Regular"
                    color="#202020"
                    fontSize={{ xs: "17px", md: "24px" }}
                  >
                    Exercise Mindful Eating Habits
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Box>
                <img src={matches ? feature2 : feature6} alt="" width="100%" />
              </Box>
            </Grid>
          </Grid>
          {/* ----3rd grid items----- */}
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box>
                <img src={matches ? feature3 : feature7} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box textAlign={matches ? "" : "center"}>
                  <Typography
                    fontFamily="Light Bold"
                    color="#202020"
                    fontSize={{ xs: "34px", md: "48px" }}
                  >
                    Eat Out
                  </Typography>
                  <Typography
                    fontFamily="Regular"
                    color="#202020"
                    fontSize={{ xs: "17px", md: "24px" }}
                  >
                    Earn $EAT by exploring surrounding <br /> restaurants in
                    your area
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* ----4th grid items----- */}
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box textAlign={matches ? "" : "center"}>
                  <Typography
                    fontFamily="Light Bold"
                    color="#202020"
                    fontSize={{ xs: "34px", md: "48px" }}
                  >
                    Wallet
                  </Typography>
                  <Typography
                    fontFamily="Regular"
                    color="#202020"
                    fontSize={{ xs: "17px", md: "24px" }}
                  >
                    Lorem Ipsum content Wallet
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Box>
                <img src={feature4} alt="" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid mt={{ xs: 0, md: 5 }} item xs={12} md={6}>
              <Box mt={5} textAlign="left">
                <Box
                  fontFamily="Light Bold"
                  fontSize={{ xs: "40px", md: "80px" }}
                  sx={{ lineHeight: { xs: "40px", md: "80px" } }}
                  fontWeight="bold"
                  color="#000000"
                >
                  Tomorrow’s DeFi begins{" "}
                  <span
                    style={{
                      color: "#4473FA",
                      fontFamily: "Light Bold",
                      fontWeight: "bold",
                    }}
                  >
                    Today.
                  </span>
                </Box>
                <Box m={2} display="flex" flexDirection="row">
                  <Box>
                    <Checkbox defaultChecked style={{ color: "#4473FA" }} />
                  </Box>
                  <Box
                    // fontFamily="Whyte Inktrap"
                    fontSize="18px"
                    fontWeight="400"
                    color="#000000"
                  >
                    Our staking and farming pools provide a seamless financial
                    experience to our users via our multi-chain integration and
                    vault deployment.
                  </Box>
                </Box>
                <Box m={2} display="flex" flexDirection="row">
                  <Box>
                    <Checkbox defaultChecked style={{ color: "#4473FA" }} />
                  </Box>
                  <Box
                    // fontFamily="Whyte Inktrap"
                    fontSize="18px"
                    fontWeight="400"
                    color="#000000"
                  >
                    Along with our optimization-focused DeFi architecture, users
                    will earn $EAT via the various features of our mobile app
                    thereby compounding $EAT rewards and further benefit from
                    our generous APY.
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid mt={{ xs: 0, md: 5 }} item xs={12} md={6}>
              <Box>
                <img src={mobile} width="100%" height="100%" alt="" />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box ml={{ xs: 1, md: 0 }}>
                <img src={foodi} width="100%" height="100%" alt="" />
              </Box>
            </Grid>

            <Grid mt={{ xs: 3, md: 6 }} item xs={12} md={6}>
              <Box mt={5} textAlign="left">
                <Box
                  fontFamily="Light Bold"
                  fontSize="16px"
                  fontWeight="bold"
                  color="#000000"
                >
                  MADE WITH
                </Box>
                <Box
                  fontFamily="Light Bold"
                  fontSize={{ xs: "40px", md: "80px" }}
                  fontWeight="bold"
                  color="#000000"
                  sx={{ lineHeight: { xs: "40px", md: "80px" } }}
                >
                  Nutricionists
                </Box>
                <Box
                  m={{ xs: 2, md: 0 }}
                  mt={{ xs: 2, md: 4 }}
                  fontSize={{ xs: "16px", md: "20px" }}
                  fontWeight="400"
                  color="#000000"
                >
                  Aliquam et consequatur facilis magnam molestiae ea id.
                  Voluptatem recusandae doloribus dolorum porro consetur Ducimus
                  perspiciatis perspiciatis iusto qui molestiae. Voluptatem aut
                  explicabo veritatis incidunt. Autem et saepe veniam.
                  Exercitationem illo placeat dol Dolores consectetur similique
                  rerum. Et ad est. Illo nesciunt et aliquam voluptate.
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default Features;
