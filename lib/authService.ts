import { api } from './api';

export interface RegisterPayload {
  name: string;
  tin_number: string;
  nida: string;
  phone: string;
  location: string;
  role: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    phone: string;
    role: string;
  };
}

export async function register(data: RegisterPayload): Promise<AuthResponse> {
  return await api<AuthResponse>('register', 'POST', data);
}

