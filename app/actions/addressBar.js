export const LOAD_PAGE = 'LOAD_PAGE';
export const NEW_TAB = 'NEW_TAB';

export function loadPage(url, tab) {
  return {
    type: LOAD_PAGE,
    url: url,
    index: tab
  };
}

export function newTab() {
  return {
    type: NEW_TAB
  };
}
