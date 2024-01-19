import {
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GoogleCloudIcon,
  TailwindIcon,
  VercelIcon
} from 'components/icons';
import {SkillButton} from 'components/buttons';
import SkillsGrid from '..';

export const OthersSkills = () => {
  return (
    <SkillsGrid title="OTHER TOOLS">
      <SkillButton name="Git" href="https://git-scm.com">
        <GitIcon />
      </SkillButton>
      <SkillButton name="Figma" href="https://figma.com">
        <FigmaIcon />
      </SkillButton>
      <SkillButton name="Tailwind" href="https://tailwindcss.com">
        <TailwindIcon />
      </SkillButton>
      <SkillButton name="Firebase" href="https://firebase.google.com">
        <FirebaseIcon />
      </SkillButton>
      <SkillButton name="Google Cloud" href="https://cloud.google.com">
        <GoogleCloudIcon />
      </SkillButton>
      <SkillButton name="Vercel" href="https://vercel.com">
        <VercelIcon />
      </SkillButton>
    </SkillsGrid>
  );
};

export default OthersSkills;
