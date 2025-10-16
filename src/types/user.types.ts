export interface User {
  email: string;
  name: string;
  stack: string;
}

export interface ProfileResponse {
  status: string;
  user: User;
  timestamp: string;
  fact: string;
}
