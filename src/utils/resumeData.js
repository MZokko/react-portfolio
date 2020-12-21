import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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

  aboutMe: {
    intrest:
      '- Found of music, play Bass guitar \n - Real passion for drawing and street art \n - Freelancer website developer. ',
  },

  professionalExperience: [
    { title: 'Labour agency : Greenstaff', date: '2016-2020', description: 'LandscaperatGreenstaff(Laboureragency)' },
    { title: 'Working Holiday – Australia', date: '2014-2016', description: 'Farming work in Queensland and Tasmania as a Picker during servral differents seasons' },
    { title: 'Childcare', date: '2011-2014', description: 'n an outdoor center named « côte des carrières » in Jouy Le Moutier (France)' },
    { title: 'Technician', date: '2011-2014', description: 'in the group named cofely during a part of the summer holiday, during high school' },
    { title: 'Concert and event’s ​organizer​', date: '2011-2014', description: 'for some local groups of music in an association' },
  ],
};
