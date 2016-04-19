import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddressBar from '../components/AddressBar';
import * as AddressBarActions from '../actions/addressBar';

function mapStateToProps(state) {
  return {
    url: state.url
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AddressBarActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBar);
