import { User } from './User';

export interface Feedback extends Base {
  author: User;
  contents: string;
  score: number;
  version: string; 
}

