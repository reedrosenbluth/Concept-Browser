import React, { Component, PropTypes } from 'react';
import WebPage from '../containers/WebPageContainer';

export default class WebPages extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired
  }
  
  render() {
    const { selectedTab, tabs } = this.props.tabs;
    
    let webviews = tabs.map((tab, i) => {
      return <WebPage
        key={i}
        tab={i}
        />
    });
    
    return (
      <div>
        {webviews}
      </div>
    )
  }
}
