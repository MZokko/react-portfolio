import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import PaletteIcon from '@material-ui/icons/Palette';
import TimerIcon from '@material-ui/icons/Timer';

export default {
  name: 'Alexandre Moradel',
  title: 'Full stack developer',

  birthdate: 'Nov 1992',
  email: 'dummy@try.com',

  location: 'Sydney',

  social: {
    LinkedIn: {
      link: 'https://www.linkedin.com/',
      text: 'Alex linkedIn',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://www.github.com/',
      text: 'Alex Git',
      icon: <GitHubIcon />,
    },
  },

  professionalExperience: [
    {
      title: 'Labour agency : Greenstaff',
      date: '2016-2020',
      description: 'LandscaperatGreenstaff(Laboureragency)',
    },
    {
      title: 'Working Holiday – Australia',
      date: '2014-2016',
      description:
        'Farming work in Queensland and Tasmania as a Picker during servral differents seasons',
    },
    {
      title: 'Childcare',
      date: '2011-2014',
      description:
        'n an outdoor center named « côte des carrières » in Jouy Le Moutier (France)',
    },
    {
      title: 'Technician',
      date: '2011-2014',
      description:
        'in the group named cofely during a part of the summer holiday, during high school',
    },
    {
      title: 'Concert and event’s ​organizer​',
      date: '2011-2014',
      description: 'for some local groups of music in an association',
    },
  ],

  educationTraning: [
    {
      title:
        'Bachelor of Information Technology(mobile application development)',
      date: '2017-2020',
    },
    { title: 'White Card / R.S.A Australia', date: '2015' },
    { title: 'Webmaster/Application developer formation', date: '2011-2013' },
    { title: 'B.A.F.A (French certificate for child caring)', date: '2011' },
    { title: 'Scientific High School Degree', date: '2009' },
    { title: 'PSC1 (French first aid assistance)', date: '2007' },
  ],

  serivces: [
    { title: 'Web dev', description: 'full responsive web page developement',icon:<WebIcon/> },
    { title: 'Design', description: 'work with adobe photoshop for design and logo',icon:<PaletteIcon/> },
    { title: 'Efficient ', description: 'fast delivery product',icon:<TimerIcon/> },
  ],
};
