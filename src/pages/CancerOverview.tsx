import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    Search,
    Zap,
    Shield,
    Activity,
    BarChart3,
    Stethoscope,
    Target
} from 'lucide-react';
import './Page.css';
import './CancerOverview.css';

const CancerOverview: React.FC = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="overview-header"
                >
                    <div className="badge">Global Health Profile</div>
                    <h1 className="page-title text-gradient">Cancer: A Global Overview</h1>
                    <p className="section-desc">
                        Understanding the biology, risk factors, and life-saving importance of early detection
                        for one of the world's most significant health challenges.
                    </p>
                </motion.div>

                {/* Key Facts Quick View */}
                <div className="facts-strip">
                    <div className="fact-item">
                        <span className="fact-val">10M</span>
                        <span className="fact-lab">Deaths in 2020</span>
                    </div>
                    <div className="fact-item">
                        <span className="fact-val">1/3</span>
                        <span className="fact-lab">Deaths preventable via lifestyle</span>
                    </div>
                    <div className="fact-item">
                        <span className="fact-val">30%</span>
                        <span className="fact-lab">Cases from infections in LMICs</span>
                    </div>
                    <div className="fact-item">
                        <span className="fact-val">400k</span>
                        <span className="fact-lab">Children affected annually</span>
                    </div>
                </div>

                <div className="overview-layout">
                    {/* Biology & Metastasis */}
                    <motion.section
                        className="glass-panel main-section"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-icon-row">
                            <Zap size={32} className="text-pink-500" />
                            <h2>Biological Identity</h2>
                        </div>
                        <p>
                            Cancer is characterized by the <strong>rapid creation of abnormal cells</strong> that grow
                            beyond their usual boundaries. These cells can invade adjoining parts of the body and
                            spread to other organs in a process known as <strong>metastasis</strong>.
                        </p>
                        <div className="metastasis-box">
                            <AlertTriangle size={20} />
                            <span>Widespread metastases are the primary cause of death from cancer.</span>
                        </div>
                    </motion.section>

                    {/* Common Types */}
                    <div className="side-stats">
                        <div className="glass-panel stat-list-card">
                            <h3>Most Common Types (2020)</h3>
                            <ul className="stat-list">
                                <li><span>Breast</span> <strong>2.26M</strong></li>
                                <li><span>Lung</span> <strong>2.21M</strong></li>
                                <li><span>Colorectal</span> <strong>1.93M</strong></li>
                                <li><span>Prostate</span> <strong>1.41M</strong></li>
                                <li><span>Stomach</span> <strong>1.09M</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Prevention Section */}
                <section className="prevention-grid-container">
                    <h2 className="sub-section-title">Evidence-Based Prevention</h2>
                    <div className="prevention-cards">
                        <div className="p-card">
                            <Shield className="p-icon" />
                            <h4>Lifestyle Choices</h4>
                            <p>Avoid tobacco, maintain healthy weight, and limit alcohol consumption.</p>
                        </div>
                        <div className="p-card">
                            <Target className="p-icon" />
                            <h4>Vaccination</h4>
                            <p>Immunization against HPV and Hepatitis B reduces infection-related cancers.</p>
                        </div>
                        <div className="p-card">
                            <Activity className="p-icon" />
                            <h4>Environment</h4>
                            <p>Reduce exposure to air pollution, UV radiation, and occupational carcinogens.</p>
                        </div>
                    </div>
                </section>

                {/* Early Detection & Screening */}
                <div className="split-sections">
                    <motion.div
                        className="glass-panel diagnostic-box"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3><Search size={24} /> Early Diagnosis</h3>
                        <p>Identifies symptomatic patients at the earliest possible stage. Includes:</p>
                        <ul>
                            <li>Symptom awareness</li>
                            <li>Clinical evaluation</li>
                            <li>Timely referral</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="glass-panel diagnostic-box"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3><BarChart3 size={24} /> Screening</h3>
                        <p>Aims to identify abnormalities in individuals <em>before</em> symptoms develop. Methods include:</p>
                        <ul>
                            <li>Mammography (Breast)</li>
                            <li>HPV DNA testing (Cervical)</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Treatment Reality */}
                <section className="treatment-section">
                    <div className="treatment-content glass-panel">
                        <div className="treatment-header">
                            <Stethoscope size={40} />
                            <h2>The Goal of Treatment</h2>
                        </div>
                        <p>
                            Treatments include <strong>surgery, radiotherapy, and systemic therapy</strong> (chemo, hormonal, targeted).
                            While high-income countries report {'>'}90% treatment availability, low-income settings often have {'<'}15% access.
                        </p>
                        <div className="curability-highlight">
                            Many cancers like breast, cervical, and colorectal have <strong>high cure probabilities</strong> when detected early.
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CancerOverview;
