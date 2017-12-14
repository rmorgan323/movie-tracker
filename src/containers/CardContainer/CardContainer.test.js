import { CardContainer } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import mockMovie from '../../data/mockMovie';

describe('CardContainer tests', () => {
    it('Should exist', () => {
        const mockProps = { movies: [mockMovie] }
        console.log(mockProps)
        const renderedCardContainer = shallow(<CardContainer props={mockProps}/>);
        console.log(renderedCardContainer.debug())
    })

    it('Should match the snapshot', () => {

    })

    it('Should display cards from props', () => {

    })
})