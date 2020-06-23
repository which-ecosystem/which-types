import { Base } from './Base';

export type Gender = 'male' | 'female';

export interface User extends Base {
  username: string;
  avatarUrl?: string;
  location?: string;
  email: string;
  dateOfBirth?: Date;
  gender?: Gender;
}

