import React from 'react';
import { Button, Stack } from '@mui/material';
// import './App.css';
import './Home.css';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import classes from './Header.module.css';
import logo from '../../assets/tedxmanit.png';
import ISTE from '../../assets/ISTElogo.svg';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
export const App = () => {
	return (
		<div className="container_">
			<div className="logos">
				<a
					href="https://www.istemanit.in/"
					style={{ width: '100%', textAlign: 'center' }}
					target="_blank"
				>
					<img src={ISTE} className="iste" />
				</a>
				<img src={logo} className="tedx" />
				<Box display="flex" gap={'15px'}>
					{/* <Button
						variant="contained"
						sx={{ background: 'red' }}
						disableElevation
					>
						{' '}
						Register Now!
					</Button> */}
					<Button
						sx={{ background: 'black', color: 'red', border: 'red' }}
						variant="outlined"
					>
						<a
							// href={`https://docs.google.com/forms/d/e/1FAIpQLSdIlZtoOTBmaNCy_jhbvHCpXomOw_LebtBprYiWodiEbeyd_w/viewform?usp=sf_link`}
							href='/buy-tickets'
							style={{ textDecoration: 'none', color: 'red' }}
							target="_blank"
						>
							Buy Tickets
						</a>
					</Button>
				</Box>
			</div>
		</div>
	);
};
export default App;
