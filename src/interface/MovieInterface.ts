import { Actor } from "./ActorInterface";
import { Genre } from "./GenreInterface";

export interface MovieInterface {
  id: number;
  title: string;
  description: string;
  poster: string;
  trailer: string;
  release_date: string;
  average_rating: number;
  created_at: string;
  updated_at: string;
  genres: Genre[];
  actors: Actor[];
}
