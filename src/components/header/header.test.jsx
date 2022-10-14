import { cleanup, render, screen } from '@testing-library/react';
import Header from './header.component';

afterEach(cleanup);
describe('Header Component', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<Header />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should contain the title POKEDEX', () => {
        render(<Header />);

        screen.getByText('POKEDEX');
    });
});
