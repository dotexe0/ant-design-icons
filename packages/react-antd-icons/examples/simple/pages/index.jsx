import * as React from 'react';
import styles from './index.less';
import { library, Alibaba, Dashboard, DashboardFill } from 'antd-icons/esm';
import AntdIcon from 'react-antd-icons/esm';

library.add(Alibaba, Dashboard, DashboardFill);

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <AntdIcon type={'alibaba'} />
        <AntdIcon type={'dashboard'} />
        <AntdIcon type={'dashboard-fill'} />
        <AntdIcon type={'it will cause error'} />
      </div>
    );
  }
}
