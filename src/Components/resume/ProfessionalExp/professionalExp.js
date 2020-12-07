import { Paper, Typography, Card, makeStyles } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const professionalExp = () => {
  return (
    <Paper>
      <Typography variant='h5'>Professional Experience</Typography>

      <Timeline align='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card>
              <CardContent>
                <Typography>
                  <span style={{ fontWeight: 'bold' }}> 2016-2020</span>
                  <br />
                  <span style={{ fontWeight: 'bold' }}>
                    Labour agency : Greenstaff
                  </span>
                  <br />
                  LandscaperatGreenstaff(Laboureragency)
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        {/* item */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card>
              <CardContent>
                <Typography>
                  <span style={{ fontWeight: 'bold' }}> 2014-2016</span>
                  <br />
                  <span style={{ fontWeight: 'bold' }}>
                    Working Holiday – Australia :
                  </span>
                  <br />
                  􏰀 Farming work in Queensland (Cherry Tomatoes, Raspberry,
                  Strawberry, BlueBerry, Pineapple, Lime) and Tasmania (Cherry)
                  as :<br />
                  - Picker
                  <br />- Packer
                  <br />
                  􏰀 I worked in an interim group, this group allowed me to work
                  in different jobs as :<br />
                  - Painter​ ​in a construction site
                  <br />
                  - Waiter in several restaurants
                  <br />
                  - Bartender during some special event
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        {/* item */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card>
              <CardContent>
                <Typography>
                  <span style={{ fontWeight: 'bold' }}> 2011-2014</span>
                  <br />
                  <span style={{ fontWeight: 'bold' }}>Childcare :</span>
                  <br />
                  in an outdoor center named « côte des carrières » in Jouy Le
                  Moutier (France)
                </Typography>

                <Typography>
                  <span style={{ fontWeight: 'bold' }}>Technician :</span>​
                  <br />
                  in the group named cofely during a part of the summer holiday,
                  during high school
                </Typography>

                <Typography>
                  <span style={{ fontWeight: 'bold' }}>
                    Concert and event’s ​organizer​ :
                  </span>{' '}
                  <br />
                  for some local groups of music
                </Typography>

                <Typography>
                  ​<span style={{ fontWeight: 'bold' }}>kitchen hand​ :</span>
                  <br />​ in a kebab next to my school
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        {/* item */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
};

export default professionalExp;
