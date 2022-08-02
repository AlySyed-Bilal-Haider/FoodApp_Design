import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Graphy from "../../images/tokenomics.png";

import "./Tokencss.css";
import Presale from "./Presale.png";
import pool from "./pool.png";
import locked from "./locked.png";
import elipse from "./elipse.png";
const Tokenmetrics = {
  fontSize: "20px",
  marginTop: "23px",
};

const Buysell = {
  fontSize: "10px",
  marginTop: "10px",
  fontWeight: "bold",
};
function Token() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <>
      <Box position="relative">
        <Container>
          <Box
            sx={{
              py: 6,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "80px", xs: "40px" },
                m: 1,
                textAlign: "center",
                color: "black",
                fontFamily: "Light Bold",
                lineHeight: { xs: "42px", md: "80px" },
              }}
            >
              Tokenomics{" "}
              <span
                style={{
                  fontSize: matches ? "40px" : "80px",
                  fontFamily: "Light Bold",
                  backgroundImage:
                    "linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                +
              </span>{" "}
              Tokenmetrics
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  background: " #FFFFFF",
                  boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  color: "black",
                  p: 0.2,
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <Typography
                  sx={{ fontSize: "32px", fontFamily: "Light Bold", p: 3 }}
                >
                  Token-metrics
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: { md: "row", xs: "column" },
                    width: "100%",
                    pb: { md: 9, xs: 6 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      width: { md: "55%", xs: "100%" },
                    }}
                  >
                    {/* ...........Presale................ */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={Presale}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Presale
                        </Typography>
                      </Box>
                      <Typography>12%</Typography>
                    </Box>
                    {/* ..............Liquidity Pool............. */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={pool}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Liquidity Pool
                        </Typography>
                      </Box>
                      <Typography>30%</Typography>
                    </Box>
                    {/* ....................Locked.............. */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={locked}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Locked
                        </Typography>
                      </Box>
                      <Typography>30%</Typography>
                    </Box>
                    {/* .........Rewards ........ */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={Presale}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Rewards (application users, staking and farming){" "}
                        </Typography>
                      </Box>
                      <Typography>30%</Typography>
                    </Box>
                    {/* ...............Marketing/Development ............... */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={locked}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Marketing/Development{" "}
                        </Typography>
                      </Box>
                      <Typography>1%</Typography>
                    </Box>
                    {/* .............Burnt................ */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={pool}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Burnt{" "}
                        </Typography>
                      </Box>
                      <Typography>3%</Typography>
                    </Box>
                    {/* .............Liquidity lock-up days............... */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                      style={Tokenmetrics}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <img
                          src={elipse}
                          alt="Presale"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily="Regular"
                          sx={{ width: { md: "80%", xs: "100%" } }}
                        >
                          Liquidity lock-up days{" "}
                        </Typography>
                      </Box>
                      <Typography>90Day</Typography>
                    </Box>
                  </Box>

                  {/* ................Graphy............... */}
                  <Box
                    sx={{
                      width: { md: "45%", xs: "100%" },
                      textAlign: "center",
                      px: 2,
                    }}
                  >
                    <img src={Graphy} alt="Graphy" style={{ width: "100%" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* ..........Buy Tax...... */}
              <Box
                sx={{
                  background: " #FFFFFF",
                  boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  color: "black",
                  p: 0.2,
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontFamily: "Light Bold", p: 2 }}
                >
                  Buy Tax
                </Typography>
                {/* ..............Buy Tax............ */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    pb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Liquidity
                      </Typography>
                    </Box>
                    <Typography>3%</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Reflection in BUSD
                      </Typography>
                    </Box>
                    <Typography>2%</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Smart-contract + application development
                      </Typography>
                    </Box>
                    <Typography>2%</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Marketing
                      </Typography>
                    </Box>
                    <Typography>1%</Typography>
                  </Box>
                </Box>
              </Box>

              {/* ..............Sell Tax............ */}
              <Box
                sx={{
                  background: " #FFFFFF",
                  boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  color: "black",
                  p: 0.2,
                  mt: 1,
                  border: "1px transparent",
                  backgroundImage:
                    " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <Typography
                  fontFamily="Regular"
                  sx={{ fontSize: "24px", fontWeight: "bold", p: 2 }}
                >
                  Sell Tax
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    pb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Liquidity
                      </Typography>
                    </Box>
                    <Typography>2%</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Reflection in BUSD
                      </Typography>
                    </Box>
                    <Typography>2%</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="Presale"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Smart-contract + application development
                      </Typography>
                    </Box>
                    <Typography>2%</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    style={Buysell}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "60%",
                      }}
                    >
                      <img
                        src={elipse}
                        alt="elipse"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        fontFamily="Regular"
                        sx={{ width: { md: "80%", xs: "100%" } }}
                      >
                        Marketing
                      </Typography>
                    </Box>
                    <Typography>2%</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            mt={5}
            color="#000"
            fontSize="16px"
            fontFamily="Regular"
          >
            Total Supply
          </Box>
          <Divider
            style={{
              border: "1px transparent",
              color:
                "linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
              // backgroundOrigin: "border-box",
              // backgroundClip: "content-box, border-box",
            }}
          >
            <Box
              textAlign="center"
              mt={matches ? -1 : -2}
              style={{
                fontSize: matches ? "35px" : "65px",
                fontFamily: "Light Bold",
                backgroundImage:
                  "linear-gradient(45deg, #FAAF86 23.52%, #FAAF86 37.59%, #765FEF 89.08%, #4473FA 110.16%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              150.000.000
            </Box>
          </Divider>
        </Container>
      </Box>
    </>
  );
}

export default Token;
