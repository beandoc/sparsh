import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
    Heart,
    Stethoscope,
    ShieldCheck,
    Users,
    Clock,
    Globe,
    AlertCircle,
    CheckCircle2,
    ArrowRightLeft,
    HandHeart,
    Flame
} from 'lucide-react';
import './Page.css';
import './PalliativeCare.css';

const PalliativeCare: React.FC = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="palliative-header"
                >
                    <div className="badge">Specialized Care</div>
                    <h1 className="page-title text-gradient">Understanding Palliative Care</h1>
                    <p className="section-desc">
                        Palliative care is specialized medical care for people with serious illnesses,
                        focusing on relief from symptoms, pain, and stress to improve quality of life.
                    </p>
                </motion.div>

                <div className="palliative-grid">
                    {/* Core Definition Section */}
                    <motion.section
                        className="glass-panel main-info-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-icon-wrapper">
                            <Heart size={32} />
                        </div>
                        <h2>What is Palliative Care?</h2>
                        <p>
                            Palliative care (pronounced <em>pal-lee-uh-tiv</em>) focuses on providing relief from the symptoms, pain and stress of a serious illness,
                            including cancer. The goal is to improve quality of life for both the patient and loved ones.
                        </p>
                        <p>
                            It is appropriate at any age and at any stage in a serious illness, and you can have it along with curative treatment.
                        </p>
                        <ul className="symptom-list">
                            <li><CheckCircle2 size={18} /> Pain</li>
                            <li><CheckCircle2 size={18} /> Shortness of breath</li>
                            <li><CheckCircle2 size={18} /> Fatigue</li>
                            <li><CheckCircle2 size={18} /> Difficulty sleeping</li>
                            <li><CheckCircle2 size={18} /> Depression</li>
                        </ul>
                    </motion.section>

                    {/* The Team Section */}
                    <motion.section
                        className="glass-panel team-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-icon-wrapper secondary">
                            <Users size={32} />
                        </div>
                        <h2>The Support Team</h2>
                        <p>
                            Palliative care is provided by a multidisciplinary team of specialists who work
                            together with your other doctors to provide an extra layer of support:
                        </p>
                        <div className="team-tags">
                            <span>Doctors & Nurses</span>
                            <span>Social Workers</span>
                            <span>Pharmacists</span>
                            <span>Nutritionists</span>
                            <span>Chaplains</span>
                            <span>Massage Therapists</span>
                        </div>
                        <div className="highlight">
                            <Clock size={16} />
                            <span>The team spends as much time as necessary with you and your loved ones.</span>
                        </div>
                    </motion.section>
                </div>

                {/* Global Statistics / Key Facts */}
                <section className="stats-section">
                    <h2 className="sub-section-title">Global Impact & Reality</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <Globe className="stat-icon" />
                            <div className="stat-value">56.8m</div>
                            <div className="stat-label">People in need of care annually</div>
                        </div>
                        <div className="stat-card accent">
                            <AlertCircle className="stat-icon" />
                            <div className="stat-value">14%</div>
                            <div className="stat-label">Only 14% currently receive the care they need</div>
                        </div>
                        <div className="stat-card">
                            <ShieldCheck className="stat-icon" />
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Children in need in low-middle income countries</div>
                        </div>
                    </div>
                </section>

                {/* Rights and Access Section */}
                <motion.section
                    className="glass-panel human-rights-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="content-flex">
                        <div className="text-content">
                            <h2>A Fundamental Human Right</h2>
                            <p>
                                Palliative care is explicitly recognized under the human right to health. It should be provided
                                through person-centered and integrated health services that pay special attention to the
                                specific needs and preferences of individuals.
                            </p>
                            <p>
                                <strong>Early delivery</strong> of palliative care reduces unnecessary hospital admissions
                                and improves the ability to tolerate medical treatments.
                            </p>
                        </div>
                        <div className="image-placeholder-art">
                            <Stethoscope size={80} opacity={0.1} />
                        </div>
                    </div>
                </motion.section>

                {/* Palliative vs Hospice Section */}
                <section className="comparison-section">
                    <div className="section-header-centered">
                        <ArrowRightLeft className="header-icon" />
                        <h2 className="sub-section-title">Palliative vs. Hospice Care</h2>
                        <p className="section-subtitle">While they share the goal of quality of life, they serve different stages of the journey.</p>
                    </div>

                    <div className="comparison-container">
                        <div className="comparison-card palliative-side">
                            <div className="card-top">
                                <HandHeart className="icon" />
                                <h3>Palliative Care</h3>
                            </div>
                            <div className="card-body">
                                <p className="timing"><strong>When?</strong> At any stage of a serious illness, often at diagnosis.</p>
                                <ul className="feature-list">
                                    <li>Can be given alongside curative treatments.</li>
                                    <li>Continues after treatment ends if needed.</li>
                                    <li>Team works with all your existing providers.</li>
                                    <li>Standard part of comprehensive cancer care.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-card hospice-side">
                            <div className="card-top">
                                <Flame className="icon" />
                                <h3>Hospice Care</h3>
                            </div>
                            <div className="card-body">
                                <p className="timing"><strong>When?</strong> During the last phase of an incurable illness or near end of life.</p>
                                <ul className="feature-list">
                                    <li>Given when there is no active/curative treatment.</li>
                                    <li>Focuses purely on symptom and side-effect management.</li>
                                    <li>Hospice team manages the majority of daily care.</li>
                                    <li>Often includes palliative care as part of the service.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel experts-tip">
                        <h4><ShieldCheck size={20} /> Professional Recommendation</h4>
                        <p>
                            Experts suggest people with advanced cancer should meet with palliative care
                            <strong> within 8 weeks</strong> of a cancer diagnosis to establish a baseline of support
                            and quality-of-life management.
                        </p>
                    </div>
                </section>

                {/* Barriers Section */}
                <section className="barriers-section">
                    <h2 className="sub-section-title">Overcoming Barriers</h2>
                    <div className="barriers-grid">
                        <div className="barrier-item">
                            <h3>Policy Gaps</h3>
                            <p>National health policies often do not include palliative care in their funding or structure.</p>
                        </div>
                        <div className="barrier-item">
                            <h3>Limited Training</h3>
                            <p>Education for health professionals is often limited or non-existent in core curricula.</p>
                        </div>
                        <div className="barrier-item">
                            <h3>Medicine Access</h3>
                            <p>Restrictions on essential controlled medicines like opioids deny access to pain relief.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PalliativeCare;
