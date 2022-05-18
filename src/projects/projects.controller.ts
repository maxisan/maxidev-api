import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  projectService: ProjectsService;

  constructor() {
    this.projectService = new ProjectsService();
  }

  @Get()
  getAll() {
    return this.projectService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.projectService.findById(id);
  }

  @Post()
  createProject(@Body() body: CreateProjectDto) {
    return this.projectService.create(body);
  }
}
