import { Base } from './Base';
import { User } from './User';
import { Which } from './User';

export interface ImageData {
  url: string;
  votes: number;
}

export interface Poll extends Base {
  author: User;
  contents: {
    left: ImageData;
    right: ImageData;
  };
  userChoice?: Which;
}

