import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import {
  Grid,
  List,
  ListItemText,
  Typography,
  TextField,
  Box,
} from '@mui/material'
import Item from './item'

const center = {
  lat: 47.0296191,
  lng: -122.9264803,
}

const containerStyle = {
  width: '100%',
  height: '400px',
}

const Location = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  })

  return isLoaded ? (
    <Grid
      container
      spacing={2}
      justifyContent={'flex-end'}
      alignItems={'center'}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Item sx={{ margin: 5 }}>
          {loadError ? (
            <div>There was an error loading the map</div>
          ) : (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}
            >
              <Marker position={center} />
            </GoogleMap>
          )}
        </Item>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Typography as="h3">Our Hours</Typography>
        <List>
          <ListItemText primary="Huicholitos" />
          <ListItemText primary="2125 Canton Way SW, Olympia, WA 98502" />
          <ListItemText primary="(360)-539-8890" />
          <ListItemText primary="Hours" />
          <ListItemText primary="Mon-Fri 9AM - 8PM" />
          <ListItemText primary="Sa 9AM - 8PM" />
          <ListItemText primary="Sunday - Closed" />
        </List>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <Typography as="h3">Contact Us</Typography>
        <List>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              fullWidth
              label="Full Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              fullWidth
              label="Email Address"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Your message"
              multiline
              fullWidth
              rows={4}
            />
          </Box>
        </List>
      </Grid>
    </Grid>
  ) : (
    <></>
  )
}

export default Location
