export class User {
  full_name: string;
  role_name: string;
  access_token: string;
  token_type: string;
  expires_in: number;

  constructor( init: Partial<User> ) {
    Object.assign( this, init );
  }
}
