import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { Paper, Stack } from "@mui/material";
import { HashLink } from "react-router-hash-link";

import Logo from "../images/FOOD-FI.png";
import twiter from "../images/twitter.png";
import reddit from "../images/reddit.png";
import instagram from "../images/instagram.png";
import telegram from "../images/telegram.png";
import medium from "../images/medium.png";
import github from "../images/github.png";
import discord from "../images/discord.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000 !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} mb={4} display="flex" justifyContent="center">
        <HashLink smooth to="/" style={{ textDecoration: "none" }}>
          <img width="100px" src={Logo} alt="" />
        </HashLink>
      </Box>
      <List>
        <HashLink smooth to="/#features" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Features
          </ListItem>
        </HashLink>
        <HashLink smooth to="/#eat" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            $EAT
          </ListItem>
        </HashLink>
        <HashLink smooth to="/#team" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Team
          </ListItem>
        </HashLink>
        <HashLink smooth to="/#roadmap" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Roadmap
          </ListItem>
        </HashLink>
        <HashLink smooth to="/#faq" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            FAQ
          </ListItem>
        </HashLink>
        <ListItem
          style={{
            justifyContent: "center",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Whitepaper
        </ListItem>
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "transparent",
          zIndex: "100px",
        }}
        height="92px"
        width="100%"
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mr={matches ? 5 : 2}
            >
              <HashLink smooth to="/" style={{ textDecoration: "none" }}>
                <img src={Logo} alt="" width="100%" />
              </HashLink>
            </Box>
            {/* ...... */}

            <Hidden mdDown>
              <Stack direction="row" width="80%" justifyContent="space-between">
                <Box
                  width="40%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <HashLink
                    smooth
                    to="/#features"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={3}
                      fontSize="14px"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                      fontWeight="lighter"
                      fontFamily="Regular"
                    >
                      Features
                    </Box>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/#eat"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={3}
                      fontSize="14px"
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                      fontWeight="lighter"
                      fontFamily="Regular"
                    >
                      $EAT
                    </Box>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/#team"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={3}
                      fontSize="14px"
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                      fontFamily="Regular"
                    >
                      Team
                    </Box>
                  </HashLink>

                  <HashLink
                    smooth
                    to="/#roadmap"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={3}
                      fontSize="14px"
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                      fontWeight="lighter"
                      fontFamily="Regular"
                    >
                      Roadmap
                    </Box>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/#faq"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={3}
                      fontSize="14px"
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                      fontWeight="lighter"
                      fontFamily="Regular"
                    >
                      FAQ
                    </Box>
                  </HashLink>
                  <Box
                    mr={3}
                    fontSize="14px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#000000",
                    }}
                    fontWeight="lighter"
                    fontFamily="Regular"
                  >
                    Whitepaper
                  </Box>
                </Box>
                <Box
                  width="40%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <img src={twiter} alt="" />
                  <img src={telegram} alt="" />
                  <img src={reddit} alt="" />
                  <img src={instagram} alt="" />
                  <img src={github} alt="" />
                  <img src={discord} alt="" />
                  <img src={medium} alt="" />
                </Box>
              </Stack>
            </Hidden>

            <Hidden mdUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1, alignSelf: "right" }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    ></MenuIcon>
                  </Button>
                  {/* <Paper style={{ background: "#1C0D38" }}> */}
                  <SwipeableDrawer
                    classes={{ paper: classes.paper }}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                  {/* </Paper> */}
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Container>
      </Box>
    </>
  );
}
