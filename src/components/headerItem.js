import { Typography } from '@mui/material'

function HeaderItem(props) {
  return (
    <Typography variant={props.variant} className={'menu-text'}>
      <a href={`#${props.text}`}>{props.text}</a>
    </Typography>
  )
}

export default HeaderItem
