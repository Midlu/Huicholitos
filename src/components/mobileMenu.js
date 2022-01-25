import { Component } from 'react'
import HeaderItem from './headerItem'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'
import Grid from '@mui/material/Grid'

class MobileMenu extends Component {
  handleMobileMenu = () => this.props.toggleMenu(!this.props.openMenu)

  render() {
    return (
      <>
        <Grid item xs>
          <div onClick={this.handleMobileMenu} className={"mobileIcon"}>
            {!this.props.openMenu ? <MenuIcon /> : <MenuOpenIcon />}
          </div>
        </Grid>
        <div
          id="mySidenav"
          className={`sidenav ${this.props.openMenu ? 'sidenav-open' : ''}`}
        >
          <div onClick={this.handleMobileMenu} style={{ float: "right" }}>
            <a href="#closeBtn" className="closebtn" onClick={this.handleMobileMenu}>&times;</a>
          </div>
          <Grid container direction={"column"} alignItems={"flex-start"}>
            <Grid item xs={1}>
              <HeaderItem
                text={'Home'}
                onClickFunc={this.handleMobileMenu}
                variant={'h6'}
              />
            </Grid>
            <Grid item xs={1}>
              <HeaderItem
                text={'About'}
                onClickFunc={this.handleMobileMenu}
                variant={'h6'}
              />
            </Grid>
            <Grid item xs={1}>
              <HeaderItem
                text={'Menu'}
                onClickFunc={this.handleMobileMenu}
                variant={'h6'}
              />
            </Grid>
            <Grid item xs={1}>
              <HeaderItem
                text={'Contact'}
                onClickFunc={this.handleMobileMenu}
                variant={'h6'}
              />
            </Grid>
            <Grid item xs={1}>
              <HeaderItem
                text={'Order Online'}
                onClickFunc={this.handleMobileMenu}
                variant={'h6'}
              />
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
}

export default MobileMenu
