import React from 'react';
import { ShieldCheck, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-container glass-panel-top">
            <div className="footer-content">
                <div className="footer-section brand-section">
                    <div className="footer-brand">
                        <ShieldCheck size={24} className="text-accent-primary" />
                        <span className="brand-text">Sparsh</span>
                    </div>
                    <p className="brand-tagline">
                        Empowering patients and caregivers with knowledge, resources, and community support through every step of the journey.
                    </p>
                </div>

                <div className="footer-section links-section">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/education">Academy Lessons</Link></li>
                        <li><Link to="/resources">Guides & Lists</Link></li>
                        <li><Link to="/supportive-care">Support Assistant</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact-section">
                    <h4 className="footer-heading">Contact & Support</h4>
                    <ul className="footer-links">
                        <li className="contact-item"><Mail size={16} /> support@sparsh.care</li>
                        <li className="contact-item"><Phone size={16} /> +1 (800) 123-4567</li>
                    </ul>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sparsh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
