const ERR = Symbol('ERR');
type Err = {
  [ERR]: true;
  error: unknown;
  type?: ErrTypes;
};

/** Optional addition if you want to handle errors differently based on their type */
type ErrTypes = 'internet' | 'fileSystem' | 'badInput';

export function isErr(x: unknown): x is Err {
  return typeof x === 'object' && x != null && ERR in x;
}

export function Err(message: string, type?: string) {
  return { [ERR]: true, error: message, type: type };
}
