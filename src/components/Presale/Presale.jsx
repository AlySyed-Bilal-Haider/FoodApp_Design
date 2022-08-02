import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";
// import Maskgroup from "./Image/Maskgroup.png";
import rocket from "./Image/rocket.png";
import saly from "./Image/Saly.png";
// import arrow from "./Image/toparrow.png";
import FAQ from "../Faq/FAQ.jsx";
import Presalebg from "./Image/Presale.png";
function Presale() {
  const matches = useMediaQuery("(max-width:975px)");
  const [expanded, setExpanded] = useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Presalebg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",

          py: 4,
        }}
        style={{ borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <Box s sx={{ textAlign: "center" }}>
                <img
                  src={rocket}
                  alt="rocket"
                  style={{
                    width: "50%",
                    marginTop: "-25px",

                    marginLeft: matches ? "10%" : "5%",
                  }}
                />
              </Box>
            </Grid>

            {/* ..........Presale and Launch................ */}
            <Grid md={6} xs={12}>
              <Box sx={{ pt: 12, pb: 4, px: { xs: "25px", md: "0px" } }}>
                <Typography
                  sx={{
                    fontSize: { md: "80px", xs: "40px" },
                    fontFamily: "Light Bold",
                  }}
                >
                  Pre-Sale{" "}
                </Typography>
                <Typography
                  fontFamily="Whyte Inktrap Light"
                  sx={{ fontSize: { md: "20px", xs: "15px" } }}
                >
                  Our first Presale for $EAT will be happening on GemPad. A
                  whitelist contest will be held to reward early and highly
                  engaged participants with an optimal house price.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { md: "80px", xs: "40px" },
                    fontFamily: "Light Bold",
                  }}
                >
                  Fair Launch
                </Typography>
                <Typography
                  fontFamily="Whyte Inktrap Light"
                  sx={{ fontSize: { md: "20px", xs: "15px" } }}
                >
                  The Food-Fi fair launch is our first aggressive push towards
                  mainstream recognition and appeal to a wider audience of
                  investors. The latter will take place on pinksale and offer a
                  last opportunity for investors to claim tokens at an optimal
                  price on a first come-first-served basis
                </Typography>
                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    borderRdaius: "12px",
                    padding: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  12/15/2022
                </Button>
              </Box>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* ..............Signup letter news here..................... */}
              <Box
                sx={{ width: { md: "50%", xs: "100%", mt: { md: 0, xs: 4 } } }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    m: { md: "auto", xs: "" },
                    px: { xs: "25px", md: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "80px", xs: "40px" },
                      fontFamily: "Light Bold",
                      lineHeight: { md: "80px", xs: "50px" },
                    }}
                  >
                    Sign up now for our newsletter
                  </Typography>
                  <Typography
                    fontFamily="Whyte Inktrap Light"
                    sx={{
                      fontSize: { md: "20px", xs: "15px" },
                    }}
                  >
                    Minima quos corporis aut dignissimos hic sunt. aut quaerat
                    cupiditate sit sed nobis distinctio molestiae eum.
                  </Typography>

                  <Box mt={4}>
                    <TextField
                      sx={{
                        width: "100%",
                        height: "65px",
                        paddingTop: "3px",
                        paddingLeft: "8px",
                        fontSize: "16px",
                        borderRadius: "13px",
                        fontFamily: "Regular",
                        "& label.Mui-focused": {
                          borderRadius: "13px",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#fff",
                          borderRadius: "13px",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#fff",
                            borderRadius: "13px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#fff",
                            borderRadius: "13px",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#fff",
                            borderRadius: "13px",
                          },
                        },
                        input: {
                          color: "#000",
                          fontSize: "18px",
                          "&::placeholder": {
                            textOverflow: "ellipsis !important",
                            color: "gray",
                          },
                        },

                        background: "#fff",
                      }}
                      id="standard-name"
                      // value={text}
                      // onChange={(e) => setText(e.target.value)}
                      placeholder={"Your e-mail address"}
                      InputProps={{
                        endAdornment: (
                          <Button
                            disableRipple={true}
                            sx={{
                              color: "#000",
                              borderRadius: "10px",
                              border: "1px transparent",
                              backgroundImage:
                                " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                              backgroundOrigin: "border-box",
                              backgroundClip: "content-box, border-box",
                              width: "200px",
                              marginRight: "-9px",
                              height: "55px",
                              fontSize: "16px",
                              fontFamily: "Regular",
                              padding: "2px",
                              textTransform: "capitalize",
                            }}
                          >
                            get started
                          </Button>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              {/* ......World Picture here....... */}
              <Box
                sx={{ width: { md: "50%", xs: "100%" }, textAlign: "center" }}
              >
                <img src={saly} alt="saly" style={{ width: "60%" }} />
              </Box>
            </Box>

            {/* ...........Faq here................ */}
            <Box mt={6} sx={{ py: 2, width: "100%" }}>
              <Typography
                sx={{
                  mb: -3,
                  background:
                    "linear-gradient(0deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundClip: " text",
                  textFillColor: " transparent",
                  fontSize: "60px",
                  textStroke: "2px rgb(245, 245, 245)",
                  textTransform: " uppercase",
                  textAlign: "center",
                  fontFamily: "Light Bold",
                }}
              >
                Faq
              </Typography>
            </Box>
          </Grid>
          <Box width="100%" display="flex" justifyContent="center">
            <FAQ />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Presale;
