import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Book, User, Activity, DollarSign, Brain, Heart, Users, ShieldCheck, Microscope, Zap, Share2, Database, Stethoscope, FlaskConical, Camera, Syringe, Layers, AlertTriangle, Apple, Sun, Smile, Dumbbell, Flag } from 'lucide-react';
import { education_modules } from '../data/educationModules';
import type { ModuleContent } from '../data/educationModules';
import './Page.css';
import './Education.css';

const Education: React.FC = () => {
    const [expandedModule, setExpandedModule] = useState<string | null>('module-1');

    const toggleModule = (id: string) => {
        setExpandedModule(expandedModule === id ? null : id);
    };

    return (
        <div className="page-container education-page">
            <Header />
            <main className="main-content">
                <motion.div
                    className="education-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="page-title text-gradient">Patient & Caregiver Education</h1>
                    <p className="section-desc">
                        Comprehensive learning modules designed to support you through every stage of the journey.
                    </p>
                </motion.div>

                <div className="modules-container">
                    {education_modules.map((module, index) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            isExpanded={expandedModule === module.id}
                            onToggle={() => toggleModule(module.id)}
                            index={index}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const ModuleCard = ({ module, isExpanded, onToggle, index }: { module: ModuleContent, isExpanded: boolean, onToggle: () => void, index: number }) => {
    return (
        <motion.div
            className={`module-card glass-panel ${isExpanded ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="module-header" onClick={onToggle}>
                <div className="module-title-wrapper">
                    <div className="module-icon">
                        {index === 0 && <Book size={24} />}
                        {index === 1 && <User size={24} />}
                        {index === 2 && <Brain size={24} />}
                        {index === 3 && <DollarSign size={24} />}
                        {index === 4 && <Activity size={24} />}
                        {index === 5 && <Heart size={24} />}
                        {index === 6 && <Users size={24} />}
                        {index === 7 && <Heart size={24} />}
                        {index === 8 && <Users size={24} />}
                        {index === 9 && <ShieldCheck size={24} />}
                        {index === 10 && <Microscope size={24} />}
                        {index === 11 && <Zap size={24} />}
                        {index === 12 && <Share2 size={24} />}
                        {index === 13 && <Database size={24} />}
                        {index === 14 && <Stethoscope size={24} />}
                        {index === 15 && <FlaskConical size={24} />}
                        {index === 16 && <Camera size={24} />}
                        {index === 17 && <Syringe size={24} />}
                        {index === 18 && <Layers size={24} />}
                        {index === 19 && <AlertTriangle size={24} />}
                        {index === 20 && <Apple size={24} />}
                        {index === 21 && <ShieldCheck size={24} />}
                        {index === 22 && <Sun size={24} />}
                        {index === 23 && <Smile size={24} />}
                        {index === 24 && <Dumbbell size={24} />}
                        {index === 25 && <Flag size={24} />}
                    </div>
                    <div>
                        <h2 className="module-title">{module.title}</h2>
                        <p className="module-desc-short">{module.description}</p>
                    </div>
                </div>
                <button className="expand-btn">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="module-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="module-content-inner">
                            {module.sections.map((section, idx: number) => (
                                <div key={idx} className="module-section">
                                    <h3 className="section-subtitle">{section.title}</h3>
                                    <div className="section-body">
                                        {section.content.map((item, i: number) => (
                                            <div key={i} className="content-block">
                                                {item.subtitle && <h4 className="content-heading">{item.subtitle}</h4>}
                                                {item.text && <p className="content-text">{item.text}</p>}
                                                {item.list && (
                                                    <ul className="content-list">
                                                        {item.list.map((li: string, lIdx: number) => (
                                                            <li key={lIdx}>{li}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Education;
