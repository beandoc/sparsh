import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity,
    ShieldCheck,
    BookOpen,
    Menu,
    X,
    ClipboardList,
    Home,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const navLinks = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/education', icon: <Activity size={20} />, label: 'Academy' },
    { to: '/guides', icon: <ShieldCheck size={20} />, label: 'Guides' },
    { to: '/resources', icon: <BookOpen size={20} />, label: 'Resources' },
    { to: '/toolkit', icon: <ClipboardList size={20} />, label: 'Toolkit' },
    { to: '/supportive-care', icon: <ShieldCheck size={20} />, label: 'Assistant' },
];

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileOpen]);

    const isActive = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="mobile-top-bar">
                <Link to="/" className="mobile-brand">
                    <ShieldCheck size={24} className="brand-icon" />
                    <span>Sparsh</span>
                </Link>
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="mobile-drawer-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <motion.div
                            className="mobile-drawer"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="drawer-header">
                                <div className="brand">
                                    <ShieldCheck size={28} className="brand-icon" />
                                    <span>Sparsh</span>
                                </div>
                                <button className="close-btn" onClick={() => setIsMobileOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className="drawer-nav">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className={`drawer-link ${isActive(link.to) ? 'active' : ''}`}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        <span className="icon">{link.icon}</span>
                                        <span className="label">{link.label}</span>
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className={`desktop-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="brand">
                        <div className="brand-logo">
                            <ShieldCheck size={24} />
                        </div>
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="brand-name"
                            >
                                Sparsh
                            </motion.span>
                        )}
                    </Link>
                </div>

                <nav className="sidebar-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`sidebar-link ${isActive(link.to) ? 'active' : ''}`}
                            title={isCollapsed ? link.label : ''}
                        >
                            <span className="icon">{link.icon}</span>
                            {!isCollapsed && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="label"
                                >
                                    {link.label}
                                </motion.span>
                            )}
                            {isActive(link.to) && !isCollapsed && (
                                <motion.div layoutId="active-pill" className="active-pill" />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button
                        className="collapse-toggle"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                        {!isCollapsed && <span>Collapse</span>}
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
