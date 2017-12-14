import { CardContainer } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';

describe('CardContainer tests', () => {
    it('Should exist', () => {
        const mockProps = { movies: [{}] }
        const renderedCardContainer = shallow(<CardContainer props={mockProps}/>);
    })

    it('Should match the snapshot', () => {

    })

    it('Should display cards from props', () => {

    })
})