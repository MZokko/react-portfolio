import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import AddLocationIcon from '@material-ui/icons/AddLocation';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {styles} from './styles.js'
import AboutMeSlot from './AboutMeSlot';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const AboutMe = () => {
    const classes = useStyles();
    return (
       
            <Card style={styles.aboutMeContainer}>
                <Avatar alt="Alex" src="./public/alex.jpg" className={classes.large} />
                <AboutMeSlot text={'Alexandre Moradel'} />
                <AboutMeSlot text={'Born in 1992'} />
                <AboutMeSlot text={'Location : Sydney Australia'} icon={<AddLocationIcon/>}/>
                <AboutMeSlot text={'https://github.com/MZokko'} icon={<GitHubIcon/>}/>
                <AboutMeSlot text={'https://www.linkedin.com/in/alexandre-moradel-2310701b3/'} icon={<LinkedInIcon/>}/>
            </Card>
    
    );
}

export default AboutMe;
