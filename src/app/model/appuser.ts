import {Ward} from "./ward";

export interface AppUser {
  id: number;
  username?: string;
  password?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  ward?: Ward;
  roles?: string[];
}
