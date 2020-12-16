import React from 'react';

import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GetAppIcon from '@material-ui/icons/GetApp';

import CustomeTimeline, {
  CustomeTimelineSeparator,
} from '../Timeline/CustomeTimeline';

import './styles.css';
import imgProfile from '../../assets/images/displayImg.jpg';
import resumeData from '../../utils/resumeData';
import MyButton from '../Button/MyButton';

const CustomTimelineItem = (props) => {
  return (
    <TimelineItem>
      <CustomeTimelineSeparator />
      <TimelineContent className='timelineContent'>
        {props.link ? (
          <Typography className='timelineText'>
            <span>{props.title}:</span>
            <a href={props.link} target='_blank'>
              {props.text}
            </a>
          </Typography>
        ) : (
          <Typography className='timelineText'>
            <span>{props.title}:</span>
            {props.text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const AboutMe = () => {
  return (
    <div>
      <Card>
        <div className='aboutMeContainer'>
          <div className='aboutMeNameTitle'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
          </div>

          <figure className='aboutmeIMG'>
            <img src={imgProfile} alt='img' />
          </figure>
          <div className='timelineAboutme'>
            <CustomeTimeline icon={<PersonOutlineIcon />}>
              <CustomTimelineItem title={'Email'} text={resumeData.email} />
              <CustomTimelineItem
                title={'Location'}
                text={resumeData.location}
              />

              {/* map thru social array of resumeData for the social item of the timeline */}
              {Object.keys(resumeData.social).map((key) => (
                <CustomTimelineItem
                  key={key}
                  title={key}
                  text={resumeData.social[key].text}
                  link={resumeData.social[key].link}
                />
              ))}
            </CustomeTimeline>
            <div className='btnDlCvContainer'>
              <MyButton text={'Download Cv'} icon={<GetAppIcon />}></MyButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutMe;
