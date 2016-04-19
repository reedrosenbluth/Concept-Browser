import React, { Component, PropTypes } from 'react';
import styles from './WebPage.css';

export default class WebPage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { url: '' };
  }

  render() {
    const { url } = this.props;

    return (
      <div>
        <webview
          className={styles.webview}
          src={url}
        ></webview>
      </div>
    );
  }
}
