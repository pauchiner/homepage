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
          link="Github"
          labels={['Astro', 'Preact']}
          href="https://github.com/pauchiner/homepage"
        />
        <Item
          year="2022"
          link="Github"
          name="Pomodoro Timer"
          labels={['Electron', 'React']}
          href="https://github.com/pauchiner/pomodoro-timer"
        />
      </tbody>
    </table>
  );
};

export default ProjectsTable;
