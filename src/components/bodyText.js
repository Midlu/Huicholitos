import * as React from 'react'
import { Grid } from '@mui/material'
import Hero from './hero'
import AboutUs from './aboutUs'
import Menu from './menu'

// Import Swiper styles
// import placeholderImage from '../images/section-a-bg.jpg'

function BodyText() {
  return (
    <React.Fragment>
      <Hero name="hero" />
      <Grid
        container
        spacing={2}
        justifyContent={'flex-end'}
        alignItems={'center'}
        // className={'aboutUs'}
      >
        <AboutUs />
      </Grid>
      <Grid container>
        <Menu />
      </Grid>
    </React.Fragment>
  )
}

export default BodyText
