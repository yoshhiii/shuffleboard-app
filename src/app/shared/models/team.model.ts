import { UserModel } from './user.model';

export interface TeamModel {
  id?: number;
  name: string;
  users: UserModel[];
}
