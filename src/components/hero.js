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
    marginTop: '100px',
    minWidth: '100%',
    minHeight: '100%',
    width,
    height,
  }

  return (
    <section style={style} className={'hero'} id={'Home'}>
      <Grid item style={{ marginLeft: 0 }}>
        <LazyHero
          imageSrc={heroImage}
          // https://unsplash.it/${width}/${height}`}
          style={style}
          opacity={0.3}
        >
          <div>
            <h1>Generic Startup Hype Headline</h1>
            <p>Some description of the restuarant</p>
            <Button variant="contained">
              <a href="tel:3605398890">
                Call Us - (360)-539-8890
              </a>
            </Button>
          </div>
        </LazyHero>
      </Grid>
    </section>
  )
}

export default Hero
