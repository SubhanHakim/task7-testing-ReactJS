import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar component', () => {
    const setup = () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
    };

    it('renders navigation links', () => {
        setup();
        const navLinks = ['Home', 'About Me', 'Gallery', 'Contact Me'];
        navLinks.forEach((link) => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
    });

    it("renders 'Let's Chat' button", () => {
        setup();
        expect(screen.getByText("Let's Chat")).toBeInTheDocument();
    });

    it('renders the brand name', () => {
        setup();
        expect(screen.getByText('Subhan Hakim')).toBeInTheDocument();
    });

    it("renders the brand name as a link to the home page", () => {
        setup();
        expect(screen.getByText('Subhan Hakim')).toHaveAttribute('href', '/');
    });
    it('renders the navigation links as links', () => {
        setup();
        const navLinks = ['Home', 'About Me', 'Gallery', 'Contact Me'];
        navLinks.forEach((link) => {
            expect(screen.getByText(link)).toHaveAttribute('href');
        });
    });
});
