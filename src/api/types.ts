export interface IUser {
  id: string;
  name: string;
  email: string;
  otp_is_enabled: string;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  user: IUser;
}
