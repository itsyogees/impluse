export interface Course {
    id: string;
    image: string;
    title: string;
    duration: string;
    level: string;
    lessons: number;
    price: string;
    description: string;
    syllabus: string[];
}

export const courses: Course[] = [
    {
        id: 'tech-analysis',
        image: '/course1.png',
        title: 'Technical Analysis Fundamentals',
        duration: '4 Weeks',
        level: 'Beginner',
        lessons: 18,
        price: '₹9,999',
        description: 'Master the core concepts of technical analysis, from candlestick patterns to essential indicators.',
        syllabus: [
            'Introduction to Financial Markets',
            'Candlestick Patterns & Interpretations',
            'Support and Resistance Levels',
            'Trendlines and Channels',
            'Using Moving Averages Effectively'
        ]
    },
    {
        id: 'advanced-chart',
        image: '/course2.png',
        title: 'Advanced Chart Patterns',
        duration: '6 Weeks',
        level: 'Intermediate',
        lessons: 24,
        price: '₹14,999',
        description: 'Take your technical skills to the next level with complex chart patterns and wave analysis.',
        syllabus: [
            'Complex Chart Patterns (Head & Shoulders, Flags)',
            'Introduction to Harmonic Patterns',
            'Fibonacci Retracement and Extension',
            'Elliott Wave Theory Basics',
            'Combining Patterns for High Probability'
        ]
    },
    {
        id: 'intraday-mastery',
        image: '/course3.png',
        title: 'Intraday Trading Mastery',
        duration: '8 Weeks',
        level: 'Advanced',
        lessons: 32,
        price: '₹19,999',
        description: 'A complete guide to mastering the fast-paced world of intraday trading with precision and discipline.',
        syllabus: [
            'The Intraday Mindset & Psychology',
            'Opening Bell Strategies',
            'Volume Analysis for Day Trading',
            'Scanning for Momentum Stocks',
            'Risk Management for Active Traders'
        ]
    },
    {
        id: 'options-strategies',
        image: '/course4.png',
        title: 'Options Trading Strategies',
        duration: '6 Weeks',
        level: 'Intermediate',
        lessons: 28,
        price: '₹16,999',
        description: 'Learn how to hedge and speculate using advanced options spreads and strategies.',
        syllabus: [
            'Option Greeks Explained',
            'Bull & Bear Spread Strategies',
            'Iron Condors and Strangles',
            'Risk/Reward Profiling',
            'Delta Neutral Strategies'
        ]
    },
    {
        id: 'portfolio-mgmt',
        image: '/course1.png',
        title: 'Portfolio Management',
        duration: '5 Weeks',
        level: 'Advanced',
        lessons: 20,
        price: '₹12,999',
        description: 'Build and manage a long-term portfolio designed for consistent growth and capital preservation.',
        syllabus: [
            'Asset Allocation Principles',
            'Diversification Strategies',
            'Rebalancing Techniques',
            'Long-term vs Short-term Focus',
            'Monitoring Portfolio Health'
        ]
    },
    {
        id: 'risk-essentials',
        image: '/course2.png',
        title: 'Risk Management Essentials',
        duration: '3 Weeks',
        level: 'Beginner',
        lessons: 15,
        price: '₹7,999',
        description: 'The foundation of survival in the markets: how to protect your capital at all costs.',
        syllabus: [
            'Introduction to Capital Preservation',
            'Setting Stop Losses Correctly',
            'Position Sizing Fundamentals',
            'Understanding Drawdowns',
            'The Psychology of Losses'
        ]
    }
];
