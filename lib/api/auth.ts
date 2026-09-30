import { apiFetch } from './client';

export type AuthUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export type LoginResponse = {
  message: string;
  access_token: string;
  user: AuthUser;
};

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  return apiFetch<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

export async function getCurrentUser(
  accessToken: string,
): Promise<AuthUser> {
  return apiFetch<AuthUser>('/auth/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}