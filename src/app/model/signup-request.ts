import {Ward} from "./ward";

export interface SignupRequest {
  username: string;
  password: string;
  name: string;
  phoneNumber: string;
  address: string;
  ward?: number;
  email?: string;
}
