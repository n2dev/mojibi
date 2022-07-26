import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'

const Header = () => {
	return (
		<AppBar position='static'>
			<Toolbar sx={{ minHeight: 40, height: 40 }}>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Mojibi
				</Typography>
				<Box display='flex'>
					<IconButton color='inherit'>
						<HelpOutlineIcon />
					</IconButton>
					<IconButton color='inherit'>
						<LeaderboardIcon />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
