import React from 'react';

import './portefolio.css';

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import Flip from 'react-reveal/Flip';

import GitHubIcon from '@material-ui/icons/GitHub';

const portefolio = () => {
  return (
    // classes={styles.Portefolio}
    <div elevation={3} variant='elevation' className='portefolioContainer'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Portefolio</h6>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Flip>
            <Card>
              <CardMedia>
                <GitHubIcon />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  automated roaster for shared house
                </Typography>
                <Typography>(mobile android Java)</Typography>
              </CardContent>

              <CardActions>
                <a
                  target='_blank'
                  href='https://github.com/MZokko/cleanAppAdvStud'
                >
                  See code
                </a>
              </CardActions>
            </Card>
          </Flip>
        </Grid>

        <Grid item xs={3}>
          <Flip>
            <Card>
              <CardMedia>
                <GitHubIcon />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  React workshop
                </Typography>
                <Typography>(webApp)</Typography>
              </CardContent>

              <CardActions>
                <a
                  target='_blank'
                  href='https://github.com/MZokko/burger-React-workshop'
                >
                  See code
                </a>
              </CardActions>
            </Card>
          </Flip>
        </Grid>

        <Grid item xs={3}>
          <Flip>
            <Card>
              <CardMedia>
                <GitHubIcon />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Number Guess Game
                </Typography>
                <Typography>(mobile app React-native )</Typography>
              </CardContent>

              <CardActions>
                <a
                  target='_blank'
                  href='https://github.com/MZokko/finalCrossApp'
                >
                  See code
                </a>
              </CardActions>
            </Card>
          </Flip>
        </Grid>
      </Grid>
    </div>
  );
};

export default portefolio;
