import Base from './Base';

export type Gender = 'male' | 'female';

export default interface User extends Base {
  username: string;
  avatarUrl?: string;
  location?: string;
  dateOfBirth?: Date;
  gender?: Gender;
}

