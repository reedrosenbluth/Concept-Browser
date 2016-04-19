import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WebPage from '../components/WebPage';
import * as WebPageActions from '../actions/webPage';

function mapStateToProps(state) {
  return {
    url: state.url
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(WebPageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WebPage);
