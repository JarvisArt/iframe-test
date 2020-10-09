import React, { PureComponent } from 'react';
import styles from './index.css';
import { connect } from 'dva';
import { Form, Button } from 'antd';

class A extends PureComponent {

  change = () => {
    this.props.dispatch({
      type: 'global/fetchTableData',
    })
  };

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            <p>A</p>
            <Button type="primary" onClick={this.change}>Primary</Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(({ global }) => ({global}))(Form.create()(A));
