import React, { useState, useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import moment from "moment";

function LaunchTimer({ setlaunch }) {
  const matches = useMediaQuery("(max-width:700px)");

  let interval = useRef();
  let time = 1687202400;
  // let time = 1685388000;

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minuts: 0,
    time_seconds: 0,
  });

  const startTime = async (time) => {
    interval = setInterval(() => {
      var jun = moment().utc().format("x");
      let untilTime = moment.unix(time).utc().format("x");
      const distance = +untilTime - +jun;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
        setlaunch(true);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minuts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    if (time) {
      startTime(+time);
    }
  }, [time]);
  return (
    <Box>
      <Box
        fontSize={{ xs: "12px", sm: "15px" }}
        fontWeight={600}
        letterSpacing="1%"
        textTransform="uppercase"
        mb={1}
      >
        launching in:
      </Box>
      <Box
        mx={"auto"}
        width={{ xs: "100%", sm: "407px" }}
        height="128px"
        sx={{
          borderRadius: "16px",
          border: "1px transparent",
          backgroundImage:
            " linear-gradient(#ffffff, #ffffff  ),linear-gradient(94.21deg, #FAAF86 17.52%, #C2569D 43.59%, #765FEF 89.08%, #4473FA 110.16%)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
        }}
        padding="1px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2.5}
          px={3}
        >
          <Box>
            <Box
              fontSize={{ xs: "28px", sm: "38px" }}
              fontWeight={500}
              letterSpacing="3%"
              textAlign="center"
              color="#000000"
              fontFamily="Light Bold"
            >
              {countTime.time_days}
            </Box>
            <Box
              fontSize={{ xs: "11px", sm: "13px" }}
              fontWeight={600}
              letterSpacing="3%"
              textAlign="center"
              color="text.secondary"
            >
              DAYS
            </Box>
          </Box>
          <Box
            style={{
              border: "0.5px solid rgba(255, 255, 255, 0.15)",
              height: "70px",
              color: "#000000",
              fontSize: "52px",
            }}
          >
            :
          </Box>
          <Box>
            <Box
              fontSize={{ xs: "28px", sm: "38px" }}
              fontWeight={500}
              letterSpacing="3%"
              textAlign="center"
              color="#000000"
              fontFamily="Light Bold"
            >
              {countTime.time_Hours}
            </Box>
            <Box
              fontSize={{ xs: "11px", sm: "13px" }}
              fontWeight={600}
              letterSpacing="3%"
              textAlign="center"
              color="text.secondary"
            >
              HOURS
            </Box>
          </Box>
          <Box
            style={{
              border: "0.5px solid rgba(255, 255, 255, 0.15)",
              height: "70px",
              color: "#000000",
              fontSize: "52px",
            }}
          >
            :
          </Box>

          <Box>
            <Box
              fontSize={{ xs: "28px", sm: "38px" }}
              fontWeight={500}
              letterSpacing="3%"
              textAlign="center"
              color="#000000"
              fontFamily="Light Bold"
            >
              {countTime.time_Minuts}
            </Box>
            <Box
              fontSize={{ xs: "11px", sm: "13px" }}
              fontWeight={600}
              letterSpacing="3%"
              textAlign="center"
              color="text.secondary"
            >
              MINUTES
            </Box>
          </Box>
          {/* <hr
            style={{
              border: "0.5px solid rgba(255, 255, 255, 0.15)",
              height: "70px",
            }}
          />
          <Box>
            <Box
              fontSize={{ xs: "28px", sm: "38px" }}
              fontWeight={500}
              letterSpacing="3%"
              textAlign="center"
              color="#13B4EC  "
            >
              {countTime.time_seconds}
            </Box>
            <Box
              fontSize={{ xs: "11px", sm: "13px" }}
              fontWeight={600}
              letterSpacing="3%"
              textAlign="center"
              color="text.secondary"
            >
              SECONDS
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default LaunchTimer;
