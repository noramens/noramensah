import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export const socialMedia: {
  id: number;
  url: string;
  icon: any;
}[] = [
  {
    id: 0,
    url: 'https://www.linkedin.com/in/noramensah',
    icon: faLinkedin
  },
  {
    id: 1,
    url: 'https://github.com/noramens',
    icon: faGithub
  },
  {
    id: 2,
    url: 'https://twitter.com/noramens_',
    icon: faTwitter
  }
];

export const navItems: { id: number; name: string; to: string }[] = [
  { id: 0, name: 'Home', to: '/' },
  { id: 1, name: 'About', to: '/about' },
  { id: 2, name: 'Blog', to: '/blog' }
];
