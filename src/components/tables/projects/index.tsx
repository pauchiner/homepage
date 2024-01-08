import Header from './header';
import Item from './item';
import './styles.css';

export const ProjectsTable = () => {
  return (
    <table class="projects-table">
      <Header />
      <tbody>
        <Item
          year="2023 — 2024"
          name="Homepage"
          linkType="github"
          labels={['Astro', 'Preact', 'Vercel']}
          href="https://github.com/pauchiner/homepage"
        />
        <Item
          year="2022 — 2023"
          name="Cafeteria"
          linkType="no-link"
          labels={['React Native', 'Firebase', 'Express']}
        />
        <Item
          year="2021 - 2023"
          name="ChinerNvim"
          linkType="github"
          labels={['Lua', 'Neovim', 'Docusaurus']}
          href="https://github.com/pauchiner/ChinerNvim"
        />
        <Item
          year="SEP 2023"
          linkType="github"
          name="Dotfiles"
          labels={['Fish', 'Tmux', 'Nvim']}
          href="https://github.com/pauchiner/dotfiles"
        />
        <Item
          year="AUG 2023"
          linkType="no-link"
          name="Vitaminados Chips"
          labels={['Astro', 'Tailwind']}
        />
        <Item
          year="MAY 2023"
          linkType="github"
          name="Youtube Music"
          labels={['Electron', 'JavaScript']}
          href="https://github.com/pauchiner/youtube-music"
        />
        <Item
          year="MAY 2023"
          linkType="no-link"
          name="Networks Webpage"
          labels={['Next.js', 'Chakra UI']}
        />
        <Item
          year="OCT 2022"
          linkType="github"
          name="Pomodoro Timer"
          labels={['Electron', 'React', 'Chakra UI']}
          href="https://github.com/pauchiner/pomodoro-timer"
        />
        <Item
          year="JUN 2022"
          linkType="github"
          name="Text Clock"
          labels={['React Native', 'Native Base']}
          href="https://github.com/pauchiner/text-clock"
        />
        <Item
          year="MAY 2022"
          linkName="Preview"
          linkType="other"
          name="Text Clock Js"
          labels={['JavaScript', 'HTML', 'CSS']}
          href="https://pauchiner.github.io/text-clock-js"
        />
        <Item
          year="APR 2022"
          linkName="Preview"
          linkType="other"
          name="Calculator Js"
          labels={['JavaScript', 'HTML', 'CSS']}
          href="https://pauchiner.github.io/calculator-js"
        />
        <Item
          year="MAY 2020"
          linkType="no-link"
          name="ZAP Extractor"
          labels={['.NET', 'C#']}
        />
        <Item
          year="APR 2020"
          linkType="no-link"
          name="DAT Converter"
          labels={['.NET', 'C#']}
        />
      </tbody>
    </table>
  );
};

export default ProjectsTable;
