// __test__/Progress.test.tsx
import { render, screen } from '@testing-library/react';
import Progress from '../components/Progress';

describe('Progress component', () => {
    it('renders the progress title', () => {
        render(<Progress progress={50} title="Progress Title" />);
        const titleElement = screen.getByText('Progress Title');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders the progress value', () => {
        render(<Progress progress={50} title="Progress Title" />);
        const progressElement = screen.getByText('50');
        expect(progressElement).toBeInTheDocument();
    });

    it('renders the progress bar with correct width', () => {
        render(<Progress progress={50} title="Progress Title" />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar).toHaveStyle('width: 50%');
    });
});