// Enums for strongly-typed roles and statuses

export type UserRole = "TENANT" | "LANDLORD" | "ADMIN"

export type UserStatus = 'ACTIVE' | "BANNED"


export interface IUserData {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
  role: UserRole;
  profilePhoto: string | null;
  bio: string | null;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}

export interface ApiResponse<T> {
  success: boolean;
  status_code: number;
  message: string;
  data: T;
}

// Specific type alias for this user endpoint response
export type UserDataResponse = ApiResponse<IUserData>;