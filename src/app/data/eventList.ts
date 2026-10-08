export interface YraEvent {
  id: string;
  heading: string;
  category: 'Training' | 'Seminar' | 'Workshop';
  month: 'aug' | 'sep';
  title: string;
  date: string;
  duration: string;
  mode: string;
  fee: string;
  summary: string;
  description: string;
  buttonLabel: string;
}

export const eventList: YraEvent[] = [
  {
    id: 'bootcamp',
    heading: 'BootCamp',
    category: 'Training',
    month: 'aug',
    title: 'YRA Global Research Bootcamp 2026',
    date: '20 August 2026',
    duration: '4 Weeks',
    mode: 'Online',
    fee: '₦15,000',
    summary: 'Intensive research training for emerging researchers and scholars.',
    description:
      'Intensive research training designed to equip researchers with essential knowledge and practical skills from idea development to publication.',
    buttonLabel: 'Register now',
  },
  {
    id: 'slr',
    heading: 'Slr',
    category: 'Seminar',
    month: 'aug',
    title: 'How to Write a Systematic Literature Review',
    date: '30 August 2026',
    duration: '1 Day',
    mode: 'Online',
    fee: '₦5,000',
    summary: 'Practical SLR writing and publication session.',
    description:
      'Practical session on systematic literature review design, searching, screening, synthesis and publication.',
    buttonLabel: 'Register now',
  },
  {
    id: 'spss',
    heading: 'Spss',
    category: 'Workshop',
    month: 'sep',
    title: 'Data Analysis with SPSS for Researchers',
    date: '10 September 2026',
    duration: '2 Days',
    mode: 'Online',
    fee: '₦7,500',
    summary: 'Hands-on statistical analysis workshop.',
    description:
      'Hands-on workshop on selecting, running and interpreting common statistical analyses.',
    buttonLabel: 'Register now',
  },
];