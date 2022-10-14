import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import FilterSection, { SortButton } from './filter-section.component';

const mockHandlerClick = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

afterEach(cleanup);
describe('SortButton Component', () => {
    it('should have a text value', () => {
        const sortvalue = 'A-Z';
        render(<SortButton>{sortvalue}</SortButton>);

        screen.getByText(sortvalue);
    });

    it('should run the onClick event', () => {
        const sortvalue = 'A-Z';
        render(<SortButton onClick={mockHandlerClick}>{sortvalue}</SortButton>);

        const button = screen.getByText(sortvalue);
        fireEvent.click(button);

        expect(mockHandlerClick.mock.calls).toHaveLength(1);
    });
});

describe('FilterSection Component', () => {
    it('should render 4 buttons', () => {
        render(<FilterSection />);

        const buttons = screen.getAllByTestId('sort-button');
        expect(buttons.length).toBe(4);
    });
});
