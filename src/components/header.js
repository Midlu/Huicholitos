import { Component } from 'react'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavMenu from './navMenu'
import MobileMenu from './mobileMenu'
import { ReactComponent as LogoSVG } from "../images/logo.svg"
import { ReactComponent as BogSVG } from "../images/boy.svg"
import { ReactComponent as GirlSVG } from "../images/girl.svg"

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
      headerHolder = headerEl.getElementsByClassName('headerHolder')[0],
      svgs = headerHolder.querySelectorAll("svg");

    if (distanceY > shrinkOn) {
      headerEl.classList.add('smaller', "headerOpacity")
      headerHolder.classList.add('smaller', "headerOpacity")
      svgs.forEach((svg) => svg.classList.add('smaller'))
    } else {
      headerEl.classList.remove('smaller', "headerOpacity")
      headerHolder.classList.remove('smaller', "headerOpacity")
      svgs.forEach((svg) => svg.classList.remove('smaller'))
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
          style={{ backgroundColor: "rgba(212, 237, 244)", height: "100%" }}
        >
          <Toolbar style={{ color: 'black', padding: '0px', height: "100%" }}>
            <Grid container direction={"row"} alignItems="center" style={{ textAlign: "center", alignItems: "center", height: "100%" }}>
              <Grid container item xs={mobile ? 10 : 6} style={{ height: "100%" }} className={"logoHolder"}>
                {/* <a href={"#Home"} className={"logoHolder"}> */}
                <Grid item xs>
                  <BogSVG id={"boy"} />
                </Grid>
                <Grid item xs>
                  <LogoSVG id={"logo"} />
                </Grid>
                <Grid item xs>
                  <GirlSVG id={"girl"} />
                </Grid>
                {/* </a> */}
              </Grid>
              {mobile ? (
                <MobileMenu mobile={mobile} openMenu={openMenu} toggleMenu={this.toggleMenu} />
              ) : (
                <NavMenu mobile={mobile} />
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </header >
    )
  }
}

export default Header
