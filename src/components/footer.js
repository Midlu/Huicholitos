import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

const Footer = () => {
  return (
    <section id="footer">
      <AppBar position="static" component={'div'} style={{ textAlign: "center", backgroundColor: "#D4EDF4" }}>
        <Container>
          <Toolbar>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <List className={"peopleOrange"}>
                  <ListItemText primary="2125 Canton Way SW, Olympia, WA 98502" />
                  <ListItemText primary="(360)-539-8890" />
                  <ListItemText primary="Mon-Fri 9AM - 8PM" />
                  <ListItemText primary="Sat 9AM - 8PM" />
                  <ListItemText primary="Sunday - Closed" />
                </List>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <List className={"footerLinks"}>
                  <ListItemText>
                    <a href="#Home">Home</a>
                  </ListItemText>
                  <ListItemText>
                    <a href="#About">About</a>
                  </ListItemText>
                  <ListItemText>
                    <a href="#Contact">Contact</a>
                  </ListItemText>
                  <ListItemText>
                    <a href="#Menu">Menu</a>
                  </ListItemText>
                </List>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Typography variant="body1" color="black">
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
