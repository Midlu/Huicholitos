import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Gallery from './gallery'
import OutlinedCard from './card'
import Typography from '@mui/material/Typography'

function AboutUs() {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={5} style={{ textAlign: 'center' }}>
        {/* Make dynamic, grab new word of the day on refresh */}
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={12} md={7} style={{ textAlign: 'center' }}>
        <Box sx={{ margin: 5 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant={"h4"} gutterBottom>
                Cookies
              </Typography>
              <p>Are very delicious, you should try some:)</p>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid container item xs={12} sm={12} md={12}>
        <Gallery />
      </Grid>
    </React.Fragment>
  )
}

export default AboutUs
