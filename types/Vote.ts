import { Base } from './Base';
import { Which } from './Which';

export interface Vote extends Base {
  authorId: string;
  pollId: string;
  which: Which;
}

