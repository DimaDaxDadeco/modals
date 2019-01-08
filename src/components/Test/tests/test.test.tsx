import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Test } from '../test1';
import * as s from '../test1.less';

describe('<Test />', () => {
  it('should render', () => {
    const wrapper = shallow(<Test action={jest.fn} />);

    const actual = wrapper.getElement();
    const expected = (
      <div className={s.link}>
        Text
        <Link to="/">Hello 1</Link>
      </div>
    );

    expect(actual).toEqual(expected);
  });
});
