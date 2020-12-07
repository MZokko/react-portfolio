import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import { Card, Paper } from '@material-ui/core';

const educationTraning = () => {
  return (
    <Paper>
      <Typography variant='h5'>Education and Trainning</Typography>
      <Timeline align='alternate'>
        {/* item */}
        {/* <Card classes={{padding:'10px'}} > */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color='textSecondary' variant='h6'>
                2017-2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper>
                <Typography>
                  Bachelor of Information Technology(mobile application
                  development)
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        {/* </Card> */}

        {/* item */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color='textSecondary' variant='h6'>
              2015
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Typography>White card (NSW) / RSA</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* item */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color='textSecondary' variant='h6'>
              2012-2013
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Typography>
                Webmaster/Application developer formation(CRM=readaptation
                centre of mulhouse)
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* item */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color='textSecondary' variant='h6'>
              2011
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Typography>B.A.F.A (French diploma for child caring)</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* item */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color='textSecondary' variant='h6'>
              2009
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Typography>Scientific High School Degree</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* item */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color='textSecondary' variant='h6'>
              2007
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Typography>PSC1 (French first aid assistance)</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
};

export default educationTraning;
