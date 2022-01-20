import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia } from '../helpers/constants';
import { SocialLink, FooterWeapons } from './Styles';

const Footer: FC = () => {
  return (
    <FooterWeapons>
      <div style={{ flexDirection: 'row' }}>
        {socialMedia.map(media => (
          <SocialLink
            href={media.url}
            target="_blank"
            rel="noreferrer"
            key={media.id}
          >
            <FontAwesomeIcon icon={media.icon} />
          </SocialLink>
        ))}
      </div>

      <p>&copy; {new Date().getFullYear()} Nora Mensah</p>
    </FooterWeapons>
  );
};

export default Footer;
