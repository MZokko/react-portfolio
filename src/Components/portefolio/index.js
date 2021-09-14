import React from 'react';
import './portefolio.css';
import {Grid,Card,} from '@material-ui/core';
import Flip from 'react-reveal/Flip';
import {data} from '../../utils/resumeData'
import Title from '../UI/TitleStyle'

const portefolio = () => {
  return (

    <div elevation={3} variant='elevation' className='portefolioContainer'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <Title>Portefolio</Title>
      </Grid>
    
      <div className='flexportfolio'>
        {data.portefolio.map((portefolio)=>{
          return (
            <Flip>
            <Card key={portefolio.title} >
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
