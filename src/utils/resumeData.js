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
};
