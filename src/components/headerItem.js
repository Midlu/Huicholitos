import { Typography } from '@mui/material'

function HeaderItem(props) {
  return (
    <div className="menu-item">
      <Typography variant={props.variant} className={'menu-text'}>
        {props.text}
      </Typography>
    </div>
  )
}

export default HeaderItem
