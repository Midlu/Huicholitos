import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const bull = (
  <Box component="span" sx={{ mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

const dictionary = [
  {
    pronunciation: <>Hui{bull}cho{bull}li{bull}tos</>,
    semanticRole: "adjective",
    definition: "An indigenous people of Mexico and the United States living in the Sierra Madre Occidental range in the states of Nayarit, Jalisco, Zacatecas, and Durango, as well as in the United States in the states of California, Arizona, New Mexico, and Texas.",
    link: "https://en.wikipedia.org/wiki/Huichol"
  }
]

const data = dictionary.at(Math.floor(Math.random() * dictionary.length))

const OutlinedCard = () => (
  <Box sx={{ margin: 5 }}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant={"h4"} gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant={"h5"} component={"div"}>
          {data.pronunciation}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {data.semanticRole}
        </Typography>
        <Typography variant={"body2"}>
          {data.definition}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button className={"heroButton"} size={"small"}>
          <a href={data.link}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  </Box>
)

export default OutlinedCard;