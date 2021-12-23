import { Component } from 'react'
import { Grid, AppBar, Toolbar } from '@mui/material'
import NavMenu from './navMenu'
import MobileMenu from './mobileMenu'
import HeaderItem from './headerItem'

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
      headerHolder = document.getElementsByClassName('headerHolder')[0]

    if (distanceY > shrinkOn) {
      headerEl.classList.add('smaller')
      headerHolder.classList.add('smaller')
    } else {
      headerEl.classList.remove('smaller')
      headerHolder.classList.remove('smaller')
    }
  }

  render() {
    const { mobile, openMenu } = this.state
    return (
      <header id="Header">
        <AppBar
          className={'headerHolder'}
          position="static"
          as={'div'}
          style={{ justifyContent: 'center' }}
        >
          <Toolbar style={{ color: 'black' }}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid container item xs={mobile ? 9 : 7}>
                <HeaderItem text={'Huicholitos'} variant={'h3'} />
              </Grid>
              {mobile ? (
                <MobileMenu openMenu={openMenu} toggleMenu={this.toggleMenu} />
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
