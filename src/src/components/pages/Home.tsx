import { FC } from 'react';
import { HomeContainer, HomeTitle, HomeSubtitle, HomeTagline } from '../Styles';

const Home: FC = () => {
  return (
    <HomeContainer>
      <HomeTitle>Nora Mensah</HomeTitle>
      <HomeSubtitle>Software Engineer</HomeSubtitle>
      <HomeTagline>
        I build web and mobile experiences that <em>transform the way</em> we do
        things.
      </HomeTagline>
    </HomeContainer>
  );
};

export default Home;
