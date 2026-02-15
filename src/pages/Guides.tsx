import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { support_guides, guideIconMap } from '../data/supportGuides';
import { ChevronRight, ExternalLink } from 'lucide-react';
import './Page.css';

const Guides: React.FC = () => {
    const [selectedGuideId, setSelectedGuideId] = useState(support_guides[0].id);

    const activeGuide = support_guides.find(g => g.id === selectedGuideId) || support_guides[0];
    const IconComponent = guideIconMap[activeGuide.icon];

    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="guides-header"
                >
                    <div className="badge">Self-Care & Communication</div>
                    <h1 className="page-title text-gradient">Supportive Care Guides</h1>
                    <p className="section-desc">
                        Practical wisdom for the emotional and social challenges of the cancer journey.
                        Learn how to communicate, manage feelings, and build a resilient support network.
                    </p>
                </motion.div>

                <div className="guides-layout">
                    {/* Navigation Sidebar */}
                    <aside className="guides-nav">
                        {support_guides.map((guide) => {
                            const GuideIcon = guideIconMap[guide.icon];
                            return (
                                <button
                                    key={guide.id}
                                    onClick={() => setSelectedGuideId(guide.id)}
                                    className={`guide-nav-item ${selectedGuideId === guide.id ? 'active' : ''}`}
                                >
                                    <div className="nav-icon-box">
                                        <GuideIcon size={18} />
                                    </div>
                                    <div className="nav-text">
                                        <h4>{guide.title}</h4>
                                        <p>{guide.description}</p>
                                    </div>
                                    <ChevronRight size={16} className="chevron" />
                                </button>
                            );
                        })}
                    </aside>

                    {/* Content Area */}
                    <div className="guide-content glass-panel">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedGuideId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="guide-content-header">
                                    <div className="main-icon-box">
                                        <IconComponent size={32} />
                                    </div>
                                    <div>
                                        <h2>{activeGuide.title}</h2>
                                        <p className="guide-subtitle">{activeGuide.description}</p>
                                    </div>
                                </div>

                                <div className="guide-sections">
                                    {activeGuide.sections.map((section, idx) => (
                                        <div key={idx} className="guide-section">
                                            <h3>{section.title}</h3>
                                            <p>{section.text}</p>
                                            {section.bullets && (
                                                <ul className="guide-bullets">
                                                    {section.bullets.map((bullet, i) => (
                                                        <li key={i}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="guide-footer">
                                    <div className="info-badge">
                                        <ExternalLink size={14} />
                                        Evidence-Based Resource
                                    </div>
                                    <p>Discuss these insights with your counselor or care team for personalized support.</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
                .guides-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .guides-layout {
                    display: grid;
                    grid-template-columns: 350px 1fr;
                    gap: 3rem;
                    align-items: start;
                }

                .guides-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .guide-nav-item {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    padding: 1.25rem;
                    border: 1px solid rgba(0,0,0,0.05);
                    background: white;
                    border-radius: var(--border-radius-md);
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }

                .guide-nav-item:hover {
                    border-color: var(--accent-primary);
                    transform: translateX(5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }

                .guide-nav-item.active {
                    background: var(--accent-gradient);
                    border: none;
                }

                .nav-icon-box {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: var(--bg-secondary);
                    color: var(--accent-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }

                .guide-nav-item.active .nav-icon-box {
                    background: rgba(255,255,255,0.2);
                    color: white;
                }

                .nav-text h4 {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                .nav-text p {
                    margin: 0.25rem 0 0;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    line-height: 1.4;
                }

                .guide-nav-item.active .nav-text h4,
                .guide-nav-item.active .nav-text p {
                    color: white;
                }

                .chevron {
                    margin-left: auto;
                    color: var(--text-muted);
                    transition: all 0.3s ease;
                }

                .guide-nav-item.active .chevron {
                    color: white;
                    transform: translateX(5px);
                }

                .guide-content {
                    padding: 3rem;
                    min-height: 600px;
                }

                .guide-content-header {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .main-icon-box {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    background: var(--accent-subtle);
                    color: var(--accent-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .guide-subtitle {
                    margin: 0.5rem 0 0;
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                }

                .guide-sections {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                }

                .guide-section h3 {
                    font-size: 1.4rem;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .guide-section p {
                    line-height: 1.8;
                    color: var(--text-primary);
                    font-size: 1.05rem;
                }

                .guide-bullets {
                    margin-top: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .guide-bullets li {
                    position: relative;
                    padding-left: 1.5rem;
                    line-height: 1.6;
                }

                .guide-bullets li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--accent-primary);
                }

                .guide-footer {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }

                .info-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.4rem 1rem;
                    background: var(--bg-secondary);
                    border-radius: 100px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    margin-bottom: 1rem;
                }

                .guide-footer p {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    font-style: italic;
                }

                @media (max-width: 1024px) {
                    .guides-layout {
                        grid-template-columns: 1fr;
                    }
                    .guides-nav {
                        flex-direction: row;
                        overflow-x: auto;
                        padding-bottom: 1rem;
                        -webkit-overflow-scrolling: touch;
                    }
                    .guide-nav-item {
                        min-width: 280px;
                        flex-shrink: 0;
                    }
                }

                @media (max-width: 640px) {
                    .guide-content {
                        padding: 1.5rem;
                    }
                    .guide-content-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }
                    .guide-section h3 {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Guides;
