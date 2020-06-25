import { Base } from './Base';
import { Which } from './Which';

export interface Vote extends Base {
  userId: string;
  pollId: string;
  which: Which;
}

