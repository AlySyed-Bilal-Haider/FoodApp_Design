import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import firstmember from "./image/first.png";
import secondmember from "./image/two.png";
import thirdmember from "./image/three.png";
import fourmember from "./image/four.png";
import fivemember from "./image/five.png";
import sexmember from "./image/six.png";
import sevenmember from "./image/seven.png";
import eightmember from "./image/eight.png";
import ninemember from "./image/nine.png";
import transparence from "./image/transparencegroup.png";
import shTo1 from "../../images/shTo1.png";
import shTo2 from "../../images/shTo2.png";
const Team = () => {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <>
      <Box sx={{ py: 2, color: "black" }} position="relative" id="team">
        <img
          style={{
            marginRight: "10px",
            zIndex: -1,
            position: "absolute",
            left: "0px",
            top: "30%",
            width: "100%",
          }}
          src={shTo2}
          alt=""
        />

        <img
          style={{
            zIndex: -1,
            position: "absolute",
            right: "0px",
            top: "60%",
            width: "100%",
          }}
          src={shTo1}
          alt=""
        />

        <Container maxWidth="xl">
          <Box>
            <Typography
              sx={{
                fontSize: matches ? "40px" : "80px",
                textAlign: "center",
                py: 4,
                color: "black",
                fontFamily: "Light Bold",
              }}
            >
              Team
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ textAlign: "center" }}>
            <Grid xs={12} sm={6} md={4}>
              <Box>
                <img src={firstmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                {" "}
                Joseph
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>CO-FOUNDER</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={secondmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                Mathew
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>CO-FOUNDER</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={thirdmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                Ziang
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                CREATIVE DIRECTOR
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={fourmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                James
              </Typography>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                senior full-stack developer
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={fivemember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                Andrei
              </Typography>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                Front-end Developer{" "}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={sexmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                Behice
              </Typography>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                UI DEVELOPER
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={sevenmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                Nelson
              </Typography>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                Soldity smart - contract
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={eightmember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                David
              </Typography>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                MARKETING COORDINATOR
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <img src={ninemember} alt="food di" width="100%" />
              </Box>
              <Typography sx={{ fontSize: "26px", fontFamily: "Regular" }}>
                TBA
              </Typography>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                NFT ARTIST
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ pt: 6, pb: 2, textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: matches ? "40px" : "80px",
                fontFamily: "Light Bold",
                lineHeight: { md: "80px", xs: "50px" },
              }}
            >
              Transparence
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "80px", xs: "40px" },
                fontFamily: "Light Bold",
                background:
                  "linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                backgroundClip: " text",
                textFillColor: " transparent",
                textStroke: "2px rgb(245, 245, 245)",
                lineHeight: { xs: "42px", md: "80px" },
              }}
            >
              in Every Respect
            </Typography>
            <Box sx={{ marginTop: "-10px" }}>
              <img
                src={transparence}
                alt=""
                style={{
                  position: "relative",
                  width: matches ? "100%" : "60%",
                  height: { md: "200px", xs: "100px" },
                  margin: "auto",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Team;
