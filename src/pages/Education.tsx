import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, ChevronUp, Book, User, Activity, DollarSign, Brain, Heart, Users,
    ShieldCheck, Microscope, Zap, Share2, Database, Stethoscope, FlaskConical,
    Camera, Syringe, Layers, AlertTriangle, Apple, Sun, Smile, Dumbbell, Flag,
    Search, CheckCircle2, X, Info, TrendingUp, Thermometer, Wind, MessageSquare,
    Sparkles, Moon, HelpCircle
} from 'lucide-react';
import { education_modules } from '../data/educationModules';
import type { ModuleContent } from '../data/educationModules';
import './Page.css';
import './Education.css';

const PHASES = [
    { id: 'caregiver', title: 'Phase 1: Caregiver Foundations', indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { id: 'science', title: 'Phase 2: Science & Diagnosis', indices: [10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { id: 'risk', title: 'Phase 3: Risk & Prevention', indices: [19, 20, 21] },
    { id: 'living', title: 'Phase 4: Living Your Days Well', indices: [22, 23, 24, 25] },
    { id: 'palliative', title: 'Phase 5: Supportive Oncology', indices: [26, 27, 28, 29, 30, 31, 32, 33, 34] }
];

const Education: React.FC = () => {
    const [expandedModule, setExpandedModule] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activePhase, setActivePhase] = useState(PHASES[0].id);
    const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
        const saved = localStorage.getItem('sparsh_completed_lessons');
        return saved ? JSON.parse(saved) : [];
    });

    const toggleComplete = (id: string) => {
        const updated = completedLessons.includes(id)
            ? completedLessons.filter(l => l !== id)
            : [...completedLessons, id];

        setCompletedLessons(updated);
        localStorage.setItem('sparsh_completed_lessons', JSON.stringify(updated));
    };

    const toggleModule = (id: string) => {
        setExpandedModule(expandedModule === id ? null : id);
    };

    const filteredModules = education_modules.filter(m =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.sections.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const progressPercentage = Math.round((completedLessons.length / education_modules.length) * 100);

    return (
        <div className="page-container education-page">
            <Header />
            <main className="main-content">
                <header className="education-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="badge primary">Patient & Caregiver Academy</div>
                        <h1 className="page-title text-gradient">Educational Materials</h1>

                        <div className="progress-container">
                            <div className="progress-info">
                                <span>Academy Progress</span>
                                <span className="progress-count">{completedLessons.length} of {education_modules.length} Lessons</span>
                            </div>
                            <div className="progress-bar-bg">
                                <motion.div
                                    className="progress-bar-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        <div className="search-wrapper">
                            <div className="search-bar">
                                <Search className="search-icon" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search lessons, symptoms, or topics..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button className="clear-search" onClick={() => setSearchQuery('')}>
                                        <X size={18} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {!searchQuery && (
                            <div className="phase-navigation">
                                {PHASES.map((phase) => (
                                    <button
                                        key={phase.id}
                                        className={`phase-btn ${activePhase === phase.id ? 'active' : ''}`}
                                        onClick={() => setActivePhase(phase.id)}
                                    >
                                        {phase.title.split(': ')[1]}
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </header>

                <div className="modules-container">
                    {!searchQuery && (
                        <div className="phase-intro">
                            <h2>{PHASES.find(p => p.id === activePhase)?.title}</h2>
                            <p>Moving through the cancer journey in a structured, progressive pathway.</p>
                        </div>
                    )}
                    {filteredModules.length > 0 ? (
                        filteredModules
                            .filter(m => searchQuery || PHASES.find(p => p.id === activePhase)?.indices.includes(education_modules.findIndex(em => em.id === m.id)))
                            .map((module) => {
                                const originalIndex = education_modules.findIndex(m => m.id === module.id);
                                return (
                                    <ModuleCard
                                        key={module.id}
                                        index={originalIndex}
                                        module={module}
                                        isExpanded={expandedModule === module.id}
                                        onToggle={() => toggleModule(module.id)}
                                        isCompleted={completedLessons.includes(module.id)}
                                        onComplete={() => toggleComplete(module.id)}
                                    />
                                );
                            })
                    ) : (
                        <div className="no-results">
                            <p>No lessons found matching "{searchQuery}"</p>
                            <button className="btn btn-secondary" onClick={() => setSearchQuery('')}>Clear Search</button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

interface ModuleCardProps {
    index: number;
    module: ModuleContent;
    isExpanded: boolean;
    onToggle: () => void;
    isCompleted: boolean;
    onComplete: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ index, module, isExpanded, onToggle, isCompleted, onComplete }) => {
    return (
        <motion.div
            className={`module-card glass-panel ${isExpanded ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
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
                        {index === 26 && <Info size={24} />}
                        {index === 27 && <TrendingUp size={24} />}
                        {index === 28 && <Activity size={24} />}
                        {index === 29 && <Thermometer size={24} />}
                        {index === 30 && <Wind size={24} />}
                        {index === 31 && <MessageSquare size={24} />}
                        {index === 32 && <Sparkles size={24} />}
                        {index === 33 && <Users size={24} />}
                        {index === 34 && <Moon size={24} />}
                        {index === 35 && <HelpCircle size={24} />}
                    </div>
                    <div>
                        <div className="lesson-meta">
                            <span className="lesson-badge">LESSON {index + 1}</span>
                            {isCompleted && <span className="completed-tag"><CheckCircle2 size={12} /> Completed</span>}
                        </div>
                        <h2 className="module-title">{module.title.split(': ').pop()}</h2>
                        <p className="module-desc-short">{module.description}</p>
                    </div>
                </div>
                <button className="expand-btn">
                    {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="module-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="module-content-inner">
                            {module.sections.map((section, sIdx) => (
                                <div key={sIdx} className="module-section">
                                    <h3 className="section-subtitle">{section.title}</h3>
                                    {section.content.map((block, bIdx) => (
                                        <div key={bIdx} className="content-block">
                                            {block.subtitle && <h4 className="content-heading">{block.subtitle}</h4>}
                                            {block.text && <p className="content-text">{block.text}</p>}
                                            {block.list && (
                                                <ul className="content-list">
                                                    {block.list.map((item, iIdx) => (
                                                        <li key={iIdx}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="lesson-footer">
                                <p>End of Lesson {index + 1}</p>
                                <button
                                    className={`btn ${isCompleted ? 'btn-secondary' : 'btn-primary pulse'}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onComplete();
                                    }}
                                >
                                    {isCompleted ? 'Mark as Incomplete' : 'Mark as Reviewed'}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Education;
