import React, { Component, PropTypes } from 'react';
import isUrl from 'is-url';
import styles from './AddressBar.css';
import webPageStyles from './WebPage.css';

function addhttp(urlString) {
  if (!/^(?:f|ht)tps?\:\/\//.test(urlString)) {
    return `http://${urlString}`;
  }
  return urlString;
}

class AddressBar extends Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    newTab: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired
  };
  

  constructor(props) {
    super(props);

    let selectedTab = this.props.tabs.selectedTab;
    // this.state = { url: this.props.tabs.tabs[selectedTab].url };
    
    this.onInputChange = this.onInputChange.bind(this);
    this.onNewTab = this.onNewTab.bind(this);
  }

  onInputChange(event) {
    this.setState({ url: event.target.value });
  }


  onFormSubmit(event, loadPage) {
    event.preventDefault();
    let dest = '';
    let input = addhttp(this.state.url);
    if (isUrl(input)) {
      dest = input;
    } else {
      dest = `https://www.google.com/search?q=${encodeURI(this.state.url)}`;
    }
    loadPage(dest, this.props.tabs.selectedTab);
  }

  onBackClick() {
    const webview = document.getElementsByClassName(`webview ${webPageStyles.visible}`).item(0);
    webview.goBack();
  }

  onForwardClick() {
    const webview = document.getElementsByClassName(`webview ${webPageStyles.visible}`).item(0);
    webview.goForward();
  }
  
  onNewTab() {
    this.props.newTab();
  }

  render() {
    const { loadPage } = this.props;
    const { tabs, selectedTab } = this.props.tabs;

    return (
      <form onSubmit={(e) => this.onFormSubmit(e, loadPage)}>
        <div className={`input-group ${styles.inputWrapper}`}>
          <div className="input-group-btn">
            <a
              type="button"
              className="btn btn-default"
              onClick={this.onBackClick}
              >{'<'}</a>
            <a
              type="button"
              className="btn btn-default"
              onClick={this.onForwardClick}
              >{'>'}</a>
            <a
              type="button"
              className="btn btn-default"
              onClick={this.onNewTab}
              >{'+'}</a>
          </div>
          <input
            id="addressBarInput"
            className={`form-control ${styles.input}`}
            type="text"
            value={tabs[selectedTab].url}
            onChange={this.onInputChange}
            />
        </div>
      </form>
    );
  }
}

export default AddressBar;
