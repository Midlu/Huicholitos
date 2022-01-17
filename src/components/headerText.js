import Typography from '@mui/material/Typography'

const Header = (props) => {
    return (
        <Typography variant={props.variant} className={'bodyHeading'}>
            {props.text}
        </Typography>
    )
}

export default Header;