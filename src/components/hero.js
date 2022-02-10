import LazyHero from 'react-lazy-hero'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Header from './headerText'
import heroImage from '../images/IMG_7278.JPG'

const Hero = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const style = {
    top: 0,
    left: 0,
    marginTop: '100px',
    minWidth: '100%',
    minHeight: '100%',
    width,
    height
  }

  return (
    <section className={'hero'} id={'Home'}>
      <Grid item>
        <LazyHero
          imageSrc={heroImage}
          style={style}
          parallaxOffset={100}
          className={"heroImageContainer"}
        >
          <Header variant="h4" text={"Welcome to our authentic Huichole Mexican Cuisine."} />
          <p>Enjoy our delicious food we love to make.</p>
          <Button className={"heroButton"}>
              <a href="tel:3605398890">
                Give us a call: (360)-539-8890
              </a>
          </Button>
        </LazyHero>
      </Grid>
    </section>
  )
}

export default Hero
