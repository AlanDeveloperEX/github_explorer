import React, { useEffect } from "react";
import {
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Link,
  CircularProgress,
  Box,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import { BoxStyled } from "./styles.ts";

const RepositoryList = () => {
  const [repoInfo, setRepoInfo] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    console.log(event.target.innerText, index);
  };

  useEffect(() => {
    fetch("https://api.github.com/users/AlanDeveloperEX/repos")
      .then((response) => response.json())
      .then((data) => setRepoInfo(data));
  }, []);

  return (
    <Container>
      <Grid mt={2} container spacing={2} justify="center" display="flex">
        <Grid container item xs={12} display="flex" justifyContent="center">
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            color="common.white"
          >
            -- Git Repository List --
          </Typography>
        </Grid>
        <Grid container item xs={12} display="flex" justifyContent="center">
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            color="common.white"
          >
            Index Item Clicked: {selectedIndex > -1 ? selectedIndex : "Anyone"}
          </Typography>
        </Grid>
      </Grid>
      <Grid mb={2} container spacing={2}>
        <Grid item xs={12}>
          <BoxStyled
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              sx={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column-reverse",
                "&& .Mui-selected, && .Mui-selected:hover": {
                  bgcolor: "#050a308f",
                  "&, & .MuiListItemIcon-root": {
                    color: "#fff",
                  },
                },
                "& .MuiListItemButton-root:hover": {
                  bgcolor: "#050a308f",
                  "&, & .MuiListItemIcon-root": {
                    color: "#fff",
                  },
                },
              }}
            >
              {repoInfo.length > 0 ? (
                repoInfo.map((repository, key) => (
                  <ListItemButton
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    key={repository.id}
                    selected={selectedIndex === key}
                    alignItems="center"
                    onClick={(event) => handleListItemClick(event, key)}
                  >
                    <ListItemText primary={repository.name} />
                    <Link
                      href={repository.html_url}
                      color="inherit"
                      underline="none"
                      rel="noreferrer"
                      target="_blank"
                      display="flex"
                      alignItems="center"
                    >
                      <LinkIcon />
                    </Link>
                  </ListItemButton>
                ))
              ) : (
                <CircularProgress />
              )}
            </List>
          </BoxStyled>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RepositoryList;
