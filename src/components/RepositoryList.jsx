import React from 'react'
import { Container , Grid, List, ListItemButton, ListItemText, Typography, Link } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { BoxStyled } from './styles.ts';
import repoInfo from './data.ts'

const RepositoryList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    console.log(event.target.innerText, index)
  };

  return (
    <Container>
      <Grid mt={2} container spacing={2} justify="center" display="flex">
        <Grid container item xs={12} display="flex" justifyContent="center">
          <Typography variant="h3" component="div" gutterBottom color="common.white">
            -- Git Repository List --
          </Typography>
        </Grid>
        <Grid container item xs={12} display="flex" justifyContent="center">
          <Typography variant="h5" component="div" gutterBottom color="common.white">
            Counter Clicked: {(selectedIndex > -1) ? selectedIndex : ''}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BoxStyled>
            <List component="nav" aria-label="secondary mailbox folder" sx={{
              '&& .Mui-selected, && .Mui-selected:hover': {
                bgcolor: '#050a308f',
                '&, & .MuiListItemIcon-root': {
                  color: '#fff',
                },
              },
              '& .MuiListItemButton-root:hover': {
                bgcolor: '#050a308f',
                '&, & .MuiListItemIcon-root': {
                  color: '#fff',
                },
              },
            }}>
              {repoInfo.map((item, key) => 
                <ListItemButton
                  key={item.id}
                  selected={selectedIndex === key}
                  alignItems="center"
                  onClick={(event) => handleListItemClick(event, key)}
                >
                  <ListItemText primary={item.name} />
                  <Link 
                    href={item.link} 
                    color="inherit" 
                    underline="none" 
                    rel="noreferrer" 
                    target="_blank"
                    display="flex"
                    alignItems="center"
                  >
                    <LinkIcon/>
                  </Link >
                </ListItemButton>
              )}
            </List>
          </BoxStyled>
        </Grid>
      </Grid>
    </Container>
  )
}

export default RepositoryList
