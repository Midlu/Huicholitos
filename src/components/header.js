import { Component } from 'react'
import { Grid, AppBar, Toolbar } from '@mui/material'
import NavMenu from './navMenu'
import MobileMenu from './mobileMenu'
import { ReactComponent as LogoSVG } from "../images/logo.svg"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      mobile: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.checkIfMobileIsTrue()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  toggleMenu = (value) => this.setState({ openMenu: value })
  checkIfMobileIsTrue = () => {
    if (window.innerWidth < 992) {
      this.setState({ mobile: true })
    }
  }

  handleScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 150,
      headerEl = document.getElementById('Header'),
      headerHolder = document.getElementsByClassName('headerHolder')[0],
      logo = document.getElementById("logo");

    if (distanceY > shrinkOn) {
      headerEl.classList.add('smaller')
      headerHolder.classList.add('smaller')
      logo.classList.add('smaller')
    } else {
      headerEl.classList.remove('smaller')
      headerHolder.classList.remove('smaller')
      logo.classList.remove('smaller')
    }
  }

  render() {
    const { mobile, openMenu } = this.state
    return (
      <header id="Header">
        <AppBar
          className={'headerHolder'}
          position={"static"}
          as={'div'}
          style={{backgroundColor: "#D4EDF4"}}
        >
          <Toolbar style={{ color: 'black', padding: '0px' }}>
            <Grid container style={{ textAlign: "center", alignItems: "center" }}>
              <Grid container item xs={mobile ? 9 : 7}>
                <a href={"#Home"} className={"logoHolder"}>
                  <LogoSVG id={"logo"} />
                </a>
              </Grid>
              {mobile ? (
                <MobileMenu mobile openMenu={openMenu} toggleMenu={this.toggleMenu} />
              ) : (
                <NavMenu />
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

export default Header
