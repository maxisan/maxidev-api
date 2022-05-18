import { CategoriesEnum } from '../types';

export class CreateProjectDto {
  name: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  deployUrl: string;
  category: CategoriesEnum;
}
