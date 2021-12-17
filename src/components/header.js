import { Grid, AppBar, Toolbar } from '@mui/material'
import HeaderItem from './headerItem'

function Header() {
  return (
    <div className="Header">
      <Grid container>
        <AppBar
          position="static"
          style={{ background: 'transparent', boxShadow: 'none' }}
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
    </div>
  )
}

export default Header
