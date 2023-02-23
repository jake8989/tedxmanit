import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import imgSpk from '../assets/team_img/ShubhAsati.png';
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
								}}
								src={imgSpk}
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
								Spearker-1
							</Typography>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
							repudiandae harum dolore expedita nam, non error possimus rem
							recusandae provident ipsum culpa eveniet labore, ad mollitia!
							Consequuntur doloribus asperiores, nemo cum dicta inventore
							deserunt quas at consectetur omnis, voluptatibus totam veritatis
							quidem labore rem quaerat laboriosam, excepturi ad eveniet
							similique! Praesentium et assumenda tempora vero maiores sed
							eligendi possimus consequuntur vitae debitis nihil odit inventore
							modi officia illum eveniet quod eum accusamus aperiam dolorem,
							magni veritatis. Rerum beatae quas labore esse quibusdam harum
							pariatur hic debitis totam ab in numquam asperiores molestias
							saepe delectus praesentium ducimus, eum quae repellendus sit.
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
								Spearker-2
							</Typography>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
							repudiandae harum dolore expedita nam, non error possimus rem
							recusandae provident ipsum culpa eveniet labore, ad mollitia!
							Consequuntur doloribus asperiores, nemo cum dicta inventore
							deserunt quas at consectetur omnis, voluptatibus totam veritatis
							quidem labore rem quaerat laboriosam, excepturi ad eveniet
							similique! Praesentium et assumenda tempora vero maiores sed
							eligendi possimus consequuntur vitae debitis nihil odit inventore
							modi officia illum eveniet quod eum accusamus aperiam dolorem,
							magni veritatis. Rerum beatae quas labore esse quibusdam harum
							pariatur hic debitis totam ab in numquam asperiores molestias
							saepe delectus praesentium ducimus, eum quae repellendus sit.
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
								}}
								src={imgSpk}
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
								}}
								src={imgSpk}
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
								Spearker-3
							</Typography>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
							repudiandae harum dolore expedita nam, non error possimus rem
							recusandae provident ipsum culpa eveniet labore, ad mollitia!
							Consequuntur doloribus asperiores, nemo cum dicta inventore
							deserunt quas at consectetur omnis, voluptatibus totam veritatis
							quidem labore rem quaerat laboriosam, excepturi ad eveniet
							similique! Praesentium et assumenda tempora vero maiores sed
							eligendi possimus consequuntur vitae debitis nihil odit inventore
							modi officia illum eveniet quod eum accusamus aperiam dolorem,
							magni veritatis. Rerum beatae quas labore esse quibusdam harum
							pariatur hic debitis totam ab in numquam asperiores molestias
							saepe delectus praesentium ducimus, eum quae repellendus sit.
						</Typography>
					</Box>
				</Box>
			</Paper>
		</div>
	);
};

export default Speakers;
