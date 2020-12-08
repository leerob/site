const visit = require('unist-util-visit');
const sizeOf = require('image-size');

module.exports = (options) => (tree) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    (node) =>
      node.type === 'paragraph' &&
      node.children.some((n) => n.type === 'image'),
    (node) => {
      const imageNode = node.children.find((n) => n.type === 'image');
      console.log(imageNode);

      const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`);

      // Convert original node to next/image
      imageNode.type = 'html';
      imageNode.value = `<Image
  alt={\`${imageNode.alt}\`} 
  src={\`${imageNode.url}\`}
  width={${dimensions.width}}
  height={${dimensions.height}}
/>`;

      node.children = [imageNode];
    }
  );
};
