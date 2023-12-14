import {SkillsGrid} from 'components/grids/skills';
import {SkillButton} from 'components/buttons';
import {
  AstroIcon,
  ElectronIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  ReactNativeIcon,
  ReduxIcon
} from 'components/icons';

export const FrameworksSkills = () => {
  return (
    <SkillsGrid title="FRAMEWORKS">
      <SkillButton name="Node.js" href="https://nodejs.org">
        <NodeIcon />
      </SkillButton>
      <SkillButton name="React" href="https://react.dev">
        <ReactIcon />
      </SkillButton>
      <SkillButton name="React Native" href="https://reactnative.dev">
        <ReactNativeIcon />
      </SkillButton>
      <SkillButton name="Redux" href="https://redux.js.org">
        <ReduxIcon />
      </SkillButton>
      <SkillButton name="Electron" href="https://www.electronjs.org">
        <ElectronIcon />
      </SkillButton>
      <SkillButton name="Astro" href="https://astro.build">
        <AstroIcon />
      </SkillButton>
      <SkillButton name="Next.js" href="https://nextjs.org">
        <NextIcon />
      </SkillButton>
    </SkillsGrid>
  );
};

export default FrameworksSkills;
