import { Box, Typography, Container, Grid } from "@mui/material";

import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";

function Features() {
  const feature = [
    {
      img: feature1,
      headText: "Track",
      desc: "Caloric Intake & Macros",
    },
    {
      img: feature2,
      headText: "Food Log",
      desc: "Exercise Mindful Eating Habits",
    },
    {
      img: feature3,
      headText: "Eat Out",
      desc: "Earn $EAT by exploring surrounding restaurants in your area",
    },
    {
      img: feature4,
      headText: "Wallet",
      desc: "Lorem Ipsum content Wallet",
    },
  ];

  return (
    <Box mt={10} textAlign="center">
      <Container>
        <Typography fontSize={{ xs: "42px", md: "54px" }} color="#202020">
          Features
        </Typography>

        <Typography
          mt={2}
          fontSize={{ xs: "18px", md: "20px" }}
          color="#202020"
        >
          The FOOD-FI ecosystem is at the forefront of incorporating real
          use-case <br /> to blockchain technology applications within the
          nutrition industry.
        </Typography>

        <Box mt={10}>
          {feature.map(({ img, headText, desc }, i) => {
            return (
              <>
                <Grid container alignItems="center">
                  <Grid item xs={12} sm={6} order={i % 2 === 0 ? 0 : 1}>
                    <Box>
                      <img src={img} alt="" width="100%" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} order={i % 2 === 0 ? 1 : 0}>
                    <Box>
                      <Typography
                        fontFamily="Regular"
                        color="#202020"
                        fontSize={{ xs: "32px", md: "42px" }}
                      >
                        {headText}
                      </Typography>
                      <Typography
                        color="#202020"
                        fontSize={{ xs: "18px", md: "24px" }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
export default Features;
