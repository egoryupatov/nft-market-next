import { IUser } from "@/types/user";

export interface IItem {
  id: number;
  name: string;
  image: string;
  likes: number;
  price: number;
  user: IUser;
}
