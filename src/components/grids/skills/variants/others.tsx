import {FirebaseIcon, GitIcon, VercelIcon} from 'components/icons';
import {SkillButton} from 'components/buttons';
import SkillsGrid from '..';

export const OthersSkills = () => {
  return (
    <SkillsGrid title="OTHER TOOLS">
      <SkillButton name="Git" href="https://git-scm.com">
        <GitIcon />
      </SkillButton>
      <SkillButton name="Firebase" href="https://firebase.google.com">
        <FirebaseIcon />
      </SkillButton>
      <SkillButton name="Vercel" href="https://vercel.com">
        <VercelIcon />
      </SkillButton>
    </SkillsGrid>
  );
};

export default OthersSkills;
