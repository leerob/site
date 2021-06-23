/**
 * Patch that makes Preact skip noscript contents from "next/image" on the client only
 */
import { options } from 'preact';

export const patchPreact = () => {
  const CLIENT = typeof document !== 'undefined';

  const old = options.vnode;
  options.vnode = (vnode) => {
    if (vnode.type === 'noscript' && CLIENT) {
      vnode.props.children = null;
    }
    if (old) old(vnode);
  };
};
