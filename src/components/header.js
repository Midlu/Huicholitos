import { Component } from 'react'
import { Grid, AppBar, Toolbar } from '@mui/material'
import HeaderItem from './headerItem'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      visibilityClass: '',
      currentPage: '',
      mobile: false,
    }
  }

  componentDidMount() {
    window.location.href.includes('contact') &&
      this.setState({ currentPage: 'contactPage' })
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  toggleMenu = (value) => this.setState({ openMenu: value })
  handleScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 150,
      headerEl = document.getElementById('Header'),
      headerHolder = document.getElementsByClassName('headerHolder')

    if (distanceY > shrinkOn) {
      headerEl.classList.add('smaller')
      headerHolder.classList.add('smaller')
    } else {
      headerEl.classList.remove('smaller')
      headerHolder.classList.remove('smaller')
    }
  }
  checkIfMobileIsTrue = () => {
    const { openMenu } = this.state
    if (window.innerWidth < 992) {
      this.toggleMenu(!openMenu)
    }
  }

  render() {
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
              <Grid container item xs={8}>
                <HeaderItem text={'Huicholitos'} variant={'h3'} />
              </Grid>
              <Grid item xs={1}>
                <HeaderItem text={'Home'} variant={'h6'} />
              </Grid>
              <Grid item xs={1}>
                <HeaderItem text={'About'} variant={'h6'} />
              </Grid>
              <Grid item xs={1}>
                <HeaderItem text={'Contact'} variant={'h6'} />
              </Grid>
              <Grid item xs={1}>
                <HeaderItem text={'Order Online'} variant={'h6'} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

export default Header
