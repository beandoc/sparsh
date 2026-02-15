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
    },
    {
        id: 'module-11',
        title: 'Module 11: Understanding the Cellular Breakdown',
        description: 'How cancer cells differ from normal cells and how they survive.',
        sections: [
            {
                title: '11.1 The Definition of Cancer',
                content: [
                    {
                        subtitle: 'Uncontrolled Growth',
                        text: 'Cancer is a disease where body cells grow uncontrollably and spread. Normally, cells divide to form new ones as needed. Cancer happens when this orderly process breaks down and abnormal cells multiply.'
                    }
                ]
            },
            {
                title: '11.2 Cancer Cells vs. Normal Cells',
                content: [
                    {
                        subtitle: 'Distinctive Behaviors',
                        list: [
                            'Independence: They grow without signals from the body.',
                            'Immortality: They ignore "stop" signs like programmed cell death (apoptosis).',
                            'Invasion: They move into nearby tissues and distant locations.',
                            'Angiogenesis: They trick the body into growing blood vessels to supply the tumor with oxygen and nutrients.',
                            'Immune Evasion: They can hide from or "convince" the immune system to protect them.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-12',
        title: 'Module 12: Why Cancer Develops',
        description: 'The genetic basis of cancer and the "drivers" behind it.',
        sections: [
            {
                title: '12.1 A Genetic Disease',
                content: [
                    {
                        subtitle: 'DNA Changes',
                        text: 'Cancer is caused by changes to genes that control cell growth. These can happen from division errors, environmental damage (tobacco, UV rays), or heredity.'
                    }
                ]
            },
            {
                title: '12.2 The Three Main "Drivers"',
                content: [
                    {
                        subtitle: 'Proto-oncogenes',
                        text: 'The "gas pedals" for growth. When they become oncogenes, they stay "on," causing uncontrolled growth.'
                    },
                    {
                        subtitle: 'Tumor Suppressor Genes',
                        text: 'The "brakes." When these are inactivated, cells divide without stopping.'
                    },
                    {
                        subtitle: 'DNA Repair Genes',
                        text: 'The "mechanics." When these fail, mutations pile up, making cells more likely to become cancerous.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-13',
        title: 'Module 13: Tissue Changes and Metastasis',
        description: 'Recognizing non-cancerous changes and understanding how cancer spreads.',
        sections: [
            {
                title: '13.1 Non-Cancerous Tissue Changes',
                content: [
                    {
                        subtitle: 'Hyperplasia',
                        text: 'Rapid cell multiplication where tissue still looks normal. Often caused by irritation.'
                    },
                    {
                        subtitle: 'Dysplasia',
                        text: 'Cells look abnormal under a microscope. This is a more advanced buildup and needs monitoring.'
                    },
                    {
                        subtitle: 'Carcinoma in situ',
                        text: 'Often called "Stage 0." Abnormal cells that haven\'t invaded nearby tissue yet but often require treatment.'
                    }
                ]
            },
            {
                title: '13.2 When Cancer Spreads',
                content: [
                    {
                        subtitle: 'Metastasis',
                        text: 'Metastasis is the process where cells travel via blood or lymph to form new tumors. Even if it spreads to the lungs, a breast cancer remains "metastatic breast cancer."'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-14',
        title: 'Module 14: Glossary of Cancer Types',
        description: 'Identifying the different categories of cancer by cell origin.',
        sections: [
            {
                title: '14.1 Main Categories',
                content: [
                    {
                        subtitle: 'Common Origins',
                        list: [
                            'Carcinoma: Starts in epithelial cells (the most common type).',
                            'Sarcoma: Starts in bone or soft tissues like muscle and fat.',
                            'Leukemia: Starts in blood-forming tissue (bone marrow); does not form solid tumors.',
                            'Lymphoma: Starts in immune system cells (T cells or B cells).',
                            'Melanoma: Starts in pigment-making cells (melanocytes).'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-15',
        title: 'Module 15: Recognising Symptoms',
        description: 'Common signs that warrant a medical consultation.',
        sections: [
            {
                title: '15.1 The Two-Week Rule',
                content: [
                    {
                        subtitle: 'Persistence Matters',
                        text: 'Many symptoms are caused by minor illnesses, injury, or benign tumors. However, if a symptom does not get better after a few weeks, see your doctor. Do not wait for pain—cancer often does not cause pain in early stages.'
                    }
                ]
            },
            {
                title: '15.2 Key Signs to Watch',
                content: [
                    {
                        subtitle: 'Physical Changes',
                        list: [
                            'Breast changes: Lumps, nipple discharge, or skin puckering.',
                            'Bladder/Bowel changes: Blood in urine/stool or trouble urinating.',
                            'Unexplained bleeding: Bruising or bleeding with no known cause.',
                            'Eating problems: Trouble swallowing, belly pain, or persistent indigestion.',
                            'Fatigue & Fever: Severe exhaustion that lasts, or night sweats.',
                            'Skin changes: New moles, yellowing (jaundice), or sores that don\'t heal.',
                            'Neurological: Persistent headaches, seizures, or vision/hearing changes.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-16',
        title: 'Module 16: How Cancer is Diagnosed',
        description: 'Understanding lab tests and the diagnostic workflow.',
        sections: [
            {
                title: '16.1 The Diagnostic Process',
                content: [
                    {
                        subtitle: 'No Single Test',
                        text: 'Diagnosis usually involves a combination of your medical history, a physical exam, and specific tests. Results are often posted in patient portals early; always discuss them with your doctor for the full context.'
                    }
                ]
            },
            {
                title: '16.2 Common Lab Tests',
                content: [
                    {
                        subtitle: 'Blood and Fluid Analysis',
                        list: [
                            'CBC (Complete Blood Count): Measures red/white cells and platelets. Helps find leukemias.',
                            'Blood Chemistry: Checks organ function (kidneys, liver) and releases of proteins or enzymes.',
                            'Cytogenetic Analysis: Looks for broken or missing chromosomes.',
                            'Liquid Biopsy: A blood test that searches for cancer DNA or cells released into the bloodstream.',
                            'Tumor Markers: Substances produced at higher levels by cancer cells.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-17',
        title: 'Module 17: Imaging Tests in Cancer',
        description: 'Creating pictures of the inside of the body to locate tumors.',
        sections: [
            {
                title: '17.1 Advanced Scans',
                content: [
                    {
                        subtitle: 'Visualising the Internal Extent',
                        list: [
                            'CT Scan: Uses 3D X-rays to create detailed images of organs.',
                            'MRI: Uses powerful magnets and radio waves to take slice-by-slice pictures.',
                            'PET Scan: Highlights areas where sugar (glucose) is taken up quickly, identifying active cancer.',
                            'Ultrasound: Uses sound wave echoes to create sonograms of tissues.',
                            'Nuclear Scan: Uses a small amount of radioactive tracer to highlight "hot spots" in bones or organs.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-18',
        title: 'Module 18: Understanding Biopsies',
        description: 'The definitive procedure for confirming a cancer diagnosis.',
        sections: [
            {
                title: '18.1 Why a Biopsy?',
                content: [
                    {
                        subtitle: 'The Only Sure Way',
                        text: 'A biopsy is often the only way to tell for sure if an abnormality is cancer. A pathologist examines the tissue under a microscope and writes a detailed pathology report.'
                    }
                ]
            },
            {
                title: '18.2 How Biopsies are Done',
                content: [
                    {
                        subtitle: 'Procedures',
                        list: [
                            'Needle Biopsy: Withdrawing tissue or fluid using a needle (common for bone marrow).',
                            'Endoscopy: Using a lighted tube (endoscope) through a natural opening (e.g., Colonoscopy).',
                            'Surgery: Removing part or all of an abnormal area through an operation.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-19',
        title: 'Module 19: Staging and Next Steps',
        description: 'Determining the extent of the cancer to plan treatment.',
        sections: [
            {
                title: '19.1 What "Stage" Means',
                content: [
                    {
                        subtitle: 'Factors in Staging',
                        text: 'Stage refers to the size of the tumor and whether it has spread. This helps the doctor discuss your prognosis and choose the most effective treatment plan.'
                    },
                    {
                        subtitle: 'Grade vs. Stage',
                        text: 'While Stage looks at the extent, "Grade" looks at how abnormal the cells look and how fast they are likely to grow.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-20',
        title: 'Module 20: Understanding Cancer Risk',
        description: 'What increases the chances of developing cancer and how it is studied.',
        sections: [
            {
                title: '20.1 Risk vs. Protection',
                content: [
                    {
                        subtitle: 'Risk Factors',
                        text: 'A risk factor is anything that increases your chance of getting a disease. While some can be controlled (like smoking), others cannot (like age or family history).'
                    },
                    {
                        subtitle: 'Protective Factors',
                        text: 'Actions or circumstances that lower your risk are called protective factors. Maintaining a healthy lifestyle is a key protective strategy.'
                    }
                ]
            },
            {
                title: '20.2 How We Know the Risks',
                content: [
                    {
                        subtitle: 'The Role of Research',
                        text: 'Scientists use epidemiology studies to compare large groups of people. When many studies show the same pattern between a behavior and cancer, they become more confident about the risk factor.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-21',
        title: 'Module 21: Common Risk Factors',
        description: 'A detailed look at the most studied known and suspected risks.',
        sections: [
            {
                title: '21.1 Unavoidable Factors',
                content: [
                    {
                        subtitle: 'Age and Genetics',
                        list: [
                            'Age: The risk of most cancers increases as you grow older.',
                            'Family History: Certain inherited genetic mutations can significantly increase risk.'
                        ]
                    }
                ]
            },
            {
                title: '21.2 Avoidable & Environmental Factors',
                content: [
                    {
                        subtitle: 'Lifestyle and Exposure',
                        list: [
                            'Tobacco & Alcohol: Well-known behaviors that damage DNA.',
                            'Sunlight & Radiation: Excessive UV exposure is a major skin cancer risk.',
                            'Obesity & Diet: What we eat and our body weight impact chronic inflammation and hormone levels.',
                            'Chemicals: Exposure to certain substances in the workplace or environment.',
                            'Infectious Agents: Some viruses and bacteria can trigger cancerous changes.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-22',
        title: 'Module 22: Prevention Strategies',
        description: 'Proactive steps to lower your risk and stay healthy.',
        sections: [
            {
                title: '22.1 Taking Action',
                content: [
                    {
                        subtitle: 'Healthy Foundations',
                        text: 'Prevention involves lowering your risk through lifestyle choices, avoiding known carcinogens, and attending regular screenings.'
                    },
                    {
                        subtitle: 'Medical Prevention',
                        text: 'In some cases, vaccines (like the HPV vaccine) or specific medicines can prevent cancer from developing in the first place.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-23',
        title: 'Module 23: Living Your Days Well',
        description: 'Maintaining routine and choosing activities that bring pleasure.',
        sections: [
            {
                title: '23.1 Maintaining Your Routine',
                content: [
                    {
                        subtitle: 'Stay Engaged',
                        text: 'If you feel well enough, try to keep up with your daily routine. This includes working, spending time with family, and participating in hobbies you love. Cancer is an opportunity to re-evaluate how you spend your time—focus on what truly makes you happy.'
                    }
                ]
            },
            {
                title: '23.2 Balancing Energy',
                content: [
                    {
                        subtitle: 'Avoid Over-exhaustion',
                        text: 'It is important to have fun, but be careful not to tire yourself out too much. Severe fatigue can sometimes lead to localized depression. Make sure to get enough rest so you can genuinely enjoy your favorite activities.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-24',
        title: 'Module 24: The Healing Power of Humor',
        description: 'How laughter and smiles can combat stress and provide a sense of control.',
        sections: [
            {
                title: '24.1 Why Humor Helps',
                content: [
                    {
                        subtitle: 'Physiological Relief',
                        text: 'When you laugh, your brain releases chemicals that produce pleasure and relax your muscles. Even a simple smile can help fight off stressful or intrusive thoughts.'
                    }
                ]
            },
            {
                title: '24.2 Bringing Humor into Your Life',
                content: [
                    {
                        subtitle: 'Practical Fun',
                        list: [
                            'Entertainment: Watch funny movies, TV shows, or listen to comedy podcasts.',
                            'Cards & Calendars: Ask friends for funny cards or keep a humor-themed desk calendar.',
                            'Pets & Kids: Observe the amusing and spontaneous things children and pets do.',
                            'Self-Compassion: Learn to laugh at the awkward or unexpected situations cancer might bring.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-25',
        title: 'Module 25: Exercise and Movement',
        description: 'Reducing fatigue and improving strength through physical activity.',
        sections: [
            {
                title: '25.1 Benefits of Staying Active',
                content: [
                    {
                        subtitle: 'Better Daily Function',
                        list: [
                            'Physical Health: Speeds healing, tones muscles, and decreases constipation.',
                            'Mental Clarity: Boosts mental health and helps free your mind of bad thoughts.',
                            'Energy & Appetite: Paradoxically, a bit of daily movement can decrease fatigue and increase your appetite.'
                        ]
                    }
                ]
            },
            {
                title: '25.2 Getting Started',
                content: [
                    {
                        subtitle: 'Choice and Safety',
                        text: 'Always get your doctor\'s approval first. Activities like walking, yoga, swimming, or biking are excellent. If you are bed-bound, there are still gentle movements you can perform to keep your blood flowing.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-26',
        title: 'Module 26: Setting Goals for the Future',
        description: 'Building resilience by looking beyond treatment.',
        sections: [
            {
                title: '26.1 Working Toward Something',
                content: [
                    {
                        subtitle: 'The Power of Milestones',
                        text: 'Setting goals helps you look beyond your current treatment. This might be planning a future trip, learning a new skill, or looking forward to a family wedding or the birth of a grandchild. Having a purpose keeps your spirit focused on recovery.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-27',
        title: 'Module 27: Understanding Palliative Care',
        description: 'An approach that improves quality of life by preventing and relieving suffering.',
        sections: [
            {
                title: '27.1 Palliative Care: The Core Truths',
                content: [
                    {
                        subtitle: 'The WHO Definition',
                        text: 'Palliative care is an approach that improves the quality of life of patients and their families facing life‑threatening illness, through prevention and relief of suffering by early identification and treatment of pain and other physical, psychosocial, and spiritual problems.'
                    },
                    {
                        subtitle: 'Key Elements',
                        list: [
                            'Focuses on quality of life, not just length of life.',
                            'Provides relief from pain and other distressing symptoms.',
                            'Regards dying as a normal process and neither hastens nor postpones death.',
                            'Integrates psychological and spiritual aspects of care.',
                            'Offers a support system for families, including bereavement support.',
                            'Uses an interprofessional team (doctors, nurses, social workers, etc.).'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-28',
        title: 'Module 28: Why Early Palliative Care Matters',
        description: 'Evidence-based benefits of starting supportive care early in the cancer journey.',
        sections: [
            {
                title: '28.1 The Evidence Base',
                content: [
                    {
                        subtitle: 'Improved Outcomes',
                        text: 'Starting palliative care early—ideally within 8 weeks of diagnosis—is proven to improve mood, global quality of life, and symptom burden. It reduces depression and anxiety compared with usual care.'
                    },
                    {
                        subtitle: 'Care Alignment',
                        text: 'Patients report a better understanding of their prognosis and more care consistent with their values when palliative teams are involved early.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-29',
        title: 'Module 29: Symptom Masterclass: Pain and Breathlessness',
        description: 'Managing the most common physical challenges with precision.',
        sections: [
            {
                title: '29.1 Mastering Pain Control',
                content: [
                    {
                        subtitle: 'The 3-Step Ladder',
                        text: 'Pain is managed systematically: from non-opioids like paracetamol for mild pain, to strong opioids like morphine for severe pain. Most cancer pain can be controlled if medication is taken regularly.'
                    },
                    {
                        subtitle: 'Pain Myths',
                        list: [
                            'Addiction is very rare when opioids are used supervised for cancer pain.',
                            'Taking pain medicine early is a sign of taking control, not "giving up".',
                            'Side effects like constipation and nausea are proactively managed.'
                        ]
                    }
                ]
            },
            {
                title: '29.2 Managing Breathlessness',
                content: [
                    {
                        subtitle: 'Simple Interventions',
                        list: [
                            'Sitting upright or using a handheld fan.',
                            'Pacing activities and energy conservation.',
                            'Breathing techniques and positioning.',
                            'Low-dose opioids can significantly help refractory dyspnea.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'module-30',
        title: 'Module 30: Common Physical Symptoms',
        description: 'Addressing fatigue, nausea, and digestive health.',
        sections: [
            {
                title: '30.1 Fatigue and Weakness',
                content: [
                    {
                        subtitle: 'Cancer-Related Fatigue',
                        text: 'Tiredness is common and real. It is multifactorial, caused by anemia, inflammation, or treatment side effects. Gentle activity, pacing, and sleep hygiene are key managers.'
                    }
                ]
            },
            {
                title: '30.2 Nausea and Appetite',
                content: [
                    {
                        subtitle: 'Comfort-Focused Eating',
                        text: 'The goal is to help you eat and drink comfortably. In advanced stages, small sips and favorite small snacks are better than forcing large meals. Thirst is often better relieved by mouth care.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-31',
        title: 'Module 31: Serious Illness Conversations',
        description: 'Communication, decision-making, and planning your future.',
        sections: [
            {
                title: '31.1 Decision-Making and Planning',
                content: [
                    {
                        subtitle: 'What Matters Most?',
                        text: 'Serious illness conversations help you talk about your hopes, worries, and how you want your care to look. This includes documenting advance directives and resuscitation preferences.'
                    },
                    {
                        subtitle: 'Shared Journey',
                        text: 'Ongoing conversations help ensure your care aligns with your personal values. You can change your mind as things evolve.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-32',
        title: 'Module 32: Holistic Support (Mind & Spirit)',
        description: 'Addressing the emotional, social, and spiritual dimensions of care.',
        sections: [
            {
                title: '32.1 Beyond the Body',
                content: [
                    {
                        subtitle: 'Mental Well-being',
                        text: 'Fear, sadness, and anger are normal. Palliative care normalizes these feelings and offers counseling, support groups, or psychiatric care when needed.'
                    },
                    {
                        subtitle: 'Spiritual and Social Care',
                        text: 'Spiritual care is for everyone, independent of religion. It addresses questions of meaning and hope. Social workers assist with practicalities like benefits and transportation.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-33',
        title: 'Module 33: Care for the Family Caregiver',
        description: 'Support, resilience, and bereavement resources.',
        sections: [
            {
                title: '33.1 Supporting the Support System',
                content: [
                    {
                        subtitle: 'Caregiver Burden',
                        text: 'Caring for a loved one is demanding. Palliative care includes routine assessment of caregiver distress and offers education, counseling, and respite care options.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-34',
        title: 'Module 34: The Gentle Transition (End-of-Life)',
        description: 'Focusing on comfort and dignity during the final days.',
        sections: [
            {
                title: '34.1 Comfort-Directed Care',
                content: [
                    {
                        subtitle: 'The Final Weeks',
                        text: 'Focus shifts to maximizing comfort. This includes managing secretions, delirium, and anxiety while de-escalating invasive tests. Gentle touch and familiar voices remain vital.'
                    }
                ]
            }
        ]
    },
    {
        id: 'module-35',
        title: 'Module 35: Palliative Care: Myths vs Realities',
        description: 'Clarifying common misunderstandings about supportive care.',
        sections: [
            {
                title: '35.1 Truths About Care',
                content: [
                    {
                        subtitle: 'Giving Up?',
                        text: '"Is palliative care giving up?" No—it means MORE support, not less. It works alongside your oncology team to help you live as well as possible.'
                    },
                    {
                        subtitle: 'Timing',
                        text: 'Palliative care is for the whole disease trajectory, not just for the very end of life. Starting it early is a sign of taking control.'
                    }
                ]
            }
        ]
    }
];
