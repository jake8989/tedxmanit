import React from 'react';
import { Button } from '@mui/material';
// import './App.css';
import './Home.css';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import classes from './Header.module.css';
import logo from '../../assets/tedxmanit.png';

import './Header.css';
export const App = () => {
    return (
        <div className="container_">
            <div>
                <img src={logo}/>
            </div>
        </div>
    );
};
export default App;