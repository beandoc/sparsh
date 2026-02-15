import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    Activity,
    ShieldCheck,
    Users,
    BookOpen,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    ExternalLink,
    Brain,
    Coins,
    UserCircle,
    Info,
    ChevronRight,
    ChevronLeft
} from 'lucide-react';
import { supportive_modules } from '../data/supportiveOncologyModules';
import type { SupportiveModule } from '../data/supportiveOncologyModules';
import './Page.css';
import './SupportiveOncology.css';

type FlowState = 'check' | 'learn' | 'act';

const SupportiveOncology: React.FC = () => {
    const [activeCategoryId, setActiveCategoryId] = useState<SupportiveModule['category']>('Emotional');
    const [selectedModule, setSelectedModule] = useState<SupportiveModule | null>(null);
    const [flowState, setFlowState] = useState<FlowState>('check');
    const [responses, setResponses] = useState<Record<string, boolean>>({});

    const categories: { id: SupportiveModule['category']; label: string; icon: React.ReactNode }[] = [
        { id: 'Emotional', label: 'Emotional Wellness', icon: <Heart size={20} /> },
        { id: 'Physical', label: 'Physical Symptoms', icon: <Activity size={20} /> },
        { id: 'Practical', label: 'Practical & Financial', icon: <Coins size={20} /> },
        { id: 'Family', label: 'Family & Relationships', icon: <Users size={20} /> },
        { id: 'Understanding', label: 'Understanding Cancer', icon: <BookOpen size={20} /> },
    ];

    const filteredModules = supportive_modules.filter(m => m.category === activeCategoryId);

    const handleSelectModule = (module: SupportiveModule) => {
        setSelectedModule(module);
        setFlowState('check');
    };

    const handleCheckResponse = (answeredYes: boolean) => {
        if (selectedModule) {
            setResponses({ ...responses, [selectedModule.id]: answeredYes });
            setFlowState('learn');
        }
    };

    const nextStep = () => {
        if (flowState === 'learn') setFlowState('act');
    };

    const resetSelection = () => {
        setSelectedModule(null);
        setFlowState('check');
    };

    return (
        <div className="page-container supportive-page">
            <Header />
            <main className="main-content">
                <motion.div
                    className="supportive-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="badge">Supportive Oncology Toolkit</div>
                    <h1 className="page-title text-gradient">Supportive Care Assistant</h1>
                    <p className="section-desc">
                        A personalized guide to emotional, physical, and practical needs.
                        Follow the <strong>Check &gt; Learn &gt; Act</strong> workflow for each area.
                    </p>
                </motion.div>

                {!selectedModule ? (
                    <div className="discovery-mode">
                        {/* Category Selector */}
                        <div className="category-nav">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`cat-tab ${activeCategoryId === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategoryId(cat.id)}
                                >
                                    {cat.icon}
                                    <span>{cat.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Modules Grid */}
                        <div className="modules-grid">
                            {filteredModules.length > 0 ? (
                                filteredModules.map((module, idx) => (
                                    <motion.div
                                        key={module.id}
                                        className="module-entry-card glass-panel"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => handleSelectModule(module)}
                                    >
                                        <div className="entry-icon">
                                            {activeCategoryId === 'Emotional' && <Brain size={24} />}
                                            {activeCategoryId === 'Physical' && <Activity size={24} />}
                                            {activeCategoryId === 'Practical' && <Coins size={24} />}
                                            {activeCategoryId === 'Family' && <Users size={24} />}
                                            {activeCategoryId === 'Understanding' && <Info size={24} />}
                                        </div>
                                        <div className="entry-body">
                                            <h3>{module.title}</h3>
                                            <p>{module.screeningQuestion.substring(0, 80)}...</p>
                                        </div>
                                        <ChevronRight className="arrow" />
                                    </motion.div>
                                ))
                            ) : (
                                <div className="coming-soon glass-panel">
                                    <p>Additional modules for {activeCategoryId} are coming soon.</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flow-mode">
                        {/* Breadcrumbs / Progress */}
                        <div className="flow-controls">
                            <button className="back-btn" onClick={resetSelection}>
                                <ChevronLeft size={18} /> Back to Modules
                            </button>
                            <div className="flow-indicator">
                                <span className={flowState === 'check' ? 'active' : 'done'}>1. Check</span>
                                <span className={flowState === 'learn' ? 'active' : flowState === 'act' ? 'done' : ''}>2. Learn</span>
                                <span className={flowState === 'act' ? 'active' : ''}>3. Act</span>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {flowState === 'check' && (
                                <motion.div
                                    key="check"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flow-step check-step glass-panel card-premium"
                                >
                                    <div className="badge primary">Self-Check</div>
                                    <h2 className="step-question">{selectedModule.screeningQuestion}</h2>
                                    <div className="response-buttons">
                                        <button className="btn-response yes" onClick={() => handleCheckResponse(true)}>
                                            <CheckCircle2 size={24} />
                                            Yes
                                        </button>
                                        <button className="btn-response no" onClick={() => handleCheckResponse(false)}>
                                            <UserCircle size={24} />
                                            No / Not at this time
                                        </button>
                                    </div>
                                    <p className="check-hint">Your responses are private and help customize your learning.</p>
                                </motion.div>
                            )}

                            {flowState === 'learn' && (
                                <motion.div
                                    key="learn"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flow-step learn-step glass-panel"
                                >
                                    <div className="badge accent">Educational Content</div>
                                    <h2 className="module-title-active">{selectedModule.title}</h2>
                                    <div className="learning-content">
                                        <p className="intro-text">{selectedModule.educationalContent.intro}</p>

                                        {selectedModule.educationalContent.bullets && (
                                            <ul className="learning-bullets">
                                                {selectedModule.educationalContent.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {selectedModule.educationalContent.strategiesTitles && (
                                            <div className="strategies-grid">
                                                {selectedModule.educationalContent.strategiesTitles.map((title, i) => (
                                                    <div key={i} className="strategy-card">
                                                        <h4>{title}</h4>
                                                        <p>{selectedModule.educationalContent.strategies?.[i]}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <button className="btn btn-primary next-btn" onClick={nextStep}>
                                        Continue to Action Steps <ArrowRight size={18} />
                                    </button>
                                </motion.div>
                            )}

                            {flowState === 'act' && (
                                <motion.div
                                    key="act"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flow-step act-step glass-panel"
                                >
                                    <div className="badge success">Recommended Actions</div>
                                    <h2 className="module-title-active">Steps you can take today</h2>

                                    <div className="actions-list">
                                        {selectedModule.actionableSteps.map((step, i) => (
                                            <div key={i} className="action-item">
                                                <div className="action-check">
                                                    <ShieldCheck size={20} />
                                                </div>
                                                <div className="action-body">
                                                    <p>{step.text}</p>
                                                    {step.link && (
                                                        <a href={step.link} target="_blank" rel="noopener noreferrer" className="action-link">
                                                            View Resource <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {selectedModule.redFlags && (
                                        <div className="red-flags-box">
                                            <div className="flags-header">
                                                <AlertTriangle size={20} />
                                                <h4>When to call your doctor immediately (Red Flags)</h4>
                                            </div>
                                            <ul>
                                                {selectedModule.redFlags.map((flag, i) => (
                                                    <li key={i}>{flag}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flow-footer">
                                        <p>Questions? Bring your results to your next treatment visit.</p>
                                        <button className="btn btn-secondary" onClick={resetSelection}>
                                            Explore Other Modules
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SupportiveOncology;
