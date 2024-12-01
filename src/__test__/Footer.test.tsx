// __test__/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
    it('renders the footer', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });

    it('renders the brand name', () => {
        render(<Footer />);
        const brandName = screen.getByText('Subhan Hakim');
        expect(brandName).toBeInTheDocument();
    });

    it('renders the copyright text', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/© 2024 Subhan Hakim, Inc. All rights reserved./);
        expect(copyrightText).toBeInTheDocument();
    });

    it('renders the "Follow Us" text', () => {
        render(<Footer />);
        const followUsText = screen.getByText('Follow Us :');
        expect(followUsText).toBeInTheDocument();
    });

    it('renders the social media icons', () => {
        render(<Footer />);
        const facebookIcon = screen.getByTestId('facebook-icon');
        const githubIcon = screen.getByTestId('github-icon');
        const linkedinIcon = screen.getByTestId('linkedin-icon');
        expect(facebookIcon).toBeInTheDocument();
        expect(githubIcon).toBeInTheDocument();
        expect(linkedinIcon).toBeInTheDocument();
    });
});