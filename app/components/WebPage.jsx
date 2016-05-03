import React, { Component, PropTypes } from 'react';
import url from 'url';
import styles from './WebPage.css';

export default class WebPage extends Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired,
    tab: PropTypes.number.isRequired
  };
  
  componentDidMount() {
    const webview = document.getElementById(`webview_${this.props.tab}`);
    const addressBar = document.getElementById('addressBarInput');
    
    webview.addEventListener('did-finish-load', (event) => {
      let urlString = webview.getURL();
      let host = url.parse(urlString).host;
      let path = url.parse(urlString).path;
      
      // addressBar.value = urlString;
      this.props.loadPage(urlString, this.props.tab);
      
      if (host === 'thepiratebay.se' && path.includes('/torrent/')) {
        let contents = webview.getWebContents();
        console.log(contents);
      }
    });
  }

  render() {
    const { selectedTab, tabs } = this.props.tabs;
    let visible = (selectedTab === this.props.tab) ? styles.visible : styles.hidden;
    
    return (
      <webview
        id={`webview_${this.props.tab}`}
        className={`${styles.webview} webview ${visible}`}
        src='http://google.com'
        ></webview>
    );
  }
}
