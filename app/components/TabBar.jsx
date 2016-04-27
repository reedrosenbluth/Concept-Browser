import React, { Component, PropTypes } from 'react';
import styles from './TabBar.css';

export default class TabBar extends Component {
  static propTypes = {
    switchTab: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired
  };
  
  onTabClick(index) {
    this.props.switchTab(index);
  }
  
  render() {
    const { selectedTab, tabs } = this.props.tabs;
    
    let tabList = tabs.map((tab, i) => {
      var selected = selectedTab === i ? styles.selected : '';
      return <a
        key={i}
        className={`list-group-item ${styles.tab} ${selected}`}
        onClick={() => this.onTabClick(i)}
        >🍥</a>;
    });
    
    return (
      <ul className="list-group">
        {tabList}
      </ul>
    );
  }
}
