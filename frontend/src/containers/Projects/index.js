import Sidebar from "../../components/sidebar";
import ProjectsList from "../../components/ProjectsList";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="leftConatiner">
        <Sidebar tabActive={"projects"} />
      </div>
      <div className="rigthConatiner">
        <ProjectsList />
      </div>
    </div>
  );
};

export default Projects;
