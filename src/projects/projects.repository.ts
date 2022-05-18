import { IProject } from './types';
import { collection, getDocs, doc, addDoc } from 'firebase/firestore/lite';
import db from '../db';

export class ProjectsRepository {
  projectsCol = collection(db, 'projects');

  async findById(id: string) {
    const project = doc(this.projectsCol, id);
    return project;
  }

  async findAll() {
    const allProjects = await getDocs(this.projectsCol);
    const projectsList = allProjects.docs.map((doc) => doc.data());
    return projectsList;
  }

  async create(project: IProject) {
    const newProject = await addDoc(this.projectsCol, project);
    return 'Project created with id: ' + newProject.id;
  }
}
