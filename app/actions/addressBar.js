export const LOAD_PAGE = 'LOAD_PAGE';
export const FOLLOW_LINK = 'FOLLOW_LINK';

export function loadPage(url) {
  return {
    type: LOAD_PAGE,
    url: url
  };
}

export function followLink(url) {
  return {
    type: FOLLOW_LINK,
    url: url
  };
}
