import { type SchemaTypeDefinition } from 'sanity';
import imageWithAlt from './schemas/imageWithAlt';
import blockContent from './schemas/blockContent';
import tag from './schemas/tag';
import post from './schemas/post';
import snippet from './schemas/snippet';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, snippet, tag, blockContent, imageWithAlt]
};
