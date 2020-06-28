import { Base } from './Base';
import { User } from './User';
import { Vote } from './Vote';

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
  vote?: Vote;
}

