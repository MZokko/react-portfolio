import React from 'react';
import { Card, Grid } from '@material-ui/core';
import './Services.css';
import {data} from '../../utils/resumeData';
import Flip from 'react-reveal/Flip';
// import SvgService from './SvgService'
import Title from '../UI/TitleStyle'

function Services() {
  return (
    <Grid>
      <Grid item className='section_title mb_30'>
        <span></span>
        <Title>Resume</Title>
        {/* <h6 className='section_title_text'>Services</h6> */}
      </Grid>
{/* <SvgService></SvgService> */}
      <Grid container spacing={3}>
        {data.serivces.map((serv) => {
          return (
            <Grid
              key={serv.title}
              item
              xs={12}
              md={6}
              lg={3}
              className='gridItem'
            >
              <Flip>
                <Card className='serviceCards' elevation={4}>
                  <div className='sectionIcon'>
                    <div>{serv.icon}</div>
                  </div>

                  <div className='section_title mb_30'>
                    <span></span>
                    <div>{serv.title}</div>
                  </div>

                  <div>{serv.description}</div>
                </Card>
              </Flip>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Services;
