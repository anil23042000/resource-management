import Sidebar from "../../components/sidebar";
import ProjectResourceList from "../../components/ProjectResourceList";
import "./projectResource.scss";

const ProjectResource = () => {
  return (
    <div className="projectResourceContainer">
      <div className="leftConatiner">
        <Sidebar tabActive={"projectResource"} />
      </div>
      <div className="rigthConatiner">
        <ProjectResourceList />
      </div>
    </div>
  );
};

export default ProjectResource;
