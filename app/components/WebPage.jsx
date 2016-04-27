import React, { Component, PropTypes } from 'react';
import url from 'url';
import styles from './WebPage.css';

function addListeners() {
  const webviews = [].slice.call(document.getElementsByClassName('webview'));
  const addressBar = document.getElementById('addressBarInput');
  
  webviews.map((webview, i) => {
    webview.addEventListener('did-finish-load', (event) => {
      let urlString = webview.getURL();
      let host = url.parse(urlString).host;
      let path = url.parse(urlString).path;
      
      addressBar.value = urlString;
      
      if (host === 'thepiratebay.se' && path.includes('/torrent/')) {
        let contents = webview.getWebContents();
        console.log(contents);
      }
    });
  });
}

export default class WebPage extends Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired
  };
  
  
  componentDidMount() {
    addListeners();
  }

  componentDidUpdate() {
    addListeners();
  }

  render() {
    const { selectedTab, tabs } = this.props.tabs;
    
    let webviews = tabs.map((tab, i) => {
      let visible = (selectedTab === i) ? styles.visible : styles.hidden;
      return <webview
        id="webview"
        key={i}
        className={`${styles.webview} webview ${visible}`}
        src={tabs[i].url}
        ></webview>
    });
    
    return (
      <div className={styles.webviewContainer}>
        {webviews}
      </div>
    );
  }
}
