import LazyHero from 'react-lazy-hero'
import { Button, Grid } from '@mui/material'

import heroImage from '../images/IMG_7278.JPG'

const Hero = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const style = {
    // position: 'fixed',
    top: 0,
    left: 0,
    'min-width': '100%',
    'min-height': '100%',
    width,
    height,
  }

  return (
    <section style={style} className={'hero'}>
      <Grid item style={{ 'margin-left': 0 }}>
        <LazyHero
          imageSrc={heroImage}
          // https://unsplash.it/${width}/${height}`}
          style={style}
          opacity={0.3}
        >
          <div>
            <h1>Generic Startup Hype Headline</h1>
            <p>Some description of the restuarant</p>
            <Button variant="contained">Call Us - (360)-539-8890</Button>
          </div>
        </LazyHero>
      </Grid>
    </section>
  )
}

export default Hero
