import { LOAD_PAGE } from '../actions/addressBar';

export default function loadPage(state = 'http://google.com', action) {
  switch (action.type) {
    case LOAD_PAGE:
      return action.url;
    default:
      return state;
  }
}
