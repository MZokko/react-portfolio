import React from 'react';
import {styles} from './style';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import GitHubIcon from '@material-ui/icons/GitHub';

const portefolio = () => {
  return (
    
    <Card elevation={3} variant='elevation' classes={styles.Portefolio} >
      <Typography variant='h5'>Projects</Typography>
      <Grid container spacing={3} className={{margin: '10px 10px 10px 10px'}}>
        <Grid item xs={3}>
          <Card classes={{overflow: 'visible'}}>
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
              <a target='_blank' href="https://github.com/MZokko/cleanAppAdvStud">See code</a>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card  classes={{overflow: 'visible'}}>
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
              <a target='_blank' href="https://github.com/MZokko/burger-React-workshop">See code</a>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
        <Card  classes={{overflow: 'visible'}}>
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
              <a target='_blank' href="https://github.com/MZokko/finalCrossApp">See code</a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Card>

  );
};

export default portefolio;
