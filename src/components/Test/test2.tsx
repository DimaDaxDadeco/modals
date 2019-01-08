import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import { closeModal, openModal } from '../../redux/actions/modals.actions';
import { action } from '../../redux/actions/test.actions';
import { isModalOpen } from '../../redux/selectors/modals.selectors';
import { IState } from '../../redux/state/state.d';

interface IProps {
  action: () => void;
  openModal: () => void;
  isModalOpen?: boolean;
  closeModal: () => void;
}

class Test extends React.Component<IProps> {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return (
      <div>
        <Link to="/test">Hello 2</Link>
        <button onClick={this.props.openModal}>Open Modal</button>
        {this.props.isModalOpen && <div>Modal <button onClick={this.props.closeModal}>Close Modal</button></div>}
      </div>
    );
  }
}

const TestContainer2 = connect(
  (state: IState) => ({
    isModalOpen: isModalOpen(state, 'TEST_MODAL'),
  }),
  (dispatch: Dispatch) => ({
    action: () => dispatch(action()),
    closeModal: () => dispatch(closeModal('TEST_MODAL')),
    openModal: () => dispatch(openModal('TEST_MODAL')),
  }),
)(Test);

export { TestContainer2 };
