export interface QuestionCategory {
    id: string;
    category: string;
    icon: string;
    questions: string[];
}

export const patient_questions: QuestionCategory[] = [
    {
        id: 'testing',
        category: 'Questions about Cancer Testing',
        icon: 'FileText',
        questions: [
            "What tests will I have?",
            "Do the tests have any risks?",
            "Do I need to do anything to prepare for testing?",
            "Should I bring someone with me to the appointments?",
            "Where do I go for testing, and how long will it take?",
            "If any of the tests will hurt, what will you do to make me comfortable?",
            "How soon will I know the results and who will explain them to me?",
            "How can I get a copy of the pathology report and other test results?"
        ]
    },
    {
        id: 'treatment',
        category: 'Questions about Treatment Options',
        icon: 'Stethoscope',
        questions: [
            "What are my treatment options?",
            "What will happen if I do nothing?",
            "Are you suggesting options other than what NCCN recommends? If yes, why?",
            "How do my age, sex, overall health, and other factors affect my options?",
            "What if I am pregnant, breastfeeding, or planning to become pregnant?",
            "Does any option offer a cure or long-term cancer control?",
            "How do I get a second opinion?",
            "How long do I have to decide about treatment?"
        ]
    },
    {
        id: 'side-effects',
        category: 'Questions about Side Effects',
        icon: 'Activity',
        questions: [
            "What are the possible side effects of treatment?",
            "Does the cancer itself cause any side effects?",
            "Which side effects are most common and how long do they usually last?",
            "Which side effects are serious or life-threatening?",
            "Are there any long-term or permanent side effects?",
            "What symptoms should I report right away, and who do I contact?",
            "What can I do to prevent or relieve the side effects of treatment?",
            "Do any medications worsen side effects?",
            "Will you stop or change treatment if there are serious side effects?"
        ]
    },
    {
        id: 'expectations',
        category: 'Questions about What to Expect',
        icon: 'Clock',
        questions: [
            "Does this hospital or cancer center offer the best treatment for me?",
            "Do I have a choice of when to begin treatment?",
            "How long will treatment last?",
            "Who should I contact with questions or concerns if the office is closed?",
            "How will you know if treatment is working?",
            "What are the chances of the cancer worsening or returning?",
            "What follow-up care is needed after treatment?"
        ]
    },
    {
        id: 'resources',
        category: 'Questions about Resources and Support',
        icon: 'HeartHandshake',
        questions: [
            "Who can I talk to about help with housing, food, and other basic needs?",
            "What assistance is available for transportation, childcare, and home care?",
            "Who can tell me what my options for health insurance are and assist me with applying for insurance coverage?",
            "How much will I have to pay for my treatment? What help is available to pay for medicines and other treatment?",
            "Who can help me with my concerns about work or school?",
            "How can I connect with others and build a support system?",
            "Who can I talk to if I don’t feel safe at home, at work, or in my neighborhood?"
        ]
    }
];
