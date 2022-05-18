import { IsEnum, IsString, IsUrl } from 'class-validator';
import { CategoriesEnum } from '../types';

export class CreateProjectDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsUrl()
  imageUrl: string;
  @IsUrl()
  repositoryUrl: string;
  @IsUrl()
  deployUrl: string;
  @IsEnum(CategoriesEnum)
  category: CategoriesEnum;
}
