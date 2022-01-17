import Typography from '@mui/material/Typography'

function HeaderItem(props) {
  return (
    <Typography variant={props.variant} className={'menuText'}>
      <a href={`#${props.text}`} onClick={props.onClickFunc}>{props.text}</a>
    </Typography>
  )
}

export default HeaderItem
