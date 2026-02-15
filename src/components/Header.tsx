import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Heart, BookOpen } from 'lucide-react';
import './Header.css';

interface NavLinkProps {
    to: string;
    icon?: React.ReactNode;
    label: string;
    active: boolean;
}

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="brand">
                    <Heart size={32} className="brand-icon" />
                    <span className="brand-name">Sparsh</span>
                </Link>

                <nav className="nav-desktop">
                    <NavLink to="/resources" icon={<BookOpen size={18} />} label="Resources" active={location.pathname.startsWith('/resources')} />
                    <NavLink to="/education" icon={<Activity size={18} />} label="Education" active={location.pathname.startsWith('/education')} />
                    <NavLink to="/palliative-care" icon={<Heart size={18} />} label="Palliative" active={location.pathname.startsWith('/palliative-care')} />
                    <NavLink to="/care" icon={<Activity size={18} />} label="Usual Care" active={location.pathname.startsWith('/care')} />
                </nav>

                <div className="auth-buttons">
                    <Link to="/login" className="btn btn-secondary">Login</Link>
                    <Link to="/join" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </header>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, active }) => (
    <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
        {icon && <span className="nav-icon">{icon}</span>}
        <span>{label}</span>
        {active && (
            <motion.div
                layoutId="nav-underline"
                className="nav-underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        )}
    </Link>
);

export default Header;
