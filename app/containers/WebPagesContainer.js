import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WebPages from '../components/WebPages';
import * as WebPageActions from '../actions/addressBar';

function mapStateToProps(state) {
  return {
    selectedTab: state.selectedTab,
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(WebPageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WebPages);
