import React from 'react';
import { Container, NotFoundView, P } from '../components/views/NotFoundView';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { palette } from '../assets/styles/palette';
import { fontSizes } from '../assets/styles/fontSizes';

describe('NotFoundView', () => {
    it('should display error message', () => {
        render(<NotFoundView />);
        const linkElement = screen.getByText("La route n'existe pas");
        expect(linkElement).toBeInTheDocument();
    });
    it('should match P CSS', () => {
        const tree = renderer.create(<P />).toJSON();
        expect(tree).toHaveStyleRule('font-size', '2.6rem');
    });
    it('should match Container CSS', () => {
        const tree = renderer.create(<Container />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('height', '70vh');
        expect(tree).toHaveStyleRule('color', `${palette.white}`);
        expect(tree).toHaveStyleRule('font-size', `${fontSizes.xlarge}`);
        expect(tree).toHaveStyleRule('font-weight', '700');
    });
});
