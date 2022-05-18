import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from './projects.repository';
import { IProject } from './types';
@Injectable()
export class ProjectsService {
  projectsRepo: ProjectsRepository;

  constructor() {
    this.projectsRepo = new ProjectsRepository();
  }

  findById(id: string) {
    return this.projectsRepo.findById(id);
  }

  findAll() {
    return this.projectsRepo.findAll();
  }

  create(project: IProject) {
    return this.projectsRepo.create(project);
  }
}
