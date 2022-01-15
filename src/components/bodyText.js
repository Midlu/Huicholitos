import * as React from 'react'
import Grid from '@mui/material/Grid'
import Hero from './hero'
import AboutUs from './aboutUs'
import Menu from './menu'

// Import Swiper styles
// import placeholderImage from '../images/section-a-bg.jpg'

function BodyText() {
  return (
    <div>
      <Hero />
      <div style={{ marginTop: '10px' }} id={'About'}>
        <Grid
          container
          spacing={2}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <AboutUs />
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent={'flex-end'}
          alignItems={'center'}
          id={'Menu'}
        >
          <Menu />
        </Grid>
      </div>
    </div>
  )
}

export default BodyText
