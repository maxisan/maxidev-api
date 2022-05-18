export enum CategoriesEnum {
  Lab = 'lab',
  Challenge = 'challenge',
  Job = 'job',
}

export interface IProject {
  name: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  deployUrl: string;
  category: CategoriesEnum;
}
