export interface ModuleContent {
    id: string;
    title: string;
    description: string;
    sections: {
        title: string;
        content: {
            subtitle?: string;
            text?: string;
            list?: string[];
            subsections?: {
                title: string;
                text?: string;
                list?: string[];
            }[];
        }[];
    }[];
}

export const education_modules: ModuleContent[] = [
    {
        id: 'module-1',
        title: 'Module 1: Understanding Cancer and the Caregiver Role',
        description: 'A foundational guide to understanding the disease and your crucial role in the care journey.',
        sections: [
            {
                title: '1.1 What is Cancer?',
                content: [
                    {
                        subtitle: 'Definition',
                        text: 'Cancer is a collection of related diseases characterized by the excessive growth of cells. These cells grow beyond boundaries, invade adjoining body parts, and may spread to other organs.'
                    },
                    {
                        subtitle: 'Metastasis',
                        text: 'When cancer cells spread to other parts of the body via the blood or lymphatic system, it is called metastatic or stage IV cancer.'
                    },
                    {
                        subtitle: 'Breast Cancer Specifics',
                        list: [
                            'Ductal carcinoma in situ (DCIS): The earliest form where cells are contained in the ducts and haven\'t spread.',
                            'Invasive breast cancer: Cancer cells have spread outside the ducts or lobes into surrounding tissue.'
                        ]
                    },
                    {
                        subtitle: 'Risk Factors',
                        text: 'Tobacco, chemicals, obesity, infections, radiation, autoimmune diseases, and certain dietary habits (red meat, alcohol).'
                    }
                ]
            },
            {
                title: '1.2 The Role of the Informal Carer',
                content: [
                    {
                        subtitle: 'Definition',
                        text: 'People taking care of a loved one with a chronic disease or disability are "informal carers".'
                    },
                    {
                        subtitle: 'Key Responsibilities',
                        list: [
                            'Daily Living: Helping with shopping, cooking, cleaning, and personal care.',
                            'Medical Management: Coordinating health interventions, ensuring adherence to medication, managing side effects, and communicating with professionals.',
                            'Emotional Support: Acting as the primary communication link with family and providing emotional stability.',
                            'Administrative: Managing financial costs and planning for the future.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-2',
        title: 'Module 2: Caregiver Wellbeing (Physical & Mental Health)',
        description: 'Strategies for maintaining your own health and wellbeing while caring for others.',
        sections: [
            {
                title: '2.1 Managing Stress and Depression',
                content: [
                    {
                        subtitle: 'Recognizing Stress',
                        text: 'Symptoms can be mental (anxiety, anger, sleeplessness) and physical (chest pains, dizziness, muscle spasms).'
                    },
                    {
                        subtitle: 'Coping Mechanisms',
                        list: [
                            'Talk to someone you trust rather than bottling feelings up.',
                            'Keep active with housework or routine to distract from negative thoughts.',
                            'Participate in self-help groups to receive advice and training on relaxation.'
                        ]
                    },
                    {
                        subtitle: 'Seeking Help',
                        text: 'If depression is suspected, see a General Practitioner (GP) immediately for potential medication or talking treatments like CBT.'
                    }
                ]
            },
            {
                title: '2.2 Physical Health Maintenance',
                content: [
                    {
                        subtitle: 'Importance',
                        text: 'Physical activity helps relax the body, reduce stress, and lower the risk of chronic diseases like hypertension.'
                    },
                    {
                        subtitle: 'Actionable Tips',
                        list: [
                            'Make it social: Exercise with friends to combine fitness with social connection.',
                            'Routine: Develop a routine to help organize caring activities.',
                            'Diet: Follow a balanced diet and avoid alcohol, as it can worsen depression.',
                            'Respite: Arrange a break once a month by asking family or agencies to step in.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-3',
        title: 'Module 3: Balancing Work and Care',
        description: 'Navigating professional responsibilities alongside caregiving duties.',
        sections: [
            {
                title: '3.1 Rights at Work',
                content: [
                    {
                        subtitle: 'Statutory Rights',
                        text: 'Carers may have rights to request flexible working, time off in emergencies, parental leave, and protection from discrimination.'
                    },
                    {
                        subtitle: 'Flexible Working Options',
                        text: 'This can include working from home, compressed hours, or adjusting start/finish times.'
                    },
                    {
                        subtitle: 'Career Breaks',
                        text: 'Some employers offer unpaid or paid sabbaticals that allow carers to keep their options open.'
                    }
                ]
            },
            {
                title: '3.2 Returning to Work',
                content: [
                    {
                        subtitle: 'Skill Recognition',
                        text: 'Carers develop valuable transferable skills during their time away from the workforce.'
                    },
                    {
                        subtitle: 'Management',
                        text: 'Budgeting, time management, and prioritizing.'
                    },
                    {
                        subtitle: 'Communication',
                        text: 'Negotiating with professionals and providing emotional support.'
                    },
                    {
                        subtitle: 'Technical',
                        text: 'Medical and personal care tasks.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-4',
        title: 'Module 4: Managing the Disease Trajectory',
        description: 'Understanding treatment paths, financial planning, and end-of-life care.',
        sections: [
            {
                title: '4.1 Treatment Management',
                content: [
                    {
                        subtitle: 'Types of Care',
                        list: [
                            'Curative: Aims to eliminate cancer cells and achieve complete remission.',
                            'Palliative: Aims to improve quality of life and control symptoms when a cure is not possible.',
                            'At-Home Care: Requires learning technical tasks (injections, dressings) and should be supported by training from health professionals.',
                            'Managing Side Effects: Monitor for pain, eating problems, and fatigue; early pain treatment is usually more effective.'
                        ]
                    }
                ]
            },
            {
                title: '4.2 Financial and Legal Planning',
                content: [
                    {
                        subtitle: 'Financial Burden',
                        text: 'Costs may include non-reimbursed medicine, travel, and additional child or elderly care.'
                    },
                    {
                        subtitle: 'Advice',
                        text: 'Seek information on financial support from welfare agencies and cancer organizations before borrowing money.'
                    },
                    {
                        subtitle: 'Advance Care Planning',
                        text: 'Use tools to help make decisions and plan ahead, especially regarding end-of-life preferences.'
                    }
                ]
            },
            {
                title: '4.3 End of Life and Bereavement',
                content: [
                    {
                        subtitle: 'Palliative Transition',
                        text: 'When cancer is no longer responsive to curative treatment, the focus shifts to comfort; this may involve a change in the healthcare team.'
                    },
                    {
                        subtitle: 'Grief',
                        text: 'Bereavement is often misunderstood and can be isolating; support can be accessed after death and some countries offer specific benefits.'
                    }
                ]
            }
        ]
    }
];
