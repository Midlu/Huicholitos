import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Item from './item'
import Header from './headerText'

const center = {
  lat: 47.0296191,
  lng: -122.9264803,
}

const containerStyle = {
  width: '100%',
  height: '400px',
}

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  })

  return (
    <Grid
      container
      spacing={2}
      id={'Contact'}
      style={{ textAlign: 'center', }}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Item sx={{ margin: 2 }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            'Loading Map'
          )}
        </Item>
      </Grid>
      <Grid item xs={12} sm={12} md={3} style={{ textAlign: 'center', }}>
        <Header variant="h4" text={"Our Hours"} />
        <List>
          <ListItemText primary="Huicholitos" />
          <ListItemText primary="2125 Canton Way SW, Olympia, WA 98502" />
          <ListItemText primary="(360)-539-8890" />
          <ListItemText primary="Hours" />
          <ListItemText primary="Mon-Fri 9AM - 8PM" />
          <ListItemText primary="Sat 9AM - 8PM" />
          <ListItemText primary="Sunday - Closed" />
        </List>
      </Grid>
      <Grid item xs={12} sm={12} md={5} style={{ textAlign: 'center', }}>
        <Header variant="h4" text={"Contact Us"} />
        <List>
          <Box component={"form"} sx={{ '& .MuiTextField-root': { m: 1, width: '95%' }, }}>
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
              rows={5}
            />
            <button type="submit">Submit</button>
          </Box>
        </List>
      </Grid>
    </Grid>
  )
}

export default Location
