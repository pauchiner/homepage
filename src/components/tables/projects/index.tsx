import Header from './header';
import Item from './item';
import './styles.css';

export const ProjectsTable = () => {
  return (
    <table class="projects-table">
      <Header />
      <tbody>
        <Item
          year="2024"
          name="Homepage"
          labels={['Astro', 'Preact', 'Vercel']}
          href="https://pauchiner.es"
        />
        <Item
          year="2023"
          name="Cafeteria"
          labels={['React Native', 'Firebase', 'Express']}
        />
        <Item
          year="2023"
          name="ChinerNvim"
          labels={['Lua', 'Neovim', 'Docusaurus']}
          href="https://github.com/pauchiner/ChinerNvim"
        />
        <Item
          year="2023"
          name="Dotfiles"
          labels={['Fish', 'Tmux', 'Nvim']}
          href="https://github.com/pauchiner/dotfiles"
        />
        <Item
          year="2023"
          name="Vitaminados Chips"
          labels={['Astro', 'Tailwind']}
        />
        <Item
          year="2023"
          name="Youtube Music"
          labels={['Electron', 'JavaScript']}
          href="https://github.com/pauchiner/youtube-music"
        />
        <Item
          year="2023"
          name="Networks Webpage"
          labels={['Next.js', 'Chakra UI']}
        />
        <Item
          year="2022"
          name="Pomodoro Timer"
          labels={['Electron', 'React', 'Chakra UI']}
          href="https://github.com/pauchiner/pomodoro-timer"
        />
        <Item
          year="2022"
          name="Text Clock"
          labels={['React Native', 'Native Base']}
          href="https://github.com/pauchiner/text-clock"
        />
        <Item
          year="2022"
          name="Text Clock Js"
          labels={['JavaScript', 'HTML', 'CSS']}
          href="https://pauchiner.github.io/text-clock-js"
        />
        <Item
          year="2022"
          name="Calculator Js"
          labels={['JavaScript', 'HTML', 'CSS']}
          href="https://pauchiner.github.io/calculator-js"
        />
        <Item year="2020" name="ZAP Extractor" labels={['.NET', 'C#']} />
        <Item year="2020" name="DAT Converter" labels={['.NET', 'C#']} />
      </tbody>
    </table>
  );
};

export default ProjectsTable;
