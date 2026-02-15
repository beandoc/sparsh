import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
    Activity,
    Thermometer,
    Coffee,
    CheckCircle,
    PhoneCall,
    ChevronRight
} from 'lucide-react';
import './Page.css';

const Care: React.FC = () => {
    const careCategories = [
        {
            title: "Symptom Management",
            icon: <Thermometer />,
            items: ["Pain monitoring", "Fatigue management", "Appetite loss", "Sleep hygiene"],
            color: "#6366f1"
        },
        {
            title: "Daily Nutrition",
            icon: <Coffee />,
            items: ["Hydration goals", "Small frequent meals", "Caloric density", "Food safety"],
            color: "#059669"
        },
        {
            title: "Care Coordination",
            icon: <Activity />,
            items: ["Medication tracking", "Appointment prep", "Emergency contacts", "Pharmacy liaison"],
            color: "#ec4899"
        }
    ];

    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="page-title text-gradient">Usual Care Protocols</h1>
                    <p className="section-desc">
                        Evidence-based guidelines for managing daily life and specific symptoms
                        during and after active treatment.
                    </p>
                </motion.div>

                <div className="grid-container" style={{ marginBottom: '4rem' }}>
                    {careCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{ padding: '2rem' }}
                        >
                            <div style={{
                                color: cat.color,
                                background: `${cat.color}15`,
                                width: 'fit-content',
                                padding: '1rem',
                                borderRadius: '16px',
                                marginBottom: '1.5rem'
                            }}>
                                {cat.icon}
                            </div>
                            <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>{cat.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {cat.items.map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <CheckCircle size={16} color="var(--healing-green)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <motion.div
                    className="glass-panel"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        border: 'none'
                    }}
                >
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                        <PhoneCall size={32} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>Need specialized support?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Connect with specialized nurse navigators who can help interpret clinical instructions
                        for your specific situation.
                    </p>
                    <button style={{
                        background: 'white',
                        color: '#1e1b4b',
                        padding: '1rem 2.5rem',
                        borderRadius: 'var(--border-radius-md)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}>
                        Speak to a Navigator <ChevronRight size={18} />
                    </button>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Care;
