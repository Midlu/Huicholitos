import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'
import OutlinedCard from './card'
import Gallery from './gallery'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function AboutUs() {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={7}>
        <Item>
          {/* Make dynamic, grab new word of the day on refresh */}
          <h1>Cookies</h1>
          <p>Are very delicious, you should try some:)</p>
        </Item>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        {/* Make dynamic, grab new word of the day on refresh */}
        <OutlinedCard />
      </Grid>
      <Grid container item xs={12} sm={12} md={12}>
        <Gallery />
      </Grid>
    </React.Fragment>
  )
}

export default AboutUs
