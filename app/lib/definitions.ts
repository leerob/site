import { ParsedUrlQuery } from 'querystring';

interface ISeoProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  tags?: string[];
}

export interface IContainerPropsWithChildren extends ISeoProps {
  children: React.ReactNode;
}

export interface IParams extends ParsedUrlQuery {
  slug: string;
}
