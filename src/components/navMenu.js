import { Grid } from '@mui/material'
import HeaderItem from './headerItem'

const NavMenu = (props) => {
  return (
    <div className={props.mobile ? "mobileMenu" : "desktopMenu"}>
      <Grid item xs={1}>
        <HeaderItem
          text={'Home'}
          onClickFunc={props.handleMobileMenu}
          variant={'h6'}
        />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem
          text={'About'}
          onClickFunc={props.handleMobileMenu}
          variant={'h6'}
        />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem
          text={'Menu'}
          onClickFunc={props.handleMobileMenu}
          variant={'h6'}
        />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem
          text={'Contact'}
          onClickFunc={props.handleMobileMenu}
          variant={'h6'}
        />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem
          text={'Order Online'}
          onClickFunc={props.handleMobileMenu}
          variant={'h6'}
        />
      </Grid>
    </div>
  )
}

export default NavMenu
