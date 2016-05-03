import React, { Component } from 'react';
import AddressBar from '../containers/AddressBarContainer';
import TabBar from '../containers/TabBarContainer';
import WebPage from '../containers/WebPageContainer';
import WebPages from '../containers/WebPagesContainer';
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
            <WebPages />
          </div>
        </div>
      </div>
    );
  }
}
