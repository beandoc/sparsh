import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <Sidebar />
            <div className="app-main-container">
                <main className="content-viewport">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
