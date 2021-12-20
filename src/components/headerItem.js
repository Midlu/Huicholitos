import { Typography } from '@mui/material'

function HeaderItem(props) {
  return (
    <Typography variant={props.variant} className={'menu-text'}>
      {props.text}
    </Typography>
  )
}

export default HeaderItem
