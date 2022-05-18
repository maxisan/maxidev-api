import { CreateProjectDto } from './dtos/create-project.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get()
  getAll() {
    return 'getAll';
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    console.log(id);
    return 'getById';
  }

  @Post()
  createProject(@Body() body: CreateProjectDto) {
    console.log(body);
    return 'postProject';
  }
}
