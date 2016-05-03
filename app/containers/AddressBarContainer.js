import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddressBar from '../components/AddressBar';
import * as AddressBarActions from '../actions/addressBar';
import * as TabBarActions from '../actions/tabBar';

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...AddressBarActions, ...TabBarActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBar);
