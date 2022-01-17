import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Item from './item'
import Header from './headerText'
import useForm from '../hooks/useForm';

const center = {
  lat: 47.0296191,
  lng: -122.9264803,
}

const containerStyle = {
  width: '100%',
  height: '400px',
}

const Location = () => {
  const [values, handleChange] = useForm({ name: "", email: "", message: "" })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
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
          <Box component={"form"} className={"formHolder"} sx={{ '& .MuiTextField-root': { m: 1, width: '95%' }, }} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={"Full Name"}
              variant={"outlined"}
              name={'name'}
              value={values.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label={"Email Address"}
              variant={"outlined"}
              name={"email"}
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              label={"Your message"}
              multiline
              name={"message"}
              fullWidth
              rows={5}
              value={values.message}
              onChange={handleChange}
            />
            <Button type={"submit"} className={"submitButton"}>
              Submit
            </Button>
          </Box>
        </List>
      </Grid>
    </Grid>
  )
}

export default Location
