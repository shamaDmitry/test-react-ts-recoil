export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserState {
  users: IUser[] | null;
  loading: boolean;
  error: string | null;
}
