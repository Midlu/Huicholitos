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
      <Hero />
      <div style={{ 'margin-top': '10px' }}>
        <Grid
          container
          spacing={2}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <AboutUs />
        </Grid>
      </div>
      <Grid
        container
        spacing={2}
        justifyContent={'flex-end'}
        alignItems={'center'}
      >
        <Menu />
      </Grid>
    </React.Fragment>
  )
}

export default BodyText
