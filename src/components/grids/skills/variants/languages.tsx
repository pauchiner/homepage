import {SkillButton} from 'components/buttons';
import SkillsGrid from '..';
import {
  CSSIcon,
  CSharpIcon,
  HTMLIcon,
  JavaScriptIcon,
  PythonIcon,
  TypeScriptIcon
} from 'components/icons';

export const LanguagesSkills = () => {
  return (
    <SkillsGrid title="LANGUAGES">
      <SkillButton name="Python" href="https://www.python.org">
        <PythonIcon />
      </SkillButton>
      <SkillButton
        name="HTML"
        href="https://developer.mozilla.org/docs/Web/HTML">
        <HTMLIcon />
      </SkillButton>
      <SkillButton name="CSS" href="https://developer.mozilla.org/docs/Web/CSS">
        <CSSIcon />
      </SkillButton>
      <SkillButton
        name="JavaScript"
        href="https://developer.mozilla.org/docs/Web/JavaScript">
        <JavaScriptIcon />
      </SkillButton>
      <SkillButton name="TypeScript" href="https://www.typescriptlang.org">
        <TypeScriptIcon />
      </SkillButton>
      <SkillButton
        name="C#"
        href="https://dotnet.microsoft.com/languages/csharp">
        <CSharpIcon />
      </SkillButton>
    </SkillsGrid>
  );
};
