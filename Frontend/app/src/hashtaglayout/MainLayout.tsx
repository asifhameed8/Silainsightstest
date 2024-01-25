import NewHeader from '@components/Navbar';
import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <NewHeader />
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;
