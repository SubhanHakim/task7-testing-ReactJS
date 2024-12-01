// __test__/Arrow.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Arrow from '../components/Arrows';

describe('Arrow component', () => {
    it('renders the left arrow', () => {
        render(<Arrow left onClick={() => {}} />);
        const arrow = screen.getByTestId('arrow');
        expect(arrow).toBeInTheDocument();
        expect(arrow).toHaveClass('left-2');
    });

    it('renders the right arrow', () => {
        render(<Arrow onClick={() => {}} />);
        const arrow = screen.getByTestId('arrow');
        expect(arrow).toBeInTheDocument();
        expect(arrow).toHaveClass('right-2');
    });

    it('applies the disabled class and prevents click when disabled', () => {
        const handleClick = jest.fn();
        render(<Arrow onClick={handleClick} disabled />);
        const arrow = screen.getByTestId('arrow');
        expect(arrow).toHaveClass('fill-grayText cursor-not-allowed');
        fireEvent.click(arrow);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('calls the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Arrow onClick={handleClick} />);
        const arrow = screen.getByTestId('arrow');
        fireEvent.click(arrow);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});