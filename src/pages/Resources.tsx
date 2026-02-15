import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    Download,
    HelpCircle,
    Stethoscope,
    Activity,
    Clock,
    HeartHandshake,
    CheckCircle2,
    Copy
} from 'lucide-react';
import { patient_questions } from '../data/patientQuestions';
import './Page.css';

const IconMap: Record<string, any> = {
    FileText: FileText,
    Stethoscope: Stethoscope,
    Activity: Activity,
    Clock: Clock,
    HeartHandshake: HeartHandshake
};

const Resources: React.FC = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(patient_questions[0].id);
    const [copied, setCopied] = useState(false);

    const activeCategory = patient_questions.find(c => c.id === activeCategoryId) || patient_questions[0];
    const IconComponent = IconMap[activeCategory.icon] || HelpCircle;

    const copyToClipboard = () => {
        const text = `${activeCategory.category}\n\n${activeCategory.questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h1 className="page-title text-gradient">Smart Appointment Guides</h1>
                    <p className="section-desc">
                        Carry these evidence-based questions to your next appointment.
                        Knowledge is your best tool for navigating care.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', alignItems: 'start' }} className="resources-layout">
                    {/* Category Navigation */}
                    <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {patient_questions.map((cat) => {
                            const NavIcon = IconMap[cat.icon];
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategoryId(cat.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '1rem',
                                        borderRadius: 'var(--border-radius-md)',
                                        border: activeCategoryId === cat.id ? '1px solid var(--accent-primary)' : '1px solid transparent',
                                        background: activeCategoryId === cat.id ? 'white' : 'transparent',
                                        color: activeCategoryId === cat.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease',
                                        boxShadow: activeCategoryId === cat.id ? '0 4px 12px rgba(99, 102, 241, 0.1)' : 'none',
                                        fontWeight: activeCategoryId === cat.id ? 600 : 400
                                    }}
                                >
                                    <NavIcon size={18} />
                                    <span style={{ fontSize: '0.9rem' }}>{cat.category.replace('Questions about ', '')}</span>
                                </button>
                            );
                        })}
                    </aside>

                    {/* Questions View */}
                    <div className="glass-panel" style={{ padding: '2.5rem', minHeight: '500px', position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategoryId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            padding: '0.75rem',
                                            borderRadius: '12px',
                                            background: 'var(--accent-subtle)',
                                            color: 'var(--accent-primary)'
                                        }}>
                                            <IconComponent size={24} />
                                        </div>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{activeCategory.category}</h2>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            onClick={copyToClipboard}
                                            style={{
                                                padding: '0.6rem',
                                                borderRadius: '8px',
                                                background: 'var(--bg-secondary)',
                                                border: '1px solid var(--bg-tertiary)',
                                                color: 'var(--text-secondary)',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            {copied ? <CheckCircle2 size={16} color="var(--healing-green)" /> : <Copy size={16} />}
                                            {copied ? 'Copied' : 'Copy List'}
                                        </button>
                                        <button
                                            style={{
                                                padding: '0.6rem',
                                                borderRadius: '8px',
                                                background: 'var(--accent-primary)',
                                                border: 'none',
                                                color: 'white',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            <Download size={16} />
                                            PDF
                                        </button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {activeCategory.questions.map((q, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            style={{
                                                padding: '1.25rem',
                                                borderRadius: '12px',
                                                background: 'var(--bg-secondary)',
                                                border: '1px solid var(--bg-tertiary)',
                                                display: 'flex',
                                                gap: '1rem',
                                                alignItems: 'flex-start'
                                            }}
                                        >
                                            <span style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: 'white',
                                                color: 'var(--accent-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                flexShrink: 0,
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}>
                                                {i + 1}
                                            </span>
                                            <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{q}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
        @media (max-width: 900px) {
            .resources-layout {
                grid-template-columns: 1fr !important;
            }
        }
      `}</style>
        </div>
    );
};

export default Resources;
