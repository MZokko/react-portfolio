import React from 'react';
import './portefolio.css';
import {Grid,Card,} from '@material-ui/core';
import Flip from 'react-reveal/Flip';
import {data} from '../../utils/resumeData'
import Title from '../UI/TitleStyle'

const portefolio = () => {
  return (
    // classes={styles.Portefolio}
    <div elevation={3} variant='elevation' className='portefolioContainer'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <Title>Portefolio</Title>
        {/* <h6 className='section_title_text'>Portefolio</h6> */}
      </Grid>
      {/* <Grid container spacing={3} className='gridPortefolioCard'>
      {
        data.portefolio.map((projects)=>{
          return (
            <Grid
              key={projects.title}
              item
              xs={12}
              md={6}
              lg={3}
              className='gridItem'
            >
              <Flip>
                <Card className='projCard' elevation={4}>
                  <div className='projIconSection'>
                    {projects.icons.map((i)=>{return (
                      <div key={i.id} class>{i.icon}</div>
                    )})}
                  </div>
                  <span></span>
                  <CardContent>
                  <div className='projTitle'>{projects.title}</div>
                  <span></span>
                  <Typography className='projDesc'>{projects.techDescription}</Typography>

                  <div className='projLinks'>
                  {projects.links.map((url)=>{return(
                    <a key={url.url} href={url.url} target='_blank' rel='noreferrer' >Have a Look</a>
                  )})}
                  </div>
                  </CardContent>
                </Card>
              </Flip>
            </Grid>
          )})}
          </Grid> */}
      <div className='flexportfolio'>
        {data.portefolio.map((portefolio)=>{
          return (
            <Flip>
            <Card key={portefolio.title} className='cardPortfolio'>
            <div className='projIconSection'>
            {portefolio.icons.map((i)=>{return(<div key={i.id} >{i.icon}</div>)})}
            </div>
            <span></span>
            <h4 className='projTitle'>
            {portefolio.title}
            </h4>
            <div className='projDesc'>
            {portefolio.techDescription}
            </div>
            <div className='projLinks'>
            {portefolio.links.map((url)=>{return( <a key={url.url} href={url.url} target='_blank' rel='noreferrer' >Have a Look</a>)})}
            </div>
              
            </Card>
            </Flip>
          )
        })}
      </div>
    </div>
  );
};

export default portefolio;
