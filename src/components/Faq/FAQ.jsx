import { Box, Container } from "@mui/material";
import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Faq from "./Faqjs.json";
function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const matches = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box id="faq" py={4}>
        <Container maxWidth="sm">
          <Box>
            <Box sx={{ width: "100%" }}>
              {Faq.map((faq, index) => {
                const { id, question, answer } = faq;
                return (
                  <>
                    <Box
                      mt={2}
                      borderRadius="5px"
                      key={id}
                      sx={{ width: "100%" }}
                    >
                      <Accordion
                        expanded={expanded === `{panel${id}}`}
                        onChange={handleChange(`{panel${id}}`)}
                        style={{
                          borderRadius: "15px",
                          background: "white",
                          width: "100%",
                          m: "auto",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            expanded === `{panel${id}}` ? (
                              <Remove
                                style={{
                                  // color: "#8b37f2",
                                  fontSize: "20px",
                                }}
                              />
                            ) : (
                              <Add
                                style={{
                                  // color: "#8b37f2",
                                  fontSize: "20px",
                                }}
                              />
                            )
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Box
                            fontSize={matches ? "13px" : "15px"}
                            fontFamily="Regular"
                            px={2}
                            py={1}
                            color="#202020"
                          >
                            {question}
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box
                            pl={2}
                            pb={3}
                            fontSize="15px"
                            textAlign="left"
                            fontWeight="400"
                            color="#202020"
                          >
                            {answer}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FAQ;
