import { Grid } from '@mui/material'
import { Component } from 'react'
import NavMenu from './navMenu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'

class MobileMenu extends Component {
  handleMobileMenu = () => {
    const rootEl = document.getElementById('root')
    if (!this.props.openMenu) {
      rootEl.classList.add('move-root')
    } else {
      rootEl.classList.remove('move-root')
    }

    this.props.toggleMenu(!this.props.openMenu)
  }

  render() {
    return (
      <>
        <Grid item xs>
          <div onClick={this.handleMobileMenu}>
            {!this.props.openMenu ? <MenuIcon /> : <MenuOpenIcon />}
          </div>
        </Grid>
        <div
          id="mySidenav"
          className={`sidenav ${this.props.openMenu ? 'sidenav-open' : ''}`}
        >
          <button className="closebtn" onClick={this.handleMobileMenu}>
            &times;
          </button>
          <NavMenu handleMobileMenu={this.handleMobileMenu} />
        </div>
      </>
    )
  }
}

export default MobileMenu
