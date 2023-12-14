import { ParsedUrlQuery } from 'querystring';


export interface IParams extends ParsedUrlQuery {
  slug: string;
}
