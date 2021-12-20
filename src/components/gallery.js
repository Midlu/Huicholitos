import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import drinks from '../images/IMG_7274.PNG'
import huicholitosRancheros from '../images/IMG_7275.JPG'
import tacosDeCarnitas from '../images/IMG_7276.JPG'
import ceviche from '../images/IMG_7277.JPG'
import tamales from '../images/IMG_7279.JPG'

export default function Gallery() {
  return (
    <ImageList sx={{ margin: 5 }} cols={3}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">Some cuisine</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  { title: 'Huicholitos Rancheros', img: huicholitosRancheros },
  { title: 'Tacos de carne asada', img: tacosDeCarnitas },
  { title: 'Ceviche', img: ceviche },
  { title: 'Quesabirria', img: tamales },
  { title: 'Horchata and Tamrind', img: drinks },
]
