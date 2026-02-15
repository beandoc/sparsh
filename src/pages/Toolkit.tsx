import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ClipboardList,
    Thermometer,
    Zap,
    FileText,
    Search,
    Hospital,
    MessageCircle,
    AlertCircle,
    Activity,
    User,
    Scan,
    Heart,
    Brain,
    AlertTriangle,
    Plus,
    Minus,
    Droplets
} from 'lucide-react';
import './Page.css';
import './Toolkit.css';

const Toolkit: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'trackers' | 'advice'>('trackers');
    const [activeRadiationArea, setActiveRadiationArea] = useState<string>('general');

    const worksheets = [
        {
            id: 'chemo',
            title: 'Chemotherapy Side Effects',
            description: 'Track 15+ common side effects across a 7-day cycle.',
            icon: <Zap size={24} />,
            category: 'Trackers'
        },
        {
            id: 'radiation',
            title: 'Radiation Side Effects',
            description: 'Weekly log for treatment-specific physical impacts.',
            icon: <Activity size={24} />,
            category: 'Trackers'
        },
        {
            id: 'pain',
            title: 'Pain Diary & Scale',
            description: 'Document pain intensity, triggers, and medication efficacy.',
            icon: <Thermometer size={24} />,
            category: 'Trackers'
        }
    ];

    const radiationAreas = [
        { id: 'general', title: 'General Effects', icon: <User size={20} /> },
        { id: 'head-neck', title: 'Head & Neck', icon: <Scan size={20} /> },
        { id: 'breast', title: 'Breast / Chest', icon: <Heart size={20} /> },
        { id: 'abdomen', title: 'Abdomen', icon: <Activity size={20} /> },
        { id: 'brain', title: 'Brain', icon: <Brain size={20} /> }
    ];

    const radiationContent: Record<string, { symptoms: { name: string, options?: string[] }[]; notes: string }> = {
        'general': {
            symptoms: [
                { name: 'Fatigue (Feeling Very Tired)' },
                { name: 'Skin Changes (Area treated)' },
                { name: 'Fever (Highest Temp)' }
            ],
            notes: 'General effects usually affect energy and treated skin areas.'
        },
        'head-neck': {
            symptoms: [
                { name: 'Sore Mouth (Mucositis)' },
                { name: 'Dry Mouth (Xerostomia)', options: ['Decreased', 'Thick', 'No Saliva'] },
                { name: 'Nausea and Vomiting' }
            ],
            notes: 'Visit cancer.org/radiation for head-specific care tips.'
        },
        'breast': {
            symptoms: [
                { name: 'Skin Changes (Redness/Itch)' },
                { name: 'Sore Breast (Yes/No)', options: ['Yes', 'No'] },
                { name: 'Lymphedema (Swelling)' }
            ],
            notes: 'Monitor skin folds for moist peeling especially.'
        },
        'abdomen': {
            symptoms: [
                { name: 'Nausea/Vomiting' },
                { name: 'Diarrhea (# of BMs/Day)' },
                { name: 'Constipation' }
            ],
            notes: 'Track your bowel movements (BMs) count daily.'
        },
        'brain': {
            symptoms: [
                { name: 'Headache or Seizure' },
                { name: 'Nausea / Memory / Speech' },
                { name: 'Decreased Hearing' }
            ],
            notes: 'Contact team immediately for seizures or sudden change in speech.'
        }
    };

    const adviceLeaflets = [
        {
            id: 'doctor',
            title: 'Choosing a Cancer Doctor',
            description: 'Strategic questions to find the right partner for your care.',
            icon: <Search size={24} />,
            category: 'Advice'
        },
        {
            id: 'center',
            title: 'Choosing a Cancer Center',
            description: 'Verify services, facilities, and care philosophy.',
            icon: <Hospital size={24} />,
            category: 'Advice'
        },
        {
            id: 'diagnosis',
            title: 'Questions for Diagnosis',
            description: 'Clear list of queries to help understand your cancer type.',
            icon: <MessageCircle size={24} />,
            category: 'Advice'
        }
    ];

    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="toolkit-header"
                >
                    <div className="badge">Organization & Prep</div>
                    <h1 className="page-title text-gradient">Cancer Care Toolkit</h1>
                    <p className="section-desc">
                        Evidence-based worksheets and practical guides to help you stay organized,
                        prepared, and in control throughout your treatment journey.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="tab-navigation">
                    <button
                        className={`tab-btn ${activeTab === 'trackers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trackers')}
                    >
                        <ClipboardList size={20} />
                        Worksheets & Trackers
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'advice' ? 'active' : ''}`}
                        onClick={() => setActiveTab('advice')}
                    >
                        <FileText size={20} />
                        Practical Advice
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'trackers' ? (
                        <motion.div
                            key="trackers"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="toolkit-grid"
                        >
                            {worksheets.map((item) => (
                                <div key={item.id} className="toolkit-card glass-panel">
                                    <div className="item-icon">{item.icon}</div>
                                    <div className="item-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <div className="card-actions">
                                            <button className="btn-icon-text">
                                                <Activity size={16} />
                                                Open Interactive Tool
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="advice"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="toolkit-grid"
                        >
                            {adviceLeaflets.map((item) => (
                                <div key={item.id} className="toolkit-card glass-panel">
                                    <div className="item-icon accent">{item.icon}</div>
                                    <div className="item-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <div className="card-actions">
                                            <button className="btn-icon-text">
                                                <FileText size={16} />
                                                Read Guide
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Custom Interactive Tool: Radiation Guide */}
                <section className="toolkit-featured glass-panel" style={{ marginTop: '4rem' }}>
                    <div className="featured-content">
                        <div className="text-side">
                            <div className="badge accent">Interactive Tracker</div>
                            <h2>Radiation Side Effects Guide</h2>
                            <p>
                                External radiation usually only affects the area of the body getting treatment.
                                Select your treatment area to see specific symptoms to track:
                            </p>

                            <div className="radiation-area-grid">
                                {radiationAreas.map(area => (
                                    <div
                                        key={area.id}
                                        className={`area-btn ${activeRadiationArea === area.id ? 'active' : ''}`}
                                        onClick={() => setActiveRadiationArea(area.id)}
                                    >
                                        {area.icon}
                                        <h4>{area.title}</h4>
                                    </div>
                                ))}
                            </div>

                            <div className="alert-box" style={{ marginTop: '2rem' }}>
                                <AlertCircle size={20} />
                                <p>{radiationContent[activeRadiationArea].notes}</p>
                            </div>
                        </div>

                        <div className="interactive-side">
                            <motion.div
                                key={activeRadiationArea}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="day-picker"
                            >
                                <h3 style={{ marginBottom: '1.5rem' }}>{radiationAreas.find(a => a.id === activeRadiationArea)?.title} Checklist</h3>
                                {radiationContent[activeRadiationArea].symptoms.map((symptom, idx) => (
                                    <div key={idx} className="side-effect-interactive">
                                        <div className="se-label">{symptom.name}</div>
                                        <div className="grading-pills">
                                            {symptom.options ? (
                                                symptom.options.map((opt, i) => (
                                                    <span key={i} className="pill">{opt}</span>
                                                ))
                                            ) : (
                                                <>
                                                    <span className="pill active">None</span>
                                                    <span className="pill">Mild</span>
                                                    <span className="pill">Mod.</span>
                                                    <span className="pill warning">Severe</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled>
                                    Log Saved Locally
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Focus: Daily Pain Diary */}
                <section className="toolkit-featured glass-panel" style={{ marginTop: '4rem', background: '#fff7ed' }}>
                    <div className="featured-content">
                        <div className="interactive-side" style={{ order: 2 }}>
                            <div className="day-picker" style={{ border: '1px solid #ffedd5' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h3 style={{ margin: 0 }}>Daily Pain Log</h3>
                                    <AlertTriangle size={20} color="#ea580c" />
                                </div>
                                <div className="side-effect-interactive">
                                    <div className="se-label">Pain Level (0-10)</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                                        <button className="btn-icon-text secondary"><Minus size={16} /></button>
                                        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#ea580c' }}>6</span>
                                        <button className="btn-icon-text secondary"><Plus size={16} /></button>
                                    </div>
                                </div>
                                <div className="side-effect-interactive">
                                    <div className="se-label">Type of Pain</div>
                                    <div className="grading-pills">
                                        <span className="pill active">Sharp</span>
                                        <span className="pill">Ache</span>
                                        <span className="pill">Burn</span>
                                        <span className="pill">Dull</span>
                                    </div>
                                </div>
                                <div className="side-effect-interactive">
                                    <div className="se-label">Medication Taken</div>
                                    <div className="grading-pills">
                                        <span className="pill"><Droplets size={14} /> Morphine</span>
                                        <span className="pill active">Ibuprofen</span>
                                    </div>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', background: '#ea580c', border: 'none' }} disabled>
                                    Diary Updated
                                </button>
                            </div>
                        </div>
                        <div className="text-side" style={{ order: 1 }}>
                            <div className="badge" style={{ background: '#ffedd5', color: '#9a3412' }}>Vital Tool</div>
                            <h2>Daily Pain Diary</h2>
                            <p>
                                Pain may happen with cancer and affect many parts of your life.
                                Using a diary helps you describe exactly what you're going through to your care team.
                            </p>
                            <ul className="symptom-check-list">
                                <li><strong>Timing:</strong> Record exact date and time pain occurs.</li>
                                <li><strong>Intensity:</strong> Use the 0-10 scale consistently.</li>
                                <li><strong>Triggers:</strong> Note the circumstances or specific activities.</li>
                                <li><strong>Relief:</strong> Track which medications or actions helped.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Toolkit;
