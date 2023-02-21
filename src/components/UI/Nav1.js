import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ISTElogo from '../../assets/tedxmanitblack.png';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const drawerWidth = 240;
const navItems = [
	'Home',
	'About us',
	'Events',
	'Sponsors',
	'Our Team',
	'Contact Us',
];

const x = [
	{
		name: 'Home',
		dest: '#home',
	},
	{
		name: 'About us',
		dest: '#about',
	},
	{
		name: 'Speakers',
		dest: '#speakers',
	},
	{
		name: 'Contact Us',
		dest: '#footer',
	},
];

function Nav1(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{
				textAlign: 'center',
				backgroundColor: 'white',
				color: 'black',
				height: '100%',
			}}
		>
			<Typography variant="h6" sx={{ my: 2, textAlign: '-webkit-center' }}>
				<img height={'60px'} style={{ height: '60px' }} src={ISTElogo} />
			</Typography>
			{/* <Divider /> */}
			<List>
				{x.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
							<HashLink
								smooth
								to={item.dest}
								style={{ color: 'black', textDecoration: 'none' }}
							>
								<ListItemText
									primary={item.name}
									sx={{ color: 'black', textDecoration: 'none' }}
								/>
							</HashLink>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div id="home">
			<Box sx={{ display: 'flex', background: 'rgb(30, 30, 30)' }}>
				{/* <CssBaseline /> */}
				<AppBar
					component="nav"
					sx={{
						color: 'black',
						backgroundColor: 'white',
						zIndex: '1000',
					}}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							<img height="60px" src={ISTElogo} />
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{x.map((item) => (
								<Button key={item.name} sx={{ color: 'black' }}>
									<HashLink
										smooth
										to={item.dest}
										style={{ color: 'black', textDecoration: 'none' }}
									>
										{item.name}
									</HashLink>
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ background: 'rgb(30, 30, 30)', height: '100%' }}
				>
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: {
								xs: 'block',
								sm: 'none',
								backgroundColor: 'rgb(29, 32, 38)',
							},
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box component="main">
					<Toolbar />
				</Box>
			</Box>
		</div>
	);
}

Nav1.propTypes = {
	window: PropTypes.func,
};

export default Nav1;
