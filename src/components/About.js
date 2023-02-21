import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
// import ImgPath from '../../assets/sponsors/conding-ninja-white.png';
import { hover } from '@testing-library/user-event/dist/hover';
import { Skeleton } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { Grow } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
	heading__: {
		color: 'black',
		overflow: 'hidden',
	},
	image: {
		height: '24rem',
		width: '25rem',
	},
	heading: {
		color: 'red',
		// marginLeft: '3px',
	},
	Name: {
		marginTop: '10px',
	},
	content: {
		// padding: '0px 150px',
		fontSize: '16px',
	},
	hover: {
		'&:hover': {
			backgroundColor: 'rgb(7, 177, 77, 0.42)',
		},
	},
});
const About = () => {
	const classes = useStyles();
	return (
		<div id="about">
			<Paper>
				<Box
					display={'flex'}
					flexDirection="column"
					alignItems="center"
					justifyContent={'center'}
					padding="80px 0px"
				>
					<Box width="75%">
						<Typography
							className={classes.heading}
							variant="h3"
							size="small"
							display={'flex'}
						>
							<Box
								width={'5px'}
								height={'50px'}
								margin={('0px', '2px')}
								sx={{ background: 'red' }}
							></Box>{' '}
							What is TED?
						</Typography>
						<Typography
							className={classes.content}
							textAlign="justify"
							justifyContent={'space-evenly'}
							paddingTop={'20px'}
						>
							TED is a non-profit devoted to spreading ideas, usually in the
							form of short, powerful talks (18 minutes or less). TED began in
							1984 as a conference where Technology, Entertainment and Design
							converged, and today covers almost all topics — from science to
							business to global issues — in more than 100 languages. Meanwhile,
							independently run TEDx events help share ideas in communities
							around the world. TED is dedicated to researching and sharing
							knowledge that matters, through short talks and presentations. The
							goal is to inform and educate global audiences in an accessible
							way. Scientists, researchers, technologists, business leaders,
							artists, designers and other world experts take the TED stage to
							present “Ideas Worth Spreading”: valuable new knowledge and
							innovative research in their fields. Thanks to online videos, TED
							has attracted an international following that has grown into the
							millions. This enthusiastic reception prompted the TED
							organization to turn their website into the home of TED Talks, a
							lovingly curated, constantly growing educational archive. These
							talks are now viewed or listened to more than 3 billion times
							annually.
						</Typography>
					</Box>
					<Box width={'75%'} marginTop="20px">
						<Typography
							className={classes.heading}
							variant="h3"
							size="small"
							display={'flex'}
						>
							<Box
								width={'5px'}
								height={'50px'}
								margin={('0px', '2px')}
								sx={{ background: 'red' }}
							></Box>{' '}
							What is TEDx?
						</Typography>
						<Typography
							className={classes.content}
							textAlign="justify"
							justifyContent={'space-evenly'}
							paddingTop={'20px'}
						>
							TEDx is a grassroots initiative, created in the spirit of TED’s
							overall mission to research and discover “ideas worth spreading.”
							TEDx brings the spirit of TED to local communities around the
							globe through TEDx events. These events are organized by
							passionate individuals who seek to uncover new ideas and to share
							the latest research in their local areas that spark conversations
							in their communities. TEDx events include live speakers and
							recorded TED Talks, and are organized independently under a free
							license granted by TED. These events are not controlled by TED,
							but event organizers agree to abide by the TED format, and are
							offered guidelines for curation, speaker coaching, event
							organizing and more. More than 3000 events are now held annually
							and many of the TEDx talks are also uploaded on the official TEDx
							YouTube channel which has a following of more than 32.7 million.
						</Typography>
					</Box>
					<Box width={'75%'} marginTop="20px">
						<Typography sx={{ color: 'black' }} variant="h3">
							About
						</Typography>
						<Typography
							className={classes.heading}
							variant="h3"
							size="small"
							display={'flex'}
						>
							<Box
								width={'5px'}
								height={'50px'}
								margin={('0px', '2px')}
								sx={{ background: 'red' }}
							></Box>{' '}
							TEDxMANIT BHOPAL 2023
						</Typography>
						<Typography
							className={classes.content}
							textAlign="justify"
							justifyContent={'space-evenly'}
							paddingTop={'20px'}
						>
							TEDx is a grassroots initiative, created in the spirit of TED’s
							overall mission to research and discover “ideas worth spreading.”
							TEDx brings the spirit of TED to local communities around the
							globe through TEDx events. These events are organized by
							passionate individuals who seek to uncover new ideas and to share
							the latest research in their local areas that spark conversations
							in their communities. TEDx events include live speakers and
							recorded TED Talks, and are organized independently under a free
							license granted by TED. These events are not controlled by TED,
							but event organizers agree to abide by the TED format, and are
							offered guidelines for curation, speaker coaching, event
							organizing and more. More than 3000 events are now held annually
							and many of the TEDx talks are also uploaded on the official TEDx
							YouTube channel which has a following of more than 32.7 million.
						</Typography>
					</Box>
				</Box>
			</Paper>
		</div>
	);
};

export default About;
