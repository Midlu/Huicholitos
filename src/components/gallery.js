import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import Header from "./headerText"
import drinks from '../images/IMG_7274.PNG'
import huicholitosRancheros from '../images/IMG_7275.JPG'
import tacosDeCarnitas from '../images/IMG_7276.JPG'
import ceviche from '../images/IMG_7277.JPG'
import tamales from '../images/IMG_7279.JPG'

export default class Gallery extends React.Component {
  state = {
    mobile: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkIfMobileIsTrue)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkIfMobileIsTrue)
  }
  checkIfMobileIsTrue = () => {
    if (window.innerWidth < 992) {
      this.setState({ mobile: true })
    }
  }

  render() {
    const columns = this.state.mobile ? 1 : 3;
    return (
      <ImageList sx={{ margin: 5 }} cols={columns} style={{ textAlign: 'center', }}>
        <ImageListItem key="Subheader" cols={columns}>
          <ListSubheader component="div">
            <Header text={"Our Cuisine"} variant={"h4"} />
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} className={"menuTitle"} />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }
}

const itemData = [
  { title: 'Chilaquiles', img: huicholitosRancheros },
  { title: 'Tacos de carne asada', img: tacosDeCarnitas },
  { title: 'Ceviche', img: ceviche },
  { title: 'Quesabirria', img: tamales },
  { title: 'Horchata and Tamrind', img: drinks },
]
