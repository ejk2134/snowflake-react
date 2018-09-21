import React from 'react';
import { shallow } from 'enzyme';
import { OccasionList } from '../../components/OccasionList';
import occasions from '../fixtures/occasions';

expect('should render list of Occasions', () => {
    const wrapper = shallow(<OccasionList occasions={occasions} />);
    expect(wrapper).toMatchSnapshot();
});