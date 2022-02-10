import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import Header from './headerText'
import lunch from '../images/0001.jpg'
import lunch2 from '../images/menu_pg2.png'

const Menu = () => (
  <ImageList sx={{ margin: 5 }} style={{ textAlign: 'center', }}>
    <ImageListItem key={"Subheader"} cols={3}>
      <ListSubheader component={"div"}>
        <Header text={"Huicholitos Menu"} variant={"h4"} />
        <a className={"peopleOrange"} target={"noopener"} href={"https://raw.githubusercontent.com/Midlu/Huicholitos/master/src/images/Huicholitos%20Menu%201.3.22.pdf"}>Download Our Menu</a>
      </ListSubheader>
    </ImageListItem>
    {itemData.map((item) => (
      <ImageListItem
        cols={2}
        key={item.img}
      >
        <img
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.title}
          loading={"lazy"}
        />
        <ImageListItemBar title={item.title} className={"menuTitle"} />
      </ImageListItem>
    ))}
  </ImageList>
)

const itemData = [
  { title: 'Lunch', img: lunch },
  { title: 'Seafood Specialties', img: lunch2 },
]

export default Menu;