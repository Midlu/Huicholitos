import { Grid } from '@mui/material'
import { Component } from 'react'
// import HeaderItem from './headerItem'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'

class MobileMenu extends Component {
  render() {
    return (
      <Grid item xs>
        <div onClick={this.props.toggleMenu}>
          {this.props.openMenu ? <MenuIcon /> : <MenuOpenIcon />}
        </div>
      </Grid>
    )
  }
}

export default MobileMenu
