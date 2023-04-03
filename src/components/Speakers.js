import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import imgSpk from '../assets/team_img/dummy.png';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
	heading__: {
		color: 'black',
		overflow: 'hidden',
	},
	image: {
		height: '200px',
		width: '200px',
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
const Speakers = () => {
	const classes = useStyles();
	return (
		<div id="speakers">
			<Paper sx={{ paddingBottom: '80px' }}>
				<Box
					display={'flex'}
					flexDirection="column"
					justifyContent={'center'}
					alignItems="center"
				>
					<Box width="75%" marginTop={'60px'}>
						<Typography
							className={classes.heading}
							variant="h3"
							size="small"
							display={'flex'}
							// textAlign="left"
							width="75%"
							marginTop="20px"
						>
							<Box
								width={'5px'}
								height={'50px'}
								margin={('0px', '2px')}
								sx={{ background: 'red' }}
							></Box>{' '}
							SPEAKERS
						</Typography>
					</Box>
					<Box
						display={'flex'}
						width="75%"
						marginTop={'20px'}
						sx={{
							'@media (max-width: 1200px)': {
								flexDirection: 'column',
							},
						}}
					>
						<Box
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									width: '50%',
								},
							}}
						>
							<img
								style={{
									height: '270px',
									borderRadius: '15px 50px',
									objectFit: 'cover',
									width: '270px',
								}}
								src={'/ROHITSONI.jpeg'}
								alt=""
							/>
						</Box>

						<Typography
							textAlign={'justify'}
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									paddingLeft: '50px',
								},
							}}
						>
							<Typography variant="h3" color="red" marginTop={'20px'}>
								ROHIT SONI
							</Typography>
							Rohit Soni is a 23 year old Author of 2 books, A TEDx Speaker &
							runs his own Copywriting & marketing agency where he is helping
							world class coaches scale their business from 6 to 7 to even 8
							figures.He has worked with the likes of Terrance Mchanon, Ken D
							Foster & Amberly lago. Apart from that, Rohit Soni also has a
							podcast called ‘Rohit Soni Leadership Podcast’ with over 85+
							episodes where he interviews people and shares their success
							stories. Laptop lifestyle is something that Rohit Soni enjoys. He
							has a mission to guide people in India to learn high income skills
							& start a business from anywhere like he did it for himself.
						</Typography>
					</Box>

					<Box
						display={'flex'}
						width="75%"
						marginTop={'60px'}
						sx={{
							'@media (max-width: 1200px)': {
								flexDirection: 'column-reverse',
							},
						}}
					>
						<Typography
							textAlign={'justify'}
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									paddingRight: '50px',
								},
							}}
						>
							<Typography
								variant="h3"
								marginTop="20px"
								color="red"
								sx={{
									'@media (min-width: 1200px)': {
										// flexDirection: 'column',
										// paddingLeft: '50px',
									},
								}}
							>
								ABHIJIT CHAVDA
							</Typography>
							Mr. Abhijit Chavda is a Theoretical Physicist, Historian,
							Geopolitical Analyst, Writer and Podcaster. His work in
							theoretical physics has involved research on the topics of dark
							matter, dark energy, black hole physics, quantum gravity and
							physical cosmology. He is the creator of the immensely popular
							‘Ask Abhijit Podcast’ in which he answers live questions from a
							global audience, the Indian Interest Podcast which focuses on
							geopolitics, and the Abhijit Chavda Podcast in which he has
							conversations with eminent guests from a wide variety of
							backgrounds.He is a member of the consultative group to the
							Principal Scientific Adviser to the Government of India. He is one
							of the most popular and frequent guests on The Ranveer Show.He was
							awarded the 2022 Maharshi Narad Award for service to the Indic
							cause by the honorable Governor of Maharashtra, Shri Bhagat Singh
							Koshyari at Raj Bhavan, Mumbai.
						</Typography>

						<Box
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									width: '50%',
								},
							}}
						>
							<img
								style={{
									height: '270px',
									borderRadius: '15px 50px',
									objectFit: 'cover',
									width: '270px',
								}}
								src={'/ABHIJITCHAVDA.jpeg'}
								alt=""
							/>
						</Box>
					</Box>
					<Box
						display={'flex'}
						width="75%"
						marginTop={'60px'}
						sx={{
							'@media (max-width: 1200px)': {
								flexDirection: 'column',
							},
						}}
					>
						<Box
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									width: '50%',
								},
							}}
						>
							<img
								style={{
									height: '270px',
									borderRadius: '15px 50px',
									objectFit: 'cover',
									width: '270px',
								}}
								src={'/AAKANSHCHATURVEDI.jpeg'}
								alt=""
							/>
						</Box>
						<Typography
							textAlign={'justify'}
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									paddingLeft: '50px',
								},
							}}
						>
							<Typography variant="h3" color="red" marginTop={'20px'}>
								AAKANSH CHATURVEDI
							</Typography>
							Mr. Aakansh Chaturvedi is a passionate artist and experienced in
							the field of industrial design. The latest of his innovative
							projects is Bambass- A sustainable alternative of headphones which
							is made up of bamboo reflects the aesthetics of bamboo
							craftsmanship and Indian culture, which has caught the eyes of
							millions of people on social media. He can achieve
							70%sustainability in its initial prototypes, and try to stretch it
							to 100. The course of engineering in electronics and communication
							made him aware of the importance of sustainable products. He
							decided to further study in the field of design, during his post
							graduation. He has also developed a project to help the rural
							population to earn a better living by developing a sustainable
							business through solar dried food. With an eye for detail, Aakansh
							is also a miniature sculpture artist, carves sculptures out of
							pencil graphite, his work is displayed in various art exhibitions
							in M.P. and Gujarat and bagged a record making one of the smallest
							sculptures.
						</Typography>
					</Box>
					<Box
						display={'flex'}
						width="75%"
						marginTop={'60px'}
						sx={{
							'@media (max-width: 1200px)': {
								flexDirection: 'column-reverse',
							},
						}}
					>
						<Typography
							textAlign={'justify'}
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									paddingRight: '50px',
								},
							}}
						>
							<Typography
								variant="h3"
								marginTop="20px"
								color="red"
								sx={{
									'@media (min-width: 1200px)': {
										// flexDirection: 'column',
										// paddingLeft: '50px',
									},
								}}
							>
								GBS SIDHU
							</Typography>
							After working as a lecturer in Govt College, Nabha (Pb) for two
							years,Mr. GBS Sidhu joined I.P.S. in 1964. He was declared the
							Best All Round Probationer at the Passing Out parade (which he
							led) of the 1964 batch at C.P.T.C. Mount Abu in December 1965, and
							was awarded Prime Minister’s Baton and Home Minister’s revolver.
							Allotted to U.P. cadre, where he served for seven years in various
							capacities including A.S.P Kanpur, Addl. S.P. Agra and finally as
							S.P Barabanki. He joined R&AW in February 1972, where he served
							for 26 years before he retired as Special Secretary in April 1998.
							He has also authored two books namely Sikkim Dawn of Democracy
							(Penguin- 2018) and The Khalistan Conspiracy (HarperCollins 2020).
						</Typography>

						<Box
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									width: '50%',
								},
							}}
						>
							<img
								style={{
									height: '270px',
									borderRadius: '15px 50px',
									objectFit: 'cover',
									width: '270px',
								}}
								src={'/GBSSIDHU.jpeg'}
								alt=""
							/>
						</Box>
					</Box>
					<Box
						display={'flex'}
						width="75%"
						marginTop={'60px'}
						sx={{
							'@media (max-width: 1200px)': {
								flexDirection: 'column',
							},
						}}
					>
						<Box
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									width: '50%',
								},
							}}
						>
							<img
								style={{
									height: '270px',
									borderRadius: '15px 50px',
									objectFit: 'cover',
									width: '270px',
								}}
								src={'/MEGHAPARMAR.jpeg'}
								alt=""
							/>
						</Box>
						<Typography
							textAlign={'justify'}
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									paddingLeft: '50px',
								},
							}}
						>
							<Typography variant="h3" color="red" marginTop={'20px'}>
								MEGHA PARMAR
							</Typography>
							Ms. Megha Parmar is a passionate mountaineer and technical Scuba
							diver hailing from Sehore district, Madhya Pradesh. She became the
							First woman from Madhya Pradesh to climb Mt. Everest. Ms. Megha
							has also set a new world record for technical scuba diving by
							diving to a depth of 147 feet (45 meters) in 27 minutes,at Bay of
							Bengal, Puducherry and became the first woman in the world to
							achieve it. She also appeared on talk shows like DD Madhya Pradesh
							and other digital platforms like TEDx. Since 2019, she has been
							Madhya Pradesh’s Brand Ambassador for the ‘BETI BACHAO BETI
							PADHAO’ campaign.
						</Typography>
					</Box>
					<Box
						display={'flex'}
						width="75%"
						marginTop={'60px'}
						sx={{
							'@media (max-width: 1200px)': {
								flexDirection: 'column-reverse',
							},
						}}
					>
						<Typography
							textAlign={'justify'}
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									paddingRight: '50px',
								},
							}}
						>
							<Typography
								variant="h3"
								marginTop="20px"
								color="red"
								sx={{
									'@media (min-width: 1200px)': {
										// flexDirection: 'column',
										// paddingLeft: '50px',
									},
								}}
							>
								BIJAY NAIR
							</Typography>
							Lt. Cdr Bijay Nair (retd) is a commissioned Naval Officer from
							Naval Academy and served 10 years relinquishing as LtCdr, with
							many medals and accolades. He was a part of Operation Talwar in
							1999 (famously known as the Operation Vijay or Kargil War) and is
							decorated with Ops Vijay Star and Vijay Medal. In 2003 and 2004,
							he was awarded Commendation by Flag officer Western Naval Command,
							and in 2006, he was awarded the prestigious Chief of Naval Staff
							Commendation. He is a passionate Ultra distance runner and
							finisher of prestigious Comrades Marathon in 2019 a distance of 89
							Kms in South Africa. Currently, as Associate Vice President, he
							works for the National Ship Classification Society in their
							Promoted Organisation and Heads Quality, Compliance and Audits.
						</Typography>

						<Box
							sx={{
								'@media (min-width: 1200px)': {
									// flexDirection: 'column',
									width: '50%',
								},
							}}
						>
							<img
								style={{
									height: '270px',
									borderRadius: '15px 50px',
									objectFit: 'cover',
									width: '270px',
								}}
								src={'/BIJAYNAIR.jpeg'}
								alt=""
							/>
						</Box>
					</Box>
				</Box>
			</Paper>
		</div>
	);
};

export default Speakers;
