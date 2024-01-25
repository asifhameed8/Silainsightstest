import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
    it('renders the button text', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('calls the onClick function when clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('renders the correct variant and color styles', () => {
        const { getByText } = render(
            <Button variant="outline" color="success">
                Click me
            </Button>
        );
        const button = getByText('Click me');
        expect(button).toHaveClass('border-success');
        expect(button).toHaveClass('text-success');
    });

    it('renders the correct size styles', () => {
        const { getByText } = render(<Button size="lg">Click me</Button>);
        const button = getByText('Click me');
        expect(button).toHaveClass('py-2');
        expect(button).toHaveClass('text-xl');
        expect(button).toHaveClass('px-7');
    });

    it('renders the loading spinner when isLoading is true', () => {
        const { getByTestId } = render(<Button isLoading>Loading...</Button>);
        expect(getByTestId('spinner')).toBeInTheDocument();
    });

    it('disables the button when disabled is true', () => {
        const { getByText } = render(<Button disabled>Click me</Button>);
        const button = getByText('Click me');
        expect(button).toBeDisabled();
    });
});
