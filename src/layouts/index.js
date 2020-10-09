import React, { Component } from 'react';
import styles from './index.css';
import router from 'umi/router';

export default class BasicLayout extends Component {
  state = {
    date: '没有'
  }

  componentDidMount() {
    window.addEventListener("message", (event) => {
      console.log('/* ------------------------ */')
      console.log(event, '执行了')
      console.log(this.state)
      console.log('/* ------------------------ */')
      if (this.state) {
        this.setState({
          date: new Date().toString()
        })
      }
      if (!event.data.data) {
        return
      }
      if (event.data.data.includes('haveparams')) {
        const path = event.data.params
        router.push(path);
      }
    }, false);
  };

  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi! {this.state.date}</h1>
        {this.props.children}
      </div>
    );
  }
}
