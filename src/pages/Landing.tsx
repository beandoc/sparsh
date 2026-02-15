import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Heart, Shield, BookOpen, Users, Zap } from 'lucide-react';
import './Landing.css';

const Landing: React.FC = () => {
    return (
        <div className="landing-page">
            <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hero-badge"
                    >
                        <Zap size={14} /> Comprehensive Cancer Support
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Empowering Your <br />
                        <span className="text-gradient">Journey Through Care</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Sparsh is your trusted companion for cancer care education, resources, and daily support.
                        Designed to bridge the gap between clinical care and home life.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Link to="/education" className="btn btn-primary btn-lg">
                            Start Learning <ArrowRight size={20} />
                        </Link>
                        <Link to="/resources" className="btn btn-secondary btn-lg">
                            Patient Resources
                        </Link>
                    </motion.div>
                </div>

                <div className="hero-visual-bg">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="features-section">
                <div className="section-header">
                    <h2 className="section-title">A Foundation for Healing</h2>
                    <p className="section-desc">We consolidate clinical knowledge into actionable steps for patients and their families.</p>
                </div>

                <div className="features-grid">
                    <FeatureCard
                        icon={<BookOpen size={32} />}
                        title="Learning Resources"
                        desc="Curated articles, evidence-based checklists, and appointment guides for every stage."
                        link="/resources"
                        color="var(--accent-primary)"
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={<Shield size={32} />}
                        title="Patient Education"
                        desc="Structured modules covering cancer biology, caregiver roles, and mental wellbeing."
                        link="/education"
                        color="var(--healing-green)"
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={<Heart size={32} />}
                        title="Usual Care"
                        desc="Daily management protocols and side-effect mitigation strategies for home care."
                        link="/care"
                        color="var(--accent-secondary)"
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Trust Quote / Impact Section */}
            <section className="impact-section">
                <div className="glass-panel impact-card">
                    <div className="impact-icon">
                        <Users size={40} className="text-indigo-500" />
                    </div>
                    <h3 className="impact-title">Supporting the Informal Carer</h3>
                    <p className="impact-text">
                        "Caregivers are the silent backbone of the healthcare system. Sparsh aims to provide the
                        tools and training needed to carry out this vital role without sacrificing their own health."
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    link: string;
    color: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, link, color, delay }) => (
    <motion.div
        className="feature-card glass-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -10 }}
    >
        <div className="feature-icon-wrapper" style={{ color: color, backgroundColor: `${color}15` }}>
            {icon}
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{desc}</p>
        <Link to={link} className="feature-link" style={{ color: color }}>
            Learn more <ArrowRight size={16} />
        </Link>
    </motion.div>
);

export default Landing;
