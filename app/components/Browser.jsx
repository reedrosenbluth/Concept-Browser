import React, { Component } from 'react';
import AddressBar from '../containers/AddressBarContainer';
import TabBar from '../containers/TabBarContainer';
import WebPage from '../containers/WebPageContainer';
import styles from './Browser.css';

export default class Browser extends Component {
  render() {
    return (
      <div>
        <AddressBar />
        <div className={styles.main}>
          <div className={styles.tabs}>
            <TabBar />
          </div>
          <div className={styles.webpage}>
            <WebPage />
          </div>
        </div>
      </div>
    );
  }
}
