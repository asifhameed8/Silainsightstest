import { render, screen } from '@testing-library/react';
import ImageComponent from '.';

describe('ImageComponent', () => {
    it('renders the image with the correct source, width, height, and alt text', () => {
        const src = 'https://example.com/image.jpg';
        const width = 300;
        const height = 200;
        const alt = 'Example image';
        render(<ImageComponent src={src} width={width} height={height} alt={alt} />);

        // Assert that the Image component is rendered
        const image = screen.getByRole('img', { name: alt });
        expect(image).toBeInTheDocument();

        // Assert that the Image component has the correct source, width, and height
        expect(image).toHaveAttribute('src', src);
        expect(image).toHaveAttribute('width', `${width}`);
        expect(image).toHaveAttribute('height', `${height}`);
    });

    it('renders a placeholder image when blurEffect is true', () => {
        const src = 'https://example.com/image.jpg';
        const blurEffect = true;
        render(<ImageComponent src={src} blurEffect={blurEffect} />);

        // Assert that the Image component is rendered
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();

        // Assert that the Image component has the correct placeholder source
        expect(image).toHaveAttribute('src', expect.stringContaining('/_next/image?url='));
    });

    it('renders the image with priority when priority is true', () => {
        const src = 'https://example.com/image.jpg';
        const priority = true;
        render(<ImageComponent src={src} priority={priority} />);

        // Assert that the Image component is rendered
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();

        // Assert that the Image component has the "loading" attribute set to "eager"
        expect(image).toHaveAttribute('loading', 'eager');
    });
});
