import React, { Component, PropTypes } from 'react';
import url from 'url';
import styles from './WebPage.css';

export default class WebPage extends Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { url: '' };
  }

  componentDidMount() {
    const webview = document.getElementById('webview');
    const addressBar = document.getElementById('addressBarInput');
    
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
  }

  render() {
    const { url } = this.props;

    return (
      <div>
        <webview
          id="webview"
          className={styles.webview}
          src={url}
        ></webview>
      </div>
    );
  }
}
