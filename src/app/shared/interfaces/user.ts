export interface User {
  username: string;
  is_dm: boolean
}

export interface UserRegister {
  username: string;
  password: string;
  is_dm: boolean
}

export interface UserLogin {
  username: string;
  password: string;
}

