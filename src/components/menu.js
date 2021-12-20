import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import Box from '@mui/material/Box'
import Hero from './hero'
import Modal from '@mui/material/Modal'
import lunch from '../images/0001.jpg'
import breakfast from '../images/0002.jpg'
// import endPage from '../images/0003.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Menu() {
  const [open, setOpen] = React.useState(false)
  const [imageData, setImageData] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleImageData = (data) =>
    data ? setImageData(data) : setImageData(null)

  return (
    <React.Fragment>
      <ImageList sx={{ margin: 5 }} cols={3}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">Huicholitos Menu</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => {
              handleOpen()
              handleImageData(item)
            }}
          >
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Hero image={imageData.img} />
        </Box>
      </Modal>
    </React.Fragment>
  )
}

const itemData = [
  { title: 'Breakfast', img: breakfast },
  { title: 'Lunch', img: lunch },
]
