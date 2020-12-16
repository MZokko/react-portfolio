import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

import './CustomeTimeline.css'

function CustomeTimeline(props) {
  return (
    <div>
      <Timeline className={'timeline'}>
        {/*timeline header*/}
        <TimelineItem className={'timelineFirstItem'}>
          <TimelineSeparator>
            <TimelineDot className={'timelineDotHeader'} >{props.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6' className={'timelineTitleHeader'}>
              {props.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {props.children}

        {/* timeline items */}
        {/* <TimelineItem>
          <CustomeTimelineSeparator/>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </div>
  );
}

export const CustomeTimelineSeparator=()=>{
    return(
        <TimelineSeparator className={'separatorItem'}>
            <TimelineDot variant={'outlined'} className={'timelineDotItem'} />
            <TimelineConnector />
          </TimelineSeparator>
    )
}

export default CustomeTimeline;
