import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from '.';

describe('Tabs', () => {
    it('renders the tabs and switches to the correct tab when clicked', () => {
        render(<Tabs />);

        // Assert that the initial selected tab is rendered with the expected styling
        const initialSelectedTab = screen.getByText('Gamerse');
        expect(initialSelectedTab).toHaveClass('rounded-full bg-black py-3 text-white focus:outline-none');

        // Assert that the other tabs are rendered with the expected styling
        const otherTabs = screen.getAllByRole('button', { name: /tab/i });
        otherTabs.forEach((tab) => expect(tab).not.toHaveClass('rounded-full bg-black py-3 text-white focus:outline-none'));

        // Click the second tab
        const secondTab = screen.getByText('Trending');
        fireEvent.click(secondTab);

        // Assert that the second tab is now selected and the first tab is not
        expect(initialSelectedTab).not.toHaveClass('rounded-full bg-black py-3 text-white focus:outline-none');
        expect(secondTab).toHaveClass('rounded-full bg-black py-3 text-white focus:outline-none');

        // Click the third tab
        const thirdTab = screen.getByText('Avatar');
        fireEvent.click(thirdTab);

        // Assert that the third tab is now selected and the second tab is not
        expect(secondTab).not.toHaveClass('rounded-full bg-black py-3 text-white focus:outline-none');
        expect(thirdTab).toHaveClass('rounded-full bg-black py-3 text-white focus:outline-none');
    });
});
