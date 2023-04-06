import React from 'react';
import {
	Paper,
	Box,
	Typography,
	List,
	FormControl,
	ListItem,
	TextField,
	Checkbox,
	FormControlLabel,
	Radio,
	FormLabel,
	RadioGroup,
	Button,
	Alert,
} from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const Form = () => {
	const [checked, setChecked] = useState(false);
	const hcc = useRef(9);
	const name = useRef('');
	const email = useRef('');
	const phone = useRef('');
	const college = useRef('');
	// const payment = useRef('');
	// const [isDisabled, setisDisabled] = useState(true);
	const file = useRef(null);
	const [payment, setVal] = useState('no');
	const hc = (event) => {
		hcc.current.click();
	};
	const formValid = () => {
		if (name.current.value === '') return false;
		if (email.current.value === '') return false;
		if (phone.current.value === '') return false;
		if (college.current.value === '') return false;
		return true;
	};
	const [sub, isSubmit] = useState(false);
	const handleSubmit = (event) => {
		if (!formValid()) {
			alert('incomplete or wrong input');
			return;
		}
		event.preventDefault();
		const fData = new FormData();
		fData.append('name', name.current.value);
		fData.append('email', email.current.value);
		fData.append('phone', phone.current.value);
		fData.append('college', college.current.value);
		fData.append('payment', payment);
		if (payment === 'yes') {
			fData.append('step', 'PAID');
			fData.append('photo', document.getElementById('upload-photo').files[0]);
		} else {
			fData.append('step', 'REGISTERED');
		}
		fetch(process.env.REACT_APP_URL, {
			method: 'POST',
			body: fData,
		})
			.then((resp) => {
				alert('Form Submitted Succesfully');
				name.current.value = '';
				email.current.value = '';
				phone.current.value = '';
				college.current.value = '';
				setVal('no');
				isSubmit(true);
			})
			.catch((err) => {
				if (err) {
					console.log(err);
					alert('cannot submit the form!');
				}
			});
	};
	const handleChange = (e) => {
		setVal(e.target.value);
	};
	return (
		<Paper sx={{ height: '100%' }}>
			<Box display="flex" alignItems="center" flexDirection="column">
				<Box padding="2rem" width={'80%'}>
					<Typography fontSize={'2rem'} textAlign={'center'}>
						Ticket to <b>TEDxMANITBhopal</b>{' '}
					</Typography>
					<br />
					<Typography fontSize={'1.2rem'} textAlign={'justify'}>
						TEDxMANITBhopal is back after a decade, and this time, we are
						bringing together some of the most inspiring and innovative minds
						from across the country to share their Maverick's Chronicles with
						you. We invite you to come and be a part of this incredible
						experience.
					</Typography>

					<br />
					<Typography fontSize={'1.2rem'} textAlign={'justify'}>
						Prepare to be blown away by the incredible stories of our
						TEDxMANITBhopal speakers who have defied the odds, shattered
						conventions, and forged their own paths to greatness and inspire you
						to think outside the box and push your own boundaries. So gear up
						for an unforgettable experience at TEDxMANITBhopal and witness the
						power of the Maverick's Chronicles.
					</Typography>
					<br />
					<Typography fontSize={'1.2rem'} textAlign={'center'}>
						<b>Venue: </b>MANIT, Bhopal
					</Typography>
					<br />
					<Typography fontSize={'1.2rem'} textAlign={'center'}>
						<b>Early Bird Ticket Price: </b>Rs. 499{' '}
						{`( Only for Non-Manitians )`}
					</Typography>
					<br />
					<Typography fontSize={'1.2rem'} textAlign={'center'}>
						<b>We have Limited Seats for TEDxManit Bhopal.</b>
					</Typography>
					<br />
					<Typography fontSize={'1.2rem'} textAlign={'center'}>
						Check out our Instagram Page to know more about our speakers:{' '}
						<Link
							to="https://www.instagram.com/tedxmanitbhopal/?igshid=YmMyMTA2M2Y%3D"
							style={{ textDecoration: 'none', color: 'red' }}
						>
							@tedxmanitbhopal
						</Link>
					</Typography>
					<br />
					<Typography fontSize={'1rem'} textAlign={'center'}>
						For any doubts/queries, you can contact:
						<br />
						Animesh - 8504036415
						<br />
						Navya - 9490165056
						<br />
						You can also email us at tedxmanitbhopal@gmail.com
					</Typography>
				</Box>
				<Box
					margrinTop="3rem"
					sx={{
						'@media (min-width: 900px)': {
							width: '50%',
						},
					}}
					width="80%"
					justifyContent={'center'}
				>
					<form action="/" method="POST">
						<FormControl fullWidth>
							<List>
								<ListItem>
									<TextField
										variant="standard"
										fullWidth
										label="Name"
										required
										inputRef={name}
									></TextField>
								</ListItem>
								<ListItem>
									<TextField
										variant="standard"
										fullWidth
										label="Email ID"
										required
										inputRef={email}
									></TextField>
								</ListItem>
								<ListItem>
									<TextField
										variant="standard"
										fullWidth
										label="Contact Number"
										required
										inputRef={phone}
									></TextField>
								</ListItem>
								<ListItem>
									<TextField
										variant="standard"
										fullWidth
										label="School/Collage"
										required
										inputRef={college}
									></TextField>
								</ListItem>
								{/* <ListItem>
									<TextField
										variant="standard"
										fullWidth
										label="From where did you get to know about TEDxMANIT Bhopal?"
										required
									></TextField>
								</ListItem> */}
								<ListItem
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'left',
										alignItems: 'flex-start',
									}}
								>
									<FormControl required>
										<FormLabel
											id="demo-controlled-radio-buttons-group"
											required
										>
											Payment
										</FormLabel>
										<RadioGroup
											aria-labelledby="demo-controlled-radio-buttons-group"
											name="controlled-radio-buttons-group"
											// ref={payment}
											onChange={handleChange}
										>
											<FormControlLabel
												value="yes"
												control={<Radio />}
												label="Grab your passes Now"
												onClick={() => {
													setChecked(true);
												}}
											/>
											<FormControlLabel
												value="no"
												control={<Radio />}
												label="Grab your passes Later"
												onClick={() => {
													setChecked(false);
												}}
											/>
										</RadioGroup>
									</FormControl>
								</ListItem>
								<ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
									{checked && (
										<Typography>
											{' '}
											<b>*Scan the QR code below</b>{' '}
										</Typography>
									)}
									{checked && (
										<img
											src="/payment.PNG"
											style={{ height: '400px', width: '300px' }}
											alt="qr_payment__bar"
										/>
									)}
									{checked && (
										<Typography marginTop="2rem">
											<b>*Attach Payment Receipt ( Screenshot of Payment )</b>
										</Typography>
									)}
									{checked && (
										<>
											{
												<label htmlFor="upload-photo">
													<input
														id="upload-photo"
														name="upload-photo"
														accept="image/*"
														type="file"
														// ref={file}
														// ref={file}
													/>
												</label>
											}
										</>
									)}
								</ListItem>

								<ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
									<Link
										to="/buy-tickets"
										style={{
											textDecoration: 'none',
											color: 'black',
											'&:hover': {
												color: 'black',
											},
											width: '100%',
										}}
									>
										<Button
											sx={{
												background: 'red',
												'&:hover': {
													cursor: 'pointer',
													background: 'white',
													color: 'black',
												},
											}}
											variant="contained"
											fullWidth
											type="submit"
											onClick={handleSubmit}
										>
											Submit
										</Button>{' '}
									</Link>
									{sub && (
										<Alert
											onClose={() => {
												isSubmit(false);
											}}
										>
											Form Submmited Succesfully{' '}
											<Link to="/"> Click to continue</Link>
										</Alert>
									)}
									<Typography marginTop={'3rem'} textAlign={'center'}>
										If you have completed the payment then you will receive a
										confirmation email and a virtual pass within 24 hours after
										completing the payment process.
										<br />
										Thank you for registering for TEDxMANIT Bhopal!
									</Typography>
								</ListItem>
							</List>
						</FormControl>
					</form>
				</Box>
			</Box>
		</Paper>
	);
};

export default Form;
