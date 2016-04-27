import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TabBar from '../components/TabBar';
import * as TabBarActions from '../actions/tabBar';

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TabBarActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
