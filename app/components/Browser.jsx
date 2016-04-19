import React, { Component } from 'react';
import AddressBar from '../containers/AddressBarContainer';
import WebPage from '../containers/WebPageContainer';

export default class Browser extends Component {
  render() {
    return (
      <div>
        <AddressBar />
        <WebPage />
      </div>
    );
  }
}
