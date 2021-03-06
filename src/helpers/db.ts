import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export const socialMedia: {
  id: number;
  url: string;
  icon: any;
  'data-testid': string;
}[] = [
  {
    id: 0,
    url: 'https://www.linkedin.com/in/noramensah',
    icon: faLinkedin,
    'data-testid': 'LinkedIn'
  },
  {
    id: 1,
    url: 'https://github.com/noramens',
    icon: faGithub,
    'data-testid': 'Github'
  },
  {
    id: 2,
    url: 'https://twitter.com/noramens_',
    icon: faTwitter,
    'data-testid': 'Twitter'
  }
];

export const blogs: {
  id: number;
  title: string;
  description: string;
  url?: string;
  borderColor: string;
  buttonColor: string;
  to?: string;
}[] = [
  {
    id: 3,
    title: 'PX, REM and EM - how it affects accessibility',
    description:
      'The issue of accessibility in the software engineering space is such a huge topic that understanding how the units we use affects web accessibility may seem small but goes a long way in ensuring that our pages are giving the best experiences they should give to all types of users',
    to: '/blog/accessibility-in-css-units',
    borderColor: '#FF6464',
    buttonColor: '#91C483'
  },
  {
    id: 2,
    title: 'Staying Afloat With Your Internship',
    description:
      'I have decided to share some pointers that helped me whilst undergoing my graduate intership...',
    url: 'https://medium.com/mpharma-tech-blog/staying-afloat-with-your-internship-6ce7299313aa',
    borderColor: '#91C483',
    buttonColor: '#FFE162'
  },
  {
    id: 1,
    title: 'Understanding Big O Asymptotic Analysis',
    description:
      'As Software Engineers, our call is to solve some of the most difficult problems. Understanding the concept of Big O goes a long way to help you as an Engineer to understand...',
    url: 'https://medium.com/mpharma-tech-blog/understanding-big-o-asymptotic-analysis-b45ed511c697',
    borderColor: '#FFE162',
    buttonColor: '#FF6464'
  },
  {
    id: 0,
    title: 'My experience working on mPharma’s legacy codebase — Pestle',
    description:
      'When I received the call from our VP of Engineering stating that the BLD squad needed a Frontend Engineer to work on Pestle and that I am a good fit for it, like most developers, ',
    url: 'https://medium.com/mpharma-tech-blog/understanding-big-o-asymptotic-analysis-b45ed511c697',
    borderColor: '#FF6464',
    buttonColor: '#FFE162'
  }
];
