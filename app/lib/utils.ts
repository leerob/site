export function isActive(href: string, currentPath: string): boolean {
  if (href === currentPath) {
    return true;
  }
  if (
    href.search('blog') > 0 &&
    (currentPath.search('blog') > 0 || currentPath.search('tag') > 0)
  ) {
    return true;
  }
  if (href.search('snippets') > 0 && currentPath.search('snippets') > 0) {
    return true;
  }

  return false;
}

export function extractLanguage(filename: string) {
  const extension = filename.split('.').pop();
  if (
    extension === 'js' ||
    extension === 'ts' ||
    extension === 'jsx' ||
    extension === 'tsx'
  ) {
    return 'tsx';
  }
  if (extension === 'sh') {
    return 'shell';
  }
  return 'typescript';
}
