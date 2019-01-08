import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { action } from '../../redux/actions/test.actions';
import * as s from './test1.less';

interface IProps {
  action: () => void;
}

export class Test extends React.Component<IProps> {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return (
      <div className={s.link}>
        Text
        <Link to="/">Hello 1</Link>
      </div>
    );
  }
}

const TestContainer = connect(
  null,
  { action },
)(Test);

export { TestContainer };
