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
    Flame,
    TrendingUp,
    Home,
    MessageSquare,
    DollarSign,
    Baby,
    Smile,
    UserCircle,
    Activity,
    Wind,
    Compass,
    AlertTriangle,
    MinusCircle,
    MapPin,
    Users2,
    PieChart,
    ListChecks,
    BookOpen,
    Thermometer,
    Layout
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
                        <div className="etymology-box">
                            <span className="origin-label">Origin:</span>
                            <p>Derived from the Latin <em>palliare</em>, meaning <strong>“to cloak.”</strong></p>
                            <p className="origin-desc">Imagine an extra layer of comfort and protection shielding you from the harms associated with illness.</p>
                        </div>
                        <p>
                            It is an extra layer of support on top of the care you already receive. It focuses on your own
                            unique care goals in a way that aligns with your values.
                        </p>
                        <div className="clinical-badge">
                            <BookOpen size={16} />
                            <span>Recommended within <strong>8 weeks</strong> of diagnosis (ASCO)</span>
                        </div>
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
                            <span>ASCO (American Society of Clinical Oncology) encourages the integration of palliative care services into all standard oncology practices.</span>
                        </div>
                    </motion.section>
                </div>

                {/* Myths vs Reality Section */}
                <section className="myths-reality-section">
                    <h2 className="sub-section-title">Myths vs. Reality</h2>
                    <p className="section-subtitle">A 2020 study showed 87% of people who know the term "Palliative Care" still have misconceptions.</p>
                    <div className="myths-grid">
                        <div className="myth-card">
                            <div className="myth-header">
                                <AlertTriangle className="icon-myth" size={20} />
                                <span>Myth: It's only for the end of life</span>
                            </div>
                            <p className="reality-text"><strong>Reality:</strong> 44% of people associate it with death, but it is actually beneficial at <em>any stage</em> of a serious illness.</p>
                        </div>
                        <div className="myth-card">
                            <div className="myth-header">
                                <MinusCircle className="icon-myth" size={20} />
                                <span>Myth: It means "Giving Up"</span>
                            </div>
                            <p className="reality-text"><strong>Reality:</strong> Palliative care can be given <em>concurrently</em> with curative treatments, potentially extending survival.</p>
                        </div>
                        <div className="myth-card">
                            <div className="myth-header">
                                <ArrowRightLeft className="icon-myth" size={20} />
                                <span>Myth: It's the same as Hospice</span>
                            </div>
                            <p className="reality-text"><strong>Reality:</strong> 38% equate the two. Unlike hospice, palliative care can start at diagnosis and continue during active treatment.</p>
                        </div>
                    </div>
                </section>

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
                            <div className="stat-label">Only 14% of those in need receive global services</div>
                        </div>
                        <div className="stat-card">
                            <MapPin className="stat-icon" />
                            <div className="stat-value">17%</div>
                            <div className="stat-label">Limited access in rural hospitals</div>
                        </div>
                        <div className="stat-card">
                            <Users2 className="stat-icon" />
                            <div className="stat-value">{">"}80%</div>
                            <div className="stat-label">Programs report insufficient capacity for demand</div>
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

                {/* Pain Management & Cost Benefit Section */}
                <div className="palliative-grid" style={{ marginBottom: '4rem' }}>
                    <motion.section
                        className="glass-panel"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{ padding: '2.5rem' }}
                    >
                        <div className="section-icon-row">
                            <Stethoscope size={32} />
                            <h2>Pain Management Expertise</h2>
                        </div>
                        <p>
                            Many survivors worry about addiction or stigma when prescribed opioids.
                            Palliative care teams are specialized resources for navigating these concerns,
                            optimizing pain regimens through expert provider-patient communication.
                        </p>
                    </motion.section>

                    <motion.section
                        className="glass-panel"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{ padding: '2.5rem' }}
                    >
                        <div className="section-icon-row">
                            <DollarSign size={32} />
                            <h2>Reduction in Medical Costs</h2>
                        </div>
                        <p>
                            Research shows that beginning palliative care within <strong>three days of hospital admission</strong>
                            reduces overall costs for all adults, with even greater savings for cancer patients.
                        </p>
                    </motion.section>
                </div>

                {/* Advanced Symptom Management Hub */}
                <section className="clinical-standards-section">
                    <h2 className="sub-section-title">Clinical Management Standards</h2>
                    <div className="standards-grid">
                        {/* The Analgesic Ladder */}
                        <motion.div className="glass-panel ladder-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                            <div className="section-icon-row">
                                <Thermometer size={24} />
                                <h3>The Analgesic Ladder (WHO)</h3>
                            </div>
                            <p className="ladder-desc">A sequential 3-step strategy for optimal pain control:</p>
                            <div className="ladder-visual">
                                <div className="step step-3">
                                    <span className="step-label">Step 3: Severe Pain</span>
                                    <span className="step-content">Strong Opioids (Morphine, Oxycodone, Fentanyl)</span>
                                </div>
                                <div className="step step-2">
                                    <span className="step-label">Step 2: Moderate Pain</span>
                                    <span className="step-content">Weak Opioids (Codeine, Tramadol) + Non-Opioids</span>
                                </div>
                                <div className="step step-1">
                                    <span className="step-label">Step 1: Mild Pain</span>
                                    <span className="step-content">Non-Opioids (Acetaminophen, NSAIDs)</span>
                                </div>
                            </div>
                            <div className="clinical-note">
                                <strong>NCCN Guideline:</strong> Patients should be screened for pain at <em>every</em> contact.
                            </div>
                        </motion.div>

                        {/* Specialist Interventions */}
                        <motion.div className="glass-panel" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                            <div className="section-icon-row">
                                <Layout size={24} />
                                <h3>Complex Symptom Strategies</h3>
                            </div>
                            <div className="symptom-accordion">
                                <details>
                                    <summary>Dyspnea (Shortness of Breath)</summary>
                                    <div className="details-content">
                                        <p>Management focuses on both physical and emotional needs:</p>
                                        <ul>
                                            <li><strong>For Hypoxia:</strong> Oxygen therapy and fans/cooler airflow.</li>
                                            <li><strong>For Anxiety:</strong> Benzodiazepines as adjunct to morphine.</li>
                                            <li><strong>Secretions:</strong> Use of scopolamine near end-of-life.</li>
                                        </ul>
                                    </div>
                                </details>
                                <details>
                                    <summary>Nutrition & Cachexia</summary>
                                    <div className="details-content">
                                        <p>Focus on patient goals and comfort:</p>
                                        <ul>
                                            <li><strong>Appetite:</strong> Short-term corticosteroids or progestins.</li>
                                            <li><strong>Ethical Note:</strong> Withholding/withdrawing nutrition is permissible and may improve comfort in advanced stages.</li>
                                            <li><strong>Normalcy:</strong> Absence of hunger/thirst is biological in advanced cancer.</li>
                                        </ul>
                                    </div>
                                </details>
                                <details>
                                    <summary>Palliative Sedation</summary>
                                    <div className="details-content">
                                        <p>For refractory distress that cannot be controlled otherwise:</p>
                                        <ul>
                                            <li>Reserved for very terminal stages (hours to days).</li>
                                            <li>Uses the lowest level of sedation necessary for relief.</li>
                                            <li>Multidisciplinary evaluation is mandatory.</li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Advanced Care Planning */}
                <section className="advanced-planning-section">
                    <div className="glass-panel acp-card">
                        <div className="acp-header">
                            <ListChecks size={32} />
                            <div>
                                <h2>Advanced Care Planning</h2>
                                <p>Essential documents to discuss with your oncology team early.</p>
                            </div>
                        </div>
                        <div className="acp-checklist">
                            <div className="check-item"><div className="dot"></div> <span><strong>Code Status:</strong> Your preferences for resuscitation (CPR/Intubation).</span></div>
                            <div className="check-item"><div className="dot"></div> <span><strong>Living Wills:</strong> Instructions for medical care if you cannot speak.</span></div>
                            <div className="check-item"><div className="dot"></div> <span><strong>Advanced Directives:</strong> Legally appointing a health care surrogate/proxy.</span></div>
                            <div className="check-item"><div className="dot"></div> <span><strong>DNR Orders:</strong> Out-of-hospital "Do Not Resuscitate" documentation.</span></div>
                        </div>
                    </div>
                </section>

                {/* Equity and Awareness Gaps */}
                <section className="awareness-gap-section glass-panel">

                    <div className="equity-content">
                        <div className="text-content">
                            <div className="badge secondary">Awareness & Equity</div>
                            <h2>Addressing the Knowledge Gap</h2>
                            <p>
                                <strong>66% of survivors</strong> report no knowledge of palliative care.
                                Furthermore, survivors of color and Hispanic communities are significantly
                                less likely to report knowledge or have access to these services.
                            </p>
                            <p>
                                Addressing these communication barriers and trust issues is a priority to ensure
                                equitable access to clinical benefits.
                            </p>
                        </div>
                        <div className="gap-graphic">
                            <PieChart size={120} opacity={0.1} />
                        </div>
                    </div>
                </section>


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

                {/* Benefits Section */}
                <section className="benefits-section-new">
                    <h2 className="sub-section-title">The Benefits of Integrated Support</h2>
                    <div className="benefits-layout">
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                            <TrendingUp className="b-icon" />
                            <h3>Extended Survival</h3>
                            <p>Recent studies suggest that starting palliative care soon after a cancer diagnosis may actually extend survival.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                            <Activity className="b-icon" />
                            <h3>Symptom Mastery</h3>
                            <p>People report less severe pain, shortness of breath, depression, and nausea through expert management.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                            <ShieldCheck className="b-icon" />
                            <h3>Reduced Hospitalization</h3>
                            <p>Patients spend less time in the ICU and ER, and are less likely to be re-admitted after going home.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Age Specific Needs */}
                <section className="age-needs-section">
                    <h2 className="sub-section-title">Care Across the Lifespan</h2>
                    <div className="age-grid">
                        <div className="age-card child">
                            <Baby className="icon" />
                            <h4>Children</h4>
                            <ul>
                                <li>Dealing with fear and anxiety</li>
                                <li>Reducing isolation from friends/school</li>
                                <li>Age-appropriate illness explanation</li>
                            </ul>
                        </div>
                        <div className="age-card teen">
                            <Smile className="icon" />
                            <h4>Teens & Young Adults</h4>
                            <ul>
                                <li>Balancing independence with parental support</li>
                                <li>Concerns about dating, careers, and future</li>
                                <li>Integrating into clinical settings with peers</li>
                            </ul>
                        </div>
                        <div className="age-card senior">
                            <UserCircle className="icon" />
                            <h4>Older Adults</h4>
                            <ul>
                                <li>Managing multiple chronic health problems</li>
                                <li>Addressing lower energy and functional levels</li>
                                <li>Higher risk for severe treatment side effects</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Where Care Happens */}
                <section className="location-section glass-panel">
                    <div className="location-content">
                        <h2><Home size={32} /> Wherever You Call Home</h2>
                        <p>
                            Palliative care is flexible. You can receive it in the hospital, at cancer centers,
                            outpatient clinics, or your own residence—including nursing homes and assisted living.
                        </p>
                        <div className="location-tags">
                            <span>Your House</span>
                            <span>Care Facilities</span>
                            <span>In-Patient Units</span>
                        </div>
                    </div>
                </section>

                {/* FAQ / Insurance and Advocating */}
                <section className="practical-matters">
                    <div className="split-grid">
                        <div className="glass-panel">
                            <h3><DollarSign size={24} /> Insurance & Costs</h3>
                            <p>Most private plans, Medicaid, Medicare, and VA coverage include palliative care services.</p>
                            <div className="alert-tip">
                                <strong>Self-Advocacy:</strong> If your team doesn't bring it up, you or your family
                                can explicitly ask for a palliative referral.
                            </div>
                        </div>
                        <div className="glass-panel">
                            <h3><MessageSquare size={24} /> Questions to Ask</h3>
                            <ul className="faq-list">
                                <li>Who will be part of my specific team?</li>
                                <li>Will my insurance cover these visits?</li>
                                <li>How will you communicate with my oncologist?</li>
                                <li>What happens if my symptoms get worse?</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Holistic Relief Section */}
                <section className="holistic-relief-section">
                    <h2 className="sub-section-title">Beyond Medication: Holistic Relief</h2>
                    <div className="holistic-grid">
                        <div className="glass-panel h-item">
                            <Wind className="h-icon" />
                            <h4>Mind-Body Techniques</h4>
                            <p>Learning breathing and relaxation exercises to manage anxiety and shortness of breath.</p>
                        </div>
                        <div className="glass-panel h-item">
                            <Compass className="h-icon" />
                            <h4>Symptom Education</h4>
                            <p>Tips for improving sleep hygiene, cognitive exercises, and fatigue management strategies.</p>
                        </div>
                    </div>
                </section>

                {/* Getting Started Roadmap */}
                <section className="roadmap-section">
                    <h2 className="sub-section-title">A 4-Step Roadmap to Your Care</h2>
                    <div className="roadmap-grid">
                        <div className="roadmap-step">
                            <div className="step-num">1</div>
                            <h4>Talk to Your Doctor</h4>
                            <p>Ask for a referral. Specifically bring up how palliative care can help manage your current symptoms.</p>
                        </div>
                        <div className="roadmap-step">
                            <div className="step-num">2</div>
                            <h4>Find a Provider</h4>
                            <p>Use directories like GetPalliativeCare.org to find trusted specialists in your ZIP code and setting.</p>
                        </div>
                        <div className="roadmap-step">
                            <div className="step-num">3</div>
                            <h4>Schedule & Attend</h4>
                            <p>Encourage loved ones to attend. Confirm they are in-network (most insurance, Medicare, & VA covers it).</p>
                        </div>
                        <div className="roadmap-step">
                            <div className="step-num">4</div>
                            <h4>Assess Your Goals</h4>
                            <p>The team will spend time getting to know you to develop a care plan that aligns with your life goals.</p>
                        </div>
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
