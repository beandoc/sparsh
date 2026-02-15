import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ShieldCheck,
    BookOpen,
    Activity,
    Users,
    ChevronRight,
    Award,
    CheckCircle2
} from 'lucide-react';
import './Landing.css';

const Landing: React.FC = () => {
    return (
        <div className="landing-page">

            {/* Premium Hero Section */}
            <section className="hero-section premium">
                <div className="hero-container">
                    <div className="hero-text-content">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hero-badge-v2"
                        >
                            <span className="dot"></span> Evidence-Based Oncology Education
                        </motion.div>

                        <motion.h1
                            className="hero-title-v2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Excellence in <br />
                            <span className="text-gradient">Supportive Care</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle-v2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            Sparsh provides clinicians, patients, and caregivers with a
                            digitally-integrated academy for navigating the complexities
                            of cancer treatment with confidence and clarity.
                        </motion.p>

                        <motion.div
                            className="hero-actions-v2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <Link to="/education" className="btn btn-primary btn-lg shadow-glow">
                                Explore the Academy <ArrowRight size={20} />
                            </Link>
                            <Link to="/resources" className="btn btn-outline btn-lg">
                                View Resources
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            className="hero-trust-indicators"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="trust-item">
                                <Award size={18} /> <span>Clinical Standard Content</span>
                            </div>
                            <div className="trust-item">
                                <CheckCircle2 size={18} /> <span>35+ Technical Modules</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="image-wrapper">
                            <img
                                src="/hero-visual.png"
                                alt="Clinical Abstract Visualization"
                                className="hero-visual-image"
                            />
                            <div className="image-overlay-gradient"></div>
                        </div>
                        {/* Floating Stats UI */}
                        <motion.div
                            className="floating-ui-card glass-panel"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="ui-icon"><Activity size={20} /></div>
                            <div className="ui-content">
                                <span className="ui-label">Resources Available</span>
                                <span className="ui-value">35 Modules</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="features-section">
                <div className="section-header centered">
                    <div className="badge primary">Our Ecosystem</div>
                    <h2 className="section-title">The Three Pillars of Sparsh</h2>
                    <p className="section-desc">A comprehensive approach to oncology support, from diagnosis through recovery.</p>
                </div>

                <div className="features-grid">
                    <FeatureCard
                        icon={<BookOpen size={28} />}
                        title="Comprehensive Academy"
                        desc="35 structured lessons covering everything from cancer biology to spiritual support."
                        link="/education"
                        color="#6366f1"
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={<ShieldCheck size={28} />}
                        title="Resource Toolkit"
                        desc="Evidence-based appointment guides and curated clinical resources for daily management."
                        link="/resources"
                        color="#10b981"
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={<Activity size={28} />}
                        title="Support Assistant"
                        desc="Expert-validated protocols for symptom management and caregiver guidance."
                        link="/supportive-care"
                        color="#0ea5e9"
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Impact / Quote Section */}
            <section className="quote-section">
                <div className="container">
                    <div className="quote-card glass-panel">
                        <div className="quote-icon"><Users size={32} /></div>
                        <blockquote className="expert-quote">
                            "Sparsh represents a significant advancement in how we provide
                            palliative and supportive care information. It bridges the critical
                            gap between clinical settings and the reality of home-based care."
                        </blockquote>
                        <div className="quote-author">
                            <div className="author-info">
                                <p className="name">Oncology Support Team</p>
                                <p className="role">Clinical Content Specialists</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-banner">
                <div className="cta-container glass-panel">
                    <div className="cta-content">
                        <h2>Ready to begin your journey?</h2>
                        <p>Access the full clinical education academy today.</p>
                    </div>
                    <Link to="/education" className="btn btn-primary btn-lg">
                        Get Started Now <ChevronRight size={20} />
                    </Link>
                </div>
            </section>
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
        className="feature-card-v2 glass-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8 }}
    >
        <div className="icon-box" style={{ background: color + '15', color: color }}>
            {icon}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
        <Link to={link} className="card-link">
            Explore Pillar <ArrowRight size={16} />
        </Link>
    </motion.div>
);

export default Landing;
