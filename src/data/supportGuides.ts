import { Heart, PenTool, Stethoscope, ClipboardList, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SupportGuide {
    id: string;
    title: string;
    description: string;
    icon: string;
    sections: {
        title: string;
        text: string;
        bullets?: string[];
    }[];
}

export const support_guides: SupportGuide[] = [
    {
        id: 'emotional-honesty',
        title: 'Emotional Authenticity',
        description: 'Why your "down days" are valid and why forced positivity can be a barrier.',
        icon: 'Heart',
        sections: [
            {
                title: 'The Pressure to Be Cheerful',
                text: 'Many patients feel they must put on a brave face to protect their family or because they believe it helps with recovery. However, forced positivity can be a "call for silence" that prevents you from getting the real support you need.'
            },
            {
                title: 'Be True to Yourself',
                text: 'Honesty is your best tool. It is okay to be in a bad mood, to be angry, or to feel sad. Sharing these true feelings gives your loved ones a realistic picture and allows them to support you authentically.'
            }
        ]
    },
    {
        id: 'journaling',
        title: 'Writing for Relief',
        description: 'Using journaling to sort through thoughts when talking feels too hard.',
        icon: 'PenTool',
        sections: [
            {
                title: 'When Words are Hard to Speak',
                text: 'If you feel cancer is a private matter or if vocalizing your fears is too difficult, try writing. All you need is paper and a pen to start sorting through the mental clutter.'
            },
            {
                title: 'Begin with Truth',
                text: 'A journal has no rules. Use it to begin dealing with your diagnosis at your own pace. It is a safe space for your eyes only.'
            }
        ]
    },
    {
        id: 'care-team-comms',
        title: 'Talking to Your Team',
        description: 'Essential strategies for getting the most out of your medical appointments.',
        icon: 'Stethoscope',
        sections: [
            {
                title: 'Know the Name and Stage',
                text: 'Ask your doctor to write down the exact name and stage of your cancer. Understanding the size and spread helps you and your team make the best treatment choices.'
            },
            {
                title: 'The Power of Questions',
                text: 'No question is silly. Ask for simpler language if terms get too technical. A good technique is to repeat back to the doctor what you heard in your own words.'
            },
            {
                title: 'Notes and Recordings',
                text: 'Anxiety makes it hard to remember details. Bring a friend to take notes or ask for permission to record the conversation so you can review it later with family.'
            }
        ]
    },
    {
        id: 'treatment-decisions',
        title: 'Evaluating Choices',
        description: 'How to approach treatment options and the value of second opinions.',
        icon: 'ClipboardList',
        sections: [
            {
                title: 'Ask About the "Why"',
                text: 'Learn about the objective of each treatment and its potential impact on your daily life. If there is more than one option, take the time to compare them thoroughly.'
            },
            {
                title: 'The Second Opinion',
                text: 'Getting a second opinion is a standard practice in oncology. It helps confirm your treatment plan and gives you peace of mind. Most insurance plans cover this process.'
            }
        ]
    },
    {
        id: 'support-network',
        title: 'Leveraging Your Circle',
        description: 'Finding the right listeners and managing the help offered by others.',
        icon: 'Users',
        sections: [
            {
                title: 'Family, Friends, and Peers',
                text: 'While family is vital, meeting others who have faced cancer can provide a unique bond. They understand the day-to-day challenges in a way few others can.'
            },
            {
                title: 'Specific Help Requests',
                text: 'People want to help but often don\'t know how. Be specific: "Could you drive me on Tuesday?" or "Can you help me with groceries?". This removes the awkwardness for both parties.'
            }
        ]
    }
];

export const guideIconMap: Record<string, LucideIcon> = {
    Heart: Heart,
    PenTool: PenTool,
    Stethoscope: Stethoscope,
    ClipboardList: ClipboardList,
    Users: Users
};
