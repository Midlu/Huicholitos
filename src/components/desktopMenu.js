import { Grid } from '@mui/material'
import HeaderItem from './headerItem'

const DesktopMenu = () => {
  return (
    <>
      <Grid item xs={1}>
        <HeaderItem text={'Home'} variant={'h6'} />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem text={'About'} variant={'h6'} />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem text={'Menu'} variant={'h6'} />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem text={'Contact'} variant={'h6'} />
      </Grid>
      <Grid item xs={1}>
        <HeaderItem text={'Order Online'} variant={'h6'} />
      </Grid>
    </>
  )
}

export default DesktopMenu;