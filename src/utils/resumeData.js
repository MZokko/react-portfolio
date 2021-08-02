import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import PaletteIcon from '@material-ui/icons/Palette';
import FindInPageIcon from '@material-ui/icons/FindInPage';


export const data ={
  name: 'Alexandre Moradel',
  title: 'Full stack developer',

  birthdate: 'Nov 1992',
  email: 'alexandremradel92@gmail.com',

  location: 'Sydney',

  social: {
    LinkedIn: {
      link: 'https://www.linkedin.com/',
      text: 'Alex linkedIn',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://github.com/MZokko',
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
        'working in an outdoor center named « côte des carrières » in Jouy Le Moutier (France)',
    },
    {
      title: 'Technician',
      date: '2011-2014',
      description:
        'company named COFELY during a part of the summer holiday, during high school',
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
    {
      title: 'Web developement',
      description:
        'full responsive web page developement, build for a modern day usage of internet',
      icon: <WebIcon />,
    },
    {
      title: 'Web design',
      description:
        'Give you a good visual representation to discuss about your project with a visually appealing and easy to identify web design',
      icon: <PaletteIcon />,
    },
    {
      title: 'Search Engine Optimization',
      description:
        'Create a efficient connection with your customers with a good ranking in google with the SEO service',
      icon: <FindInPageIcon />,
    },
  ],

  portefolio: [
    {
      title: 'cleaning roaster app',
      techDescription: 'java / android mobile',
      link: '',
    },
    {
      title: 'Memory forge',
      techDescription: 'React native / cross mobile app',
      link: '',
    },
    { title: 'Burger order', techDescription: 'React js / web app', link: '' },
    { title: 'website for a Tattoo studio', techDescription: 'React js / Firebase(storage, firestore, hosting) / CI/CD pipeline', link: '' },
  ],
};
