import React from 'react';
import Nav1 from '../components/UI/Nav1';
import About from '../components/About';
import Sponsors from '../components/UI/Sponsors';

import Footer from '../components/UI/Footer';

const Home = () => {
	return (
		<div>
			<Nav1></Nav1>
			<About></About>
			<Sponsors></Sponsors>
			<Footer></Footer>
		</div>
	);
};

export default Home;
