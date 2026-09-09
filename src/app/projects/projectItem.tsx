interface ProjectItemProps {
  name: string;
}

const ProjectItem = ({name}: ProjectItemProps) => {
  return <div>{name}</div>;
};

export default ProjectItem;
