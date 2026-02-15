import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Heart, BookOpen, Menu, X, ClipboardList, ShieldCheck } from 'lucide-react';
import './Header.css';

interface NavLinkProps {
    to: string;
    icon?: React.ReactNode;
    label: string;
    active: boolean;
    onClick?: () => void;
}

const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { to: '/guides', icon: <ShieldCheck size={18} />, label: 'Guides' },
        { to: '/resources', icon: <BookOpen size={18} />, label: 'Resources' },
        { to: '/toolkit', icon: <ClipboardList size={18} />, label: 'Toolkit' },
        { to: '/supportive-care', icon: <Heart size={18} />, label: 'Assistant' },
        { to: '/education', icon: <Activity size={18} />, label: 'Education' },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="brand" onClick={() => setIsMenuOpen(false)}>
                    <Heart size={32} className="brand-icon" />
                    <span className="brand-name">Sparsh</span>
                </Link>

                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            icon={link.icon}
                            label={link.label}
                            active={location.pathname.startsWith(link.to)}
                        />
                    ))}
                </nav>

                <div className="header-right">
                    <div className="auth-buttons desktop-only">
                        <Link to="/login" className="btn btn-secondary">Login</Link>
                        <Link to="/join" className="btn btn-primary">Get Started</Link>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="mobile-menu-content">
                            <div className="mobile-nav-links">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink
                                            to={link.to}
                                            icon={link.icon}
                                            label={link.label}
                                            active={location.pathname.startsWith(link.to)}
                                            onClick={() => setIsMenuOpen(false)}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mobile-auth-buttons">
                                <Link to="/login" className="btn btn-secondary full-width" onClick={() => setIsMenuOpen(false)}>Login</Link>
                                <Link to="/join" className="btn btn-primary full-width" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, active, onClick }) => (
    <Link to={to} className={`nav-link ${active ? 'active' : ''}`} onClick={onClick}>
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
