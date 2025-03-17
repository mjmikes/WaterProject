import { useEffect, useState } from 'react';
import { Project } from './types/Project';

function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        'https://localhost:5000/api/Water/AllProjects'
      );
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Water Projects</h2>
      <br />
      {projects.map((p) => (
        <div>
          <p>{p.projectName}</p>
          <ul>
            <li>Project Type: {p.projectType}</li>
            <li>Regional Program {p.projectPhase}</li>
            <li>Impact: {p.projectFunctionalityStatus} Individuals Served</li>
            <li>Phase: {p.projectPhase}</li>
            <li>Project Status: {p.projectFunctionalityStatus}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
