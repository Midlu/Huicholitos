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
      headerEl = document.getElementById('Header')

    if (distanceY > shrinkOn) {
      headerEl.classList.add('smaller')
    } else {
      headerEl.classList.remove('smaller')
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
        <Grid container>
          <AppBar
            position="static"
            style={{
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <Toolbar style={{ color: 'black' }}>
              <HeaderItem text={'Huicholitos'} variant={'h3'} />
              <HeaderItem text={'Home'} variant={'h6'} />
              <HeaderItem text={'Social'} variant={'h6'} />
              <HeaderItem text={'Contact'} variant={'h6'} />
              <HeaderItem text={'Order Online'} variant={'h6'} />
            </Toolbar>
          </AppBar>
        </Grid>
      </header>
    )
  }
}

export default Header
