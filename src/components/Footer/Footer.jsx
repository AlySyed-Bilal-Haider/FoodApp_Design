import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FoodIF from "./FOOD-FI.png";
import Footertopology from "./Footertopology.png";
function Footer() {
  return (
    <>
      <Box sx={{ py: 2, color: "black", backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              height: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              //   flexDirection:{md:'row',xs:'column'}
            }}
          >
            <Box>
              <img src={FoodIF} alt="" style={{ height: "20px" }} />
            </Box>
            <Box
              sx={{
                position: "relative",
                top: "-70px",
              }}
            >
              <img
                src={Footertopology}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: { md: "25%", xs: "100%" },
                fontSize: "14px",
                textAlign: { md: "left", xs: "center" },
                mt: { md: 0, xs: 2 },
                fontFamily: "Regular",
              }}
            >
              © 2022 Food-Fi, Inc. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },

                width: { md: "35%", xs: "100%" },
                fontSize: { md: "14px", xs: "18px" },
                mt: { md: 0, xs: 2 },
              }}
            >
              <Typography fontFamily="Regular">Features</Typography>
              <Typography fontFamily="Regular">$EAT</Typography>
              <Typography fontFamily="Regular">Team</Typography>
              <Typography fontFamily="Regular">Roadmap</Typography>
              <Typography fontFamily="Regular">FAQ</Typography>
              <Typography fontFamily="Regular">Whitepaper</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "space-around", xs: "space-between" },
                alignItems: "center",
                width: { md: "20%", xs: "100%" },
                mt: { md: 0, xs: 4 },
              }}
            >
              <TwitterIcon />
              <TelegramIcon />
              <InstagramIcon />
              <TwitterIcon />
              <TelegramIcon />
              <InstagramIcon />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
