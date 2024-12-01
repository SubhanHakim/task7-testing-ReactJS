// __test__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
    it('renders the button with the correct title', () => {
        render(<Button title="Click Me" />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('applies the primary variant class by default', () => {
        render(<Button title="Click Me" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('bg-primary text-white');
    });

    it('applies the secondary variant class when specified', () => {
        render(<Button title="Click Me" variant="secondary" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('bg-transparent border border-primary-dark text-[#515151]');
    });

    it('applies the disabled variant class and disables the button', () => {
        render(<Button title="Click Me" variant="disabled" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('bg-gray-300 text-gray-700 cursor-not-allowed');
        expect(button).toBeDisabled();
    });

    it('calls the onclick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button title="Click Me" onclick={handleClick} />);
        const button = screen.getByText('Click Me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});