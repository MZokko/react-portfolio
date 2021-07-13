import React from 'react';
import { Typography } from '@material-ui/core';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import CustomeTimeline, {CustomeTimelineSeparator,} from '../Timeline/CustomeTimeline';
import './styles.css';
import imgProfile from '../../assets/images/displayImg.jpg';
import {data} from '../../utils/resumeData';
import MyButton from '../Button/MyButton';

const CustomTimelineItem = (props) => {
  return (
    <TimelineItem>
      <CustomeTimelineSeparator />
      <TimelineContent className='timelineContent'>
        {props.link ? (
          <Typography className='timelineText'>
            <span>{props.title}:</span>
            <a href={props.link} rel="noreferrer" target='_blank'>
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
    
      
        <div className='aboutMeContainer'>
          <div className='aboutMeNameTitle'>
            <Typography className='name'>{data.name}</Typography>
            <Typography className='title'>{data.title}</Typography>
          </div>

          <figure className='aboutmeIMG'>
            <img src={imgProfile} alt='img' />
          </figure>
          <div className='timelineAboutme'>
            <CustomeTimeline icon={<PersonOutlineIcon />}>
              <CustomTimelineItem title={'Email'} text={data.email} />
              <CustomTimelineItem title={'Location'} text={data.location}/>

              {/* map thru social array of data for the social item of the timeline */}
              {Object.keys(data.social).map((key) => (
                <CustomTimelineItem
                  key={key}
                  title={key}
                  text={data.social[key].text}
                  link={data.social[key].link}
                />
              ))}
            </CustomeTimeline>
            <div className='btnDlCvContainer'>
              <MyButton text={'Download Cv'} icon={<GetAppIcon />}></MyButton>
            </div>
          </div>
        </div>
      
    
  );
};

export default AboutMe;
