export const LOAD_PAGE = 'LOAD_PAGE';

export function loadPage(url) {
  return {
    type: LOAD_PAGE,
    url: url
  };
}
