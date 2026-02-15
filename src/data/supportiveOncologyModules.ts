export interface ActionStep {
    text: string;
    link?: string;
}

export interface SupportiveModule {
    id: string;
    category: 'Emotional' | 'Physical' | 'Practical' | 'Family' | 'Understanding';
    title: string;
    screeningQuestion: string;
    screeningLogic?: string;
    educationalContent: {
        intro: string;
        bullets?: string[];
        strategiesTitles?: string[];
        strategies?: string[];
    };
    actionableSteps: ActionStep[];
    redFlags?: string[];
}

export const supportive_modules: SupportiveModule[] = [
    // MODULE A: Emotional
    {
        id: 'anxiety-stress',
        category: 'Emotional',
        title: 'Anxiety & Stress',
        screeningQuestion: 'Over the last 2 weeks, have you been feeling nervous, anxious, or on edge? Have you been unable to stop worrying?',
        educationalContent: {
            intro: 'A disease such as cancer can be one of the most stressful experiences of a life. Nearly half of cancer patients report experiencing significant distress.',
            bullets: [
                'Stress has not been shown to cause cancer, but long-term stress can weaken the immune system.',
                'Untreated anxiety can make managing pain and getting a good night\'s sleep more difficult.'
            ],
            strategiesTitles: ['Deep Breathing', 'Progressive Muscle Relaxation', 'Guided Imagery'],
            strategies: [
                'Done slowly for a few breaths in and out to reduce the body\'s natural fight or flight response.',
                'Lightly tensing one muscle group after another beginning at the toes and slowly relaxing them.',
                'Uses your imagination to direct the mind\'s attention on a peaceful scene.'
            ]
        },
        actionableSteps: [
            { text: 'Ask your care team about psychological treatment (counseling).' },
            { text: 'Discuss medication options with your doctor.' },
            { text: 'Visit Cancer.net for more anxiety management tips', link: 'https://www.cancer.net' }
        ]
    },
    {
        id: 'depression',
        category: 'Emotional',
        title: 'Depression',
        screeningQuestion: 'In the past 2 weeks, have you felt down, depressed, or hopeless? Have you lost interest in things you used to enjoy?',
        educationalContent: {
            intro: 'Depression is more than just sadness; it is a clinical condition that affects your ability to function and enjoy life.',
            bullets: [
                'About 1 in 4 people with cancer experience clinical depression.',
                'It is important to distinguish between passing sadness and persistent depression.'
            ]
        },
        actionableSteps: [
            { text: 'Request a referral to a psycho-oncologist.' },
            { text: 'Look into support groups for patients in similar situations.' }
        ],
        redFlags: ['Thoughts of hurting yourself', 'Complete social withdrawal', 'Inability to perform basic self-care']
    },

    // MODULE B: Physical
    {
        id: 'fatigue',
        category: 'Physical',
        title: 'Fatigue & Low Energy',
        screeningQuestion: 'In the past 7 days, have you felt fatigued (low energy) or had trouble starting things because you were tired?',
        educationalContent: {
            intro: 'Fatigue is the most common side effect of cancer treatment. It is different from just being "tired" and may not get better with sleep.',
            strategiesTitles: ['Pacing', 'Prioritize', 'Sleep Hygiene'],
            strategies: [
                'Adjust activity to the rhythm of the fatigue.',
                'Postpone nonessential activities and concentrate on meaningful interactions.',
                'Limit naps to avoid disrupting night-time sleep.'
            ]
        },
        actionableSteps: [
            { text: 'Track your energy levels throughout the day.' },
            { text: 'Discuss "Energy Conservation" with your nursing team.' }
        ],
        redFlags: ['Fatigue score is Severe (19+)', 'Dizziness or fainting', 'Shortness of breath with minimal exertion']
    },
    {
        id: 'pain-mgmt',
        category: 'Physical',
        title: 'Pain Management',
        screeningQuestion: 'Are you experiencing any physical pain that interferes with your daily activities or mood?',
        educationalContent: {
            intro: 'Cancer pain is almost always manageable. The goal is to maximize your comfort and function.',
            bullets: [
                'Early intervention is more effective than waiting for pain to become severe.',
                'A "Pain Diary" helps your doctor adjust medications accurately.'
            ]
        },
        actionableSteps: [
            { text: 'Start a Daily Pain Diary (found in our Toolkit).' },
            { text: 'Talk to your doctor about a multidisciplinary pain management plan.' }
        ]
    },

    // MODULE C: Practical
    {
        id: 'financial-insurance',
        category: 'Practical',
        title: 'Financial & Insurance',
        screeningQuestion: 'Do you need help to pay for your health insurance? Do you understand your Healthcare Insurance and Benefits?',
        educationalContent: {
            intro: 'Understanding your policy is key to managing the financial impact of cancer care.',
            bullets: [
                'Read and understand which services are covered and your out-of-pocket responsibilities.',
                'If denied coverage, you have the right to meet with a patient advocate.'
            ]
        },
        actionableSteps: [
            { text: 'Enroll in insurance via the Affordable Care Act (ACA) website if uninsured.', link: 'https://www.healthcare.gov' },
            { text: 'Refer to a financial counselor or hospital billing department.' },
            { text: 'In India: Check for PM-JAY (Ayushman Bharat) eligibility.', link: 'https://pib.gov.in' }
        ]
    },

    // MODULE E: Understanding
    {
        id: 'understanding-diagnosis',
        category: 'Understanding',
        title: 'Understanding Diagnosis',
        screeningQuestion: 'Do you feel you understand your illness? What would you like to understand better?',
        educationalContent: {
            intro: 'Cancer is a name given to a group of related diseases where cells divide without stopping.',
            bullets: [
                'Staging is the process of using tests to find out how much cancer is in the body and where it is.',
                'Medical terms can be confusing; always ask for clarification.'
            ]
        },
        actionableSteps: [
            { text: 'Ask your care team to explain medical terms you don\'t understand.' },
            { text: 'Consider bringing a family member to take notes at appointments.' },
            { text: 'Request permission to record conversations with your care team.' }
        ]
    },
    {
        id: 'advance-care-planning',
        category: 'Understanding',
        title: 'Advance Care Planning',
        screeningQuestion: 'Have you discussed your future care preferences with your family or physician?',
        educationalContent: {
            intro: 'Advance Care Planning (ACP) involves thinking about and sharing your wishes for future medical care.',
            strategiesTitles: ['Living Will', 'POLST/DNR', 'Indian Context'],
            strategies: [
                'A legal document specifying what treatments you want if you can\'t speak for yourself.',
                'Provider Orders for Life-Sustaining Treatment; portable medical orders.',
                'In India: The Supreme Court has recognized the "Common Cause" judgement allowing for Living Wills (Advance Directives).'
            ]
        },
        actionableSteps: [
            { text: 'Complete an Advance Directive document.' },
            { text: 'Appoint a Healthcare Proxy (Decision Maker).' },
            { text: 'Discuss end-of-life preferences with your primary oncologist.' }
        ]
    }
];
