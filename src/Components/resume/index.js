import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import {data} from '../../utils/resumeData';
import CustomeTimeline, {CustomeTimelineSeparator,} from '../Timeline/CustomeTimeline';
import './index.css';
import Title from '../UI/TitleStyle'

const resume = () => {
  return (
    <div >
      {/* education and Experience */}
      <Grid>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Title>Resume</Title>
          {/* <h6 className='section_title_text'>Resume</h6> */}
        </Grid>

        <Grid item xs={12} className="resumeContainer">
          <Grid container className='profExpTimeLine'>
            {/* professional Experience */}
            <Grid item xs={12} md={6}>
              <CustomeTimeline
                icon={<WorkIcon />}
                title={'Professional Experience'}
              >
                {data.professionalExperience.map((exp) => {
                  return (
                    <TimelineItem key={exp.title}>
                      <CustomeTimelineSeparator />

                      <TimelineContent className='timelineContent'>
                        <Typography className='timelineTitle'>
                          {exp.title}
                        </Typography>
                        <Typography variant='caption' className='timelineDate'>
                          {exp.date}
                        </Typography>
                        <Typography variant='body2' className='timelineDesc'>
                          {exp.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomeTimeline>
            </Grid>

            {/* Educational Training */}
            <Grid item xs={12} md={6}>
              <CustomeTimeline
                icon={<SchoolIcon />}
                title={'Education and training'}
              >
                {data.educationTraning.map((educ) => {
                  return (
                    <TimelineItem key={educ.date}>
                      <CustomeTimelineSeparator />
                      <TimelineContent>
                        <Typography variant="h5">{educ.date}</Typography>
                        <Typography variant="caption">{educ.title}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomeTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

export default resume;
