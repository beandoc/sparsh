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
    },
    {
        id: 'module-5',
        title: 'Module 5: Navigating Your Emotions',
        description: 'Paraphrased guide on handling the complex emotional landscape after a cancer diagnosis.',
        sections: [
            {
                title: '5.1 Common Responses to Diagnosis',
                content: [
                    {
                        subtitle: 'The Initial Shock',
                        text: 'Learning you have cancer is often a profound shock. You may feel numb, frightened, or even angry. These feelings can fluctuate by the minute, and that is completely normal.'
                    },
                    {
                        subtitle: 'Finding Hope',
                        text: 'Hope is a powerful anchor. Remember: treatment is more successful than ever, millions are survivors, and a positive outlook can help your body cope with the journey.'
                    },
                    {
                        subtitle: 'Working Through Denial',
                        text: 'Denial is a natural defense that gives you time to adjust. However, if it lasts too long, it might delay necessary treatment. Most people naturally move toward acceptance as treatment begins.'
                    }
                ]
            },
            {
                title: '5.2 Managing Difficult Feelings',
                content: [
                    {
                        subtitle: 'Anger and Anxiety',
                        text: 'It is common to ask "Why me?". Anger often masks deeper feelings of helplessness or fear. Talking about these feelings with loved ones is often the best way to release the pressure.'
                    },
                    {
                        subtitle: 'Understanding Stress',
                        text: 'Stress affects the body physically—causing headaches, sleep issues, or loss of appetite. You can control stress through deep breathing, music, hobbies, or gentle exercise.'
                    },
                    {
                        subtitle: 'Loneliness and Guilt',
                        text: 'Even in a crowded room, you might feel alone. You may also feel guilty for being a "burden." These are misconceptions; sharing your journey with others or joining support groups can cut loneliness in half.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-6',
        title: 'Module 6: Family and Communication',
        description: 'Strategies for managing changing roles and communicating with loved ones.',
        sections: [
            {
                title: '6.1 Shifting Family Dynamics',
                content: [
                    {
                        subtitle: 'Changing Roles',
                        text: 'Cancer affects the whole family unit. As routines shift, roles often change. Children may do more chores, and partners may handle new financial tasks. Open communication helps prevent strain.'
                    },
                    {
                        subtitle: 'Asking for Help',
                        text: 'Requesting help with daily tasks like cooking or driving is a sign of practical strength, not weakness. It allows your family to feel they are actively contributing to your care.'
                    }
                ]
            },
            {
                title: '6.2 Effective Communication',
                content: [
                    {
                        subtitle: 'Finding a Listener',
                        text: 'Find someone who can listen without judging or trying to "fix" everything immediately. Sometimes, you just need to express your anger or fear out loud.'
                    },
                    {
                        subtitle: 'Honesty with Children',
                        text: 'Children sense when things are wrong. Simple, honest explanations and reassurance of your love can help them navigate their own fears.'
                    },
                    {
                        subtitle: 'Talking to Your Care Team',
                        text: 'Regain control by learning about your cancer. Ask questions whenever you don\'t understand medical terms, and consider recording conversations to review them later.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-7',
        title: 'Module 7: Partners and Spouses',
        description: 'Supporting each other and maintaining closeness through treatment.',
        sections: [
            {
                title: '7.1 Navigating Fear Together',
                content: [
                    {
                        subtitle: 'Shared Anxiety',
                        text: 'Your partner may be just as frightened as you are. It is common for partners to try and be "perfect" caregivers, which can lead to exhaustion. Discussing fears openly helps both of you feel less helpless.'
                    },
                    {
                        subtitle: 'Joint Decision Making',
                        text: 'Involving your partner in treatment discussions helps you both plan for the future. Learning about symptoms and choices together reduces the burden of the unknown.'
                    }
                ]
            },
            {
                title: '7.2 Maintaining Connection',
                content: [
                    {
                        subtitle: 'Staying Close',
                        text: 'Intimacy changes during treatment. While you may not feel interested in sex due to fatigue or pain, closeness can be maintained through touching, holding, and cuddling. Let your partner help with small tasks like fluffing a pillow—it helps them feel needed.'
                    },
                    {
                        subtitle: 'The Need for Respite',
                        text: 'Your partner needs time to rest and manage their own emotions. Encourage them to take "time away" for their own chores and hobbies. This balance is essential for long-term caregiving.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-8',
        title: 'Module 8: Children and Teens',
        description: 'Age-appropriate ways to talk about cancer and support your children.',
        sections: [
            {
                title: '8.1 Honest Conversations',
                content: [
                    {
                        subtitle: 'Telling the Truth',
                        text: 'Children as young as 18 months sense when things are wrong. Being honest is better than letting them imagine the worst. Use simple terms like "medicine" instead of "chemotherapy."'
                    },
                    {
                        subtitle: 'What Children Need to Know',
                        list: [
                            'Nothing they did or said caused the cancer.',
                            'Cancer is not contagious.',
                            'It is okay to be scared or angry.',
                            'They will always be taken care of.'
                        ]
                    }
                ]
            },
            {
                title: '8.2 Understanding Reactions',
                content: [
                    {
                        subtitle: 'Common Behaviors',
                        text: 'Children may react by being clingy, getting into trouble at school, or regressing to younger behaviors. Teens especially struggle as they try to balance independence with the need to help at home.'
                    },
                    {
                        subtitle: 'Building a Village',
                        text: 'Involve other trusted adults—teachers, coaches, or relatives—who can provide extra attention and a safe space for your children to talk.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-9',
        title: 'Module 9: Adult Children and Aging Parents',
        description: 'Managing role reversals and care for older family members.',
        sections: [
            {
                title: '9.1 Supporting Adult Children',
                content: [
                    {
                        subtitle: 'Changing Dynamics',
                        text: 'Adult children often become the "rock" of the family, which can be hard when they have their own jobs and families. Be honest about your wishes for the future and involve them in medical visits.'
                    },
                    {
                        subtitle: 'Emotional Transparency',
                        text: 'It is better to share your feelings—even the difficult ones like sadness or anger—than to hide them. Your adult children may feel guilty about not being able to do enough; open talk eases this burden.'
                    }
                ]
            },
            {
                title: '9.2 Caring for Aging Parents',
                content: [
                    {
                        subtitle: 'The Sandwich Generation',
                        text: 'Many patients are also caregivers for their own parents. You may need to ask for help with your parents\' care while you are in treatment. Don\'t hesitate to use community agencies or other family members to step in.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-10',
        title: 'Module 10: Building Your Support Network',
        description: 'How to communicate your needs and find the right listeners.',
        sections: [
            {
                title: '10.1 The Art of Sharing',
                content: [
                    {
                        subtitle: 'Finding a Good Listener',
                        text: 'Not everyone is equipped to handle the weight of cancer. Find people who can listen without giving unsolicited advice. Sometimes a support group of peers is more helpful than family.'
                    },
                    {
                        subtitle: 'Timing and Truth',
                        text: 'It is okay to say "I don\'t want to talk about it right now." Be true to your feelings. If you are angry, express it toward the cancer rather than the person helping you.'
                    }
                ]
            },
            {
                title: '10.2 Helping Friends Help You',
                content: [
                    {
                        subtitle: 'The "Need List"',
                        text: 'Friends want to help but often don\'t know how. Make a specific list: "Babysit on Tuesday," "Bring a frozen meal," "Pick up groceries." This gives them a clear, helpful role.'
                    }
                ]
            }
        ]
    }
];
