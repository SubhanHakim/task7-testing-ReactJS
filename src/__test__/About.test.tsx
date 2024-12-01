// __test__/About.test.tsx
import { render, screen } from '@testing-library/react';
import About from '../components/sections/About';

describe('About component', () => {
    it('renders the About Me heading', () => {
        render(<About />);
        const heading = screen.getByText('About Me');
        expect(heading).toBeInTheDocument();
    });

    it('renders the profile image', () => {
        render(<About />);
        const profileImage = screen.getByAltText('Subhan Hakim');
        expect(profileImage).toBeInTheDocument();
        expect(profileImage).toHaveAttribute('src', 'test-file-stub');
    });

    it('renders the experience text', () => {
        render(<About />);
        const experienceText = screen.getByText((content, element) => {
            return element?.textContent === "1 Year’s Experience on Front End Dev and UI/UX Designer";
        });
        expect(experienceText).toBeInTheDocument();
    });

    it('renders the introduction text', () => {
        render(<About />);
        const introductionText = screen.getByText((content, element) => {
            return element?.textContent === "Hello there! I'm Subhan Nur Iqbal Hakim. I specialize in UI/UX design and Front End Dev, and I'm deeply passionate and committed to my craft.";
        });
        expect(introductionText).toBeInTheDocument();
    });

    it('renders the Main Skills button', () => {
        render(<About />);
        const mainSkillsButton = screen.getByText('Main Skills');
        expect(mainSkillsButton).toBeInTheDocument();
    });

    it('renders the Certificates button', () => {
        render(<About />);
        const certificatesButton = screen.getByText('Certificates');
        expect(certificatesButton).toBeInTheDocument();
    });

    it('renders the Education button', () => {
        render(<About />);
        const educationButton = screen.getByText('Education');
        expect(educationButton).toBeInTheDocument();
    });

    it('renders the progress bars with correct titles and values', () => {
        render(<About />);
        const progressBars = [
            { title: 'Tailwind CSS', value: '100' },
            { title: 'React JS', value: '85' },
            { title: 'UI/UX Designer', value: '90' },
            { title: 'Node JS', value: '50' },
            { title: 'Monggod DB', value: '70' },
            { title: 'Next JS', value: '75' },
        ];

        progressBars.forEach(({ title, value }) => {
            expect(screen.getByText(title)).toBeInTheDocument();
            expect(screen.getByText(value)).toBeInTheDocument();
        });
    });
});