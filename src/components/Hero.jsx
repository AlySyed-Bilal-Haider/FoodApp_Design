import React from "react";
import {
  Container,
  Grid,
  Box,
  Stack,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";
import Herobgmb from "../images/Herobgmb.png";
import Herobgpc from "../images/Herobgpc.png";
import LaunchTimer from "./LaunchTimer";
import Partners from "./Partners";

export default function Hero() {
  const matches = useMediaQuery("(max-width:1000px)");
  const matches1 = useMediaQuery("(min-width:1440px)");
  return (
    <Box
      mt={-12}
      pt={20}
      style={{
        backgroundImage: `url(${matches ? "none" : Herobgpc})`,
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        backgroundSize: matches1 ? "70% 130%" : "70% 110%",
      }}
      height={matches ? "100%" : "100%"}
      id="eat"
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={matches ? 12 : 4.5}>
            <Box color="#000" fontSize="16px" fontFamily="Regular">
              The First
            </Box>
            <Box
              style={{
                fontSize: matches ? "40px" : "80px",
                fontFamily: "Light Bold",
                backgroundImage:
                  "linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "80px",
              }}
            >
              Eat2Earn
            </Box>
            <Box
              my={0}
              fontFamily="Light Bold"
              color="#202020"
              fontSize={matches ? "40px" : "80px"}
              style={{ lineHeight: "80px" }}
            >
              Protocol
            </Box>
            <Box fontSize="17px" color="#000000" fontFamily="Regular">
              FOOD-FI is the first eat-to-earn protocol encapsulating all things
              nutrition. More than a simple calorie-tracking app, FOOD-FI is an
              ecosystem on its own, accommodating various nutrition-related
              components ranging from tackling malnutrition to generating
              consumer traffic in the nutrition-related industry.
            </Box>
            <Box fontFamily="Regular" my={2} color="lightgray">
              Coming soon
            </Box>
            <Stack direction="row" spacing={4} alignItems="center">
              <img src={appstore} alt="" width="200px" height="50px" />
              <img src={googleplay} alt="" width="200px" height="50px" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <img
        src={matches ? Herobgmb : "none"}
        alt=""
        width="100%"
        style={{ marginTop: "30px" }}
      />
      <Container>
        <Box>
          <Box display="flex" justifyContent="center">
            <Box
              mt={3}
              p={0.23}
              width="100px"
              height="40px"
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
                cursor: "pointer",
              }}
            >
              Subscribe
            </Box>
          </Box>
          <LaunchTimer />
          <Typography
            mt={3}
            fontFamily="Regular"
            color="#BCBCBC"
            textAlign="center"
          >
            PRE-SALE STARTS IN:
          </Typography>
          <Partners />
        </Box>
      </Container>
    </Box>
  );
}
