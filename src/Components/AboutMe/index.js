import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import AddLocationIcon from '@material-ui/icons/AddLocation';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './styles.css';
import AboutMeSlot from './AboutMeSlot';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div>

      <div className='aboutMeContainer'>
        <div className='aboutMeNameTitle'>
          <Typography className='name'>name</Typography>
          <Typography className='title'>title</Typography>
        </div>

        <figure className='aboutmeIMG'>
          <img src={require('../../assets/images/23561676_1974817282731582_1689101379729377291_n.jpg')} alt='img' />
        </figure>
        <div className='timelineAboutme'>
          timeline <br />
          <button>my btn</button>
        </div>
      </div>

      <Card>
        <div className='aboutMeNameTitle'>
          <AboutMeSlot
            text={'Alexandre Moradel'}
            style={{
              textTransform: 'uppercase',
              fontSize: '17px',
              fontWeight: 'bold',
            }}
          />
          <AboutMeSlot text={'sofware developper'} />
        </div>
        <Avatar alt='Alex' src='./public/alex.jpg' className={classes.large} />
        <AboutMeSlot
          text={'Location : Sydney Australia'}
          icon={<AddLocationIcon />}
        />
        <AboutMeSlot text={'https://github.com/MZokko'} icon={<GitHubIcon />} />
        <AboutMeSlot
          text={'https://www.linkedin.com/in/alexandre-moradel-2310701b3/'}
          icon={<LinkedInIcon />}
        />
      </Card>
    </div>
  );
};

export default AboutMe;
