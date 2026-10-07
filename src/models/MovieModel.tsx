import type {IMovie} from "./IMovie.tsx";

export interface MovieModel {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}