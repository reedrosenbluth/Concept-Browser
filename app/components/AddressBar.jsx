import React, { Component, PropTypes } from 'react';
import isUrl from 'is-url';
import styles from './AddressBar.css';

function addhttp(urlString) {
  if (!/^(?:f|ht)tps?\:\/\//.test(urlString)) {
    return `http://${urlString}`;
  }
  return urlString;
}

class AddressBar extends Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { url: this.props.url };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ url: event.target.value });
  }


  onFormSubmit(event, loadPage) {
    console.log('enter');
    event.preventDefault();
    let dest = '';
    let input = addhttp(this.state.url);
    if (isUrl(input)) {
      dest = input;
    } else {
      dest = `https://www.google.com/search?q=${encodeURI(this.state.url)}`;
    }
    loadPage(dest);
  }

  onBackClick() {
    console.log('back');
  }

  onForwardClick() {
    console.log('forward');
  }

  render() {
    const { loadPage } = this.props;

    return (
      <form onSubmit={(e) => this.onFormSubmit(e, loadPage)}>
        <div className={`input-group ${styles.inputWrapper}`}>
          <div className="input-group-btn">
            <button
              type="button"
              className="btn btn-default"
              onClick={this.onBackClick}
            >{'<'}</button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.onForwardClick}
            >{'>'}</button>
          </div>
          <input
            className={`form-control ${styles.input}`}
            type="text"
            value={this.state.url}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    );
  }
}

export default AddressBar;
