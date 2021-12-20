import {
  Grid,
  AppBar,
  List,
  ListItemText,
  Divider,
  Typography,
  Container,
  Toolbar,
} from '@mui/material'

const Footer = () => {
  return (
    <section id="footer">
      <AppBar position="static" component={'div'}>
        <Container>
          <Toolbar>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <List>
                  <ListItemText>Home</ListItemText>
                  <ListItemText>About</ListItemText>
                  <ListItemText>Contact</ListItemText>
                  <ListItemText>Menu</ListItemText>
                </List>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <List>
                  <ListItemText primary="2125 Canton Way SW, Olympia, WA 98502" />
                  <ListItemText primary="(360)-539-8890" />
                  <ListItemText primary="Mon-Fri 9AM - 8PM" />
                  <ListItemText primary="Sat 9AM - 8PM" />
                  <ListItemText primary="Sunday - Closed" />
                </List>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Typography variant="body1" color="inherit">
                  © 2022 Huicholitos All Rights Reserved
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  )
}

export default Footer
