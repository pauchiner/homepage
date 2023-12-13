import {
  GithubButton,
  InstagramButton,
  SpotifyButton,
  TwitterButton
} from 'components/buttons';
import './styles.css';

const SocialNetworks = () => {
  return (
    <div id="social-networks">
      <GithubButton />
      <TwitterButton />
      <InstagramButton />
      <SpotifyButton />
    </div>
  );
};

export default SocialNetworks;
