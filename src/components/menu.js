import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Header from './headerText'
import lunch from '../images/0001.jpg'
import breakfast from '../images/0002.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '50vh',
  width: '35vh',
  transform: 'translate(-50%, -50%)',
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
      <ImageList sx={{ margin: 5 }} cols={2} style={{ textAlign: 'center', }}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">
            <Header text={"Huicholitos Menu"} variant={"h4"} />
          </ListSubheader>
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
          {/* TODO: add circle x button on top right corner to close modal */}
          <ImageListItem>
            <img
              src={`${imageData.img}`}
              srcSet={`${imageData.img}`}
              alt={imageData.title}
              loading="lazy"
            />
          </ImageListItem>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

const itemData = [
  { title: 'Breakfast', img: breakfast },
  { title: 'Lunch', img: lunch },
]
