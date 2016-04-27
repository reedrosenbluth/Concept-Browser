import { LOAD_PAGE, NEW_TAB } from '../actions/addressBar';
import { SWITCH_TAB } from '../actions/tabBar';

const initState = {
  selectedTab: 0,
  tabs: [{ url: 'http://google.com' }, { url: 'http://reedrosenbluth.com' }]
};

export default function loadPage(state = initState, action) {
  switch (action.type) {
    case LOAD_PAGE:
      return Object.assign({}, state, {
        tabs: state.tabs.map((tab, index) => {
          if (index === action.index) {
            return Object.assign({}, tab, {
              url: action.url
            })
          }
          
          return tab;
        })
      });
    case NEW_TAB:
      return Object.assign({}, state, {
        tabs: [
          ...state.tabs,
          {
            url: 'http://google.com'
          }
        ]
      })
    case SWITCH_TAB:
      return Object.assign({}, state, {
        selectedTab: action.index
      });
    default:
      return state;
  }
}
