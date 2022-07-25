import { ActionConstent } from "constants/store";

export interface ActionType {
  type: ActionConstent
  payload?: any
}

export interface UserType {
  id: Number
  name?: String
  height?: String
  mass?: String
  hair_color?: String
  skin_color?: String
  eye_color?: String
  birth_year?: String
  gender?: String
  homeworld?: String
  films?: String[]
  species?: String[]
  vehicles?: String[]
  starships?: String[]
  created?: String
  edited?: String
  url?: String
}

export interface Film {
  id: Number
  title?: String
  episode_id?: Number
  opening_crawl?: string
  director?: String
  producer?: String
  release_date?: String
  characters?: String[]
  planets?: String[]
  starships?: String[]
  vehicles?: String[]
  species?: String[]
  created?: String
  edited?: String
  url?: String
}

export interface InitialStateType {
  users: UserType[]
  selectedUser: UserType
  selectedFilm: Film
}