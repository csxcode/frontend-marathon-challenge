export interface Authentication {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface User {
  user_name: string;
  full_name: string;
  role_name: string;
}
