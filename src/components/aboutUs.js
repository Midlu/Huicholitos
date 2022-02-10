import * as React from 'react'
import Grid from '@mui/material/Grid'
import OutlinedCard from './card'
import Gallery from './gallery'
import Item from './item'

function AboutUs() {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={5} style={{ textAlign: 'center', }}>
        {/* Make dynamic, grab new word of the day on refresh */}
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={12} md={7}>
        <Item sx={{ margin: 5 }}>
          {/* Make dynamic, grab new word of the day on refresh */}
          <h1>Cookies</h1>
          <p>Are very delicious, you should try some:)</p>
        </Item>
      </Grid>
      <Grid container item xs={12} sm={12} md={12}>
        <Gallery />
      </Grid>
    </React.Fragment>
  )
}

export default AboutUs
