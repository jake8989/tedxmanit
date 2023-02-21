import React from 'react';
import Nav1 from '../components/UI/Nav1';
import About from '../components/About';
import Sponsors from '../components/UI/Sponsors';
import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header'

const Home = () => {
	return (
		<div>
			<Nav1></Nav1>
			<Header></Header>
			<About></About>
			{/* <Sponsors></Sponsors> */}
			<Footer></Footer>
		</div>
	);
};

export default Home;
