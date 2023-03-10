import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import Nav1 from '../components/UI/Nav1';
import Footer from '../components/UI/Footer';
import imgSpk from '../assets/team_img/ShubhAsati.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Tooltip } from '@mui/material';

function parseImage(text) {
	let i = text.indexOf('id');
	let id = '';
	for (let j = i + 3; j < text.length; j++) {
		id = id + text[j];
	}
	return `https://drive.google.com/uc?export=view&id=${id}`;
}
const a = parseImage(
	'https://drive.google.com/open?id=1mVVe90cQQ6pU9UYsRpYbz0ofmDVK3Ght'
);
const b = parseImage(
	'https://drive.google.com/open?id=1t_vyJNV3el7GI5uFV6MLgtzFTrk0b2PE'
);
const c = parseImage(
	'https://drive.google.com/open?id=1Mckp_HeLROZtLPnG5qXahRKGGyjbeQAe'
);
const d = parseImage(
	'https://drive.google.com/open?id=1kajCOnQzlFK84IigBnrhskHpjC-S4HwO'
);
const e = parseImage(
	'https://drive.google.com/open?id=1zl6VlaMgD7QmY5GNiiJEQL7qJq8LjrQM'
);
const f = parseImage(
	'https://drive.google.com/open?id=1AkO-b4Tw3qLmHqgHe3sU_RBTZLq3OLhs'
);
const Organizers = () => {
	return (
		<div>
			<Nav1></Nav1>
			<Paper>
				<Typography
					textAlign={'center'}
					variant="h3"
					color="red"
					display="flex"
					justifyContent={'center'}
					paddingTop="40px"
				>
					Organizing Team
				</Typography>
				<Box
					display="flex"
					sx={{
						justifyContent: 'center',
						flexWrap: 'wrap',
						gap: '100px',
						marginTop: '100px',
						paddingBottom: '100px',
					}}
				>
					<Box>
						<img
							style={{
								height: '270px',
								borderRadius: '15px 50px',
								objectFit: 'cover',
								width: '270px',
							}}
							src={a}
							alt=""
						/>
						<Typography textAlign={'center'} variant="h5">
							Animesh Nayak
						</Typography>
						<Typography
							textAlign={'center'}
							variant="h6"
							sx={{ opacity: '0.7' }}
						>
							Bhopal, India <br /> Organizer
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Tooltip title="Linkedin" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.linkedin.com/in/animesh-nayak-8ba7b5218/"
									>
										<LinkedInIcon sx={{ color: 'black' }}></LinkedInIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="Instagram" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.instagram.com/istemanit/?hl=en"
									>
										<InstagramIcon
											sx={{
												color: 'black',
											}}
										></InstagramIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="FaceBook" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a target={'__blank'}>
										<FacebookIcon sx={{ color: 'black' }}></FacebookIcon>
									</a>
								</Button>
							</Tooltip>
						</div>
					</Box>
					<Box>
						<img
							style={{
								height: '270px',
								borderRadius: '15px 50px',
								objectFit: 'cover',
								width: '270px',
							}}
							src={b}
							alt=""
						/>
						<Typography textAlign={'center'} variant="h5">
							Navyasree Konagalla
						</Typography>
						<Typography
							textAlign={'center'}
							variant="h6"
							sx={{ opacity: '0.7' }}
						>
							Bhopal, India <br /> Co-organizer
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Tooltip title="Linkedin" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.linkedin.com/in/navyasree-konagalla-281314203"
									>
										<LinkedInIcon sx={{ color: 'black' }}></LinkedInIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="Instagram" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://instagram.com/nav.yeahhh?igshid=ZDdkNTZiNTM="
									>
										<InstagramIcon
											sx={{
												color: 'black',
											}}
										></InstagramIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="FaceBook" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a target={'__blank'}>
										<FacebookIcon sx={{ color: 'black' }}></FacebookIcon>
									</a>
								</Button>
							</Tooltip>
						</div>
					</Box>
					<Box>
						<img
							style={{
								height: '270px',
								borderRadius: '15px 50px',
								objectFit: 'cover',
								width: '270px',
							}}
							src={c}
							alt=""
						/>
						<Typography textAlign={'center'} variant="h5">
							Shubh Asati
						</Typography>
						<Typography
							textAlign={'center'}
							variant="h6"
							sx={{ opacity: '0.7' }}
						>
							Bhopal, India <br /> Head Technical
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Tooltip title="Linkedin" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.linkedin.com/in/shubh-asati/"
									>
										<LinkedInIcon sx={{ color: 'black' }}></LinkedInIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="Instagram" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href=""
									>
										<InstagramIcon
											sx={{
												color: 'black',
											}}
										></InstagramIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="FaceBook" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a target={'__blank'}>
										<FacebookIcon sx={{ color: 'black' }}></FacebookIcon>
									</a>
								</Button>
							</Tooltip>
						</div>
					</Box>
					<Box>
						<img
							style={{
								height: '270px',
								borderRadius: '15px 50px',
								objectFit: 'cover',
								width: '270px',
							}}
							src={d}
							alt=""
						/>
						<Typography textAlign={'center'} variant="h5">
							Tushar Gehlot
						</Typography>
						<Typography
							textAlign={'center'}
							variant="h6"
							sx={{ opacity: '0.7' }}
						>
							Bhopal, India <br /> Head Web Operations
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Tooltip title="Linkedin" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.linkedin.com/in/tushar-gehlot-50502420a/"
									>
										<LinkedInIcon sx={{ color: 'black' }}></LinkedInIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="Instagram" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href=""
									>
										<InstagramIcon
											sx={{
												color: 'black',
											}}
										></InstagramIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="FaceBook" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a target={'__blank'}>
										<FacebookIcon sx={{ color: 'black' }}></FacebookIcon>
									</a>
								</Button>
							</Tooltip>
						</div>
					</Box>
					<Box>
						<img
							style={{
								height: '270px',
								borderRadius: '15px 50px',
								objectFit: 'cover',
								width: '270px',
							}}
							src={e}
							alt=""
						/>
						<Typography textAlign={'center'} variant="h5">
							Jayant Dhakad
						</Typography>
						<Typography
							textAlign={'center'}
							variant="h6"
							sx={{ opacity: '0.7' }}
						>
							Bhopal, India <br /> Web Developer
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Tooltip title="Linkedin" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.linkedin.com/in/jayant-dhakad-8a5517233/"
									>
										<LinkedInIcon sx={{ color: 'black' }}></LinkedInIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="Instagram" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.instagram.com/jayant_dhakad.1/"
									>
										<InstagramIcon
											sx={{
												color: 'black',
											}}
										></InstagramIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="FaceBook" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a target={'__blank'}>
										<FacebookIcon sx={{ color: 'black' }}></FacebookIcon>
									</a>
								</Button>
							</Tooltip>
						</div>
					</Box>
					<Box>
						<img
							style={{
								height: '270px',
								borderRadius: '15px 50px',
								objectFit: 'cover',
								width: '270px',
							}}
							src={f}
							alt=""
						/>
						<Typography textAlign={'center'} variant="h5">
							Akhilendra Pratap
						</Typography>
						<Typography
							textAlign={'center'}
							variant="h6"
							sx={{ opacity: '0.7' }}
						>
							Bhopal, India <br /> Web Developer
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Tooltip title="Linkedin" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.linkedin.com/in/akhilendrapratap/"
									>
										<LinkedInIcon sx={{ color: 'black' }}></LinkedInIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="Instagram" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a
										target={'__blank'}
										href="https://www.instagram.com/akhilendra_11/"
									>
										<InstagramIcon
											sx={{
												color: 'black',
											}}
										></InstagramIcon>
									</a>
								</Button>
							</Tooltip>
							<Tooltip title="FaceBook" arrow>
								<Button sx={{ minWidth: '0px' }}>
									<a target={'__blank'}>
										<FacebookIcon sx={{ color: 'black' }}></FacebookIcon>
									</a>
								</Button>
							</Tooltip>
						</div>
					</Box>
				</Box>
			</Paper>
			<Footer></Footer>
		</div>
	);
};

export default Organizers;
