import * as React from 'react'
import { Grid } from '@mui/material'
import OutlinedCard from './card'
import Gallery from './gallery'

function AboutUs() {
  return (
    <React.Fragment>
      <Grid item xs={7}>
        {/* Make dynamic, grab new word of the day on refresh */}
        <h1>Cookies</h1>
        <p>Are very delicious, you should try some:)</p>
      </Grid>
      <Grid item xs={5}>
        {/* Make dynamic, grab new word of the day on refresh */}
        <OutlinedCard />
      </Grid>
      <Grid container item xs justifyContent={'center'}>
        <Gallery />
      </Grid>
    </React.Fragment>
  )
}

export default AboutUs
