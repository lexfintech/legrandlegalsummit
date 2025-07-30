export function identityURLType(
  url: string,
): 'section' | 'internal' | 'external' {
  if (url.startsWith('#')) {
    return 'section';
  } else if (url.startsWith('/')) {
    return 'internal';
  } else {
    return 'external';
  }
}
