import React from 'react';
import { Button } from '@mui/material';
// import './App.css';
import './Home.css';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import classes from './Header.module.css';
import logo from '../../assets/tedxmanit.png';
import ISTE from '../../assets/ISTElogo.svg';

import './Header.css';
export const App = () => {
    return (
        <div className="container_">
            <div className="logos">
                <img src={ISTE} className='iste'/>
                <img src={logo} className='tedx'/>
            </div>
        </div>
    );
};
export default App;