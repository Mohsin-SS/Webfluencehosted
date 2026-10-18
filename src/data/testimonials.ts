export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ali',
    role: 'Operations Director, Times Consultant',
    quote:
      'Before Webfluence, our leads were scattered across WhatsApp chats and spreadsheets. Now everything lives in one CRM, and the AI performance tracking shows us exactly how each counselor is doing. Mohsin’s team understood our workflow better than we expected.',
    initials: 'AL',
    rating: 5,
  },
  {
    name: 'Syed Maaz Haider',
    role: 'CEO, Pitstop',
    quote:
      'We wanted marketing that actually brought people through the door, not just likes. Webfluence delivered that. Momin kept us in the loop the whole way and the numbers spoke for themselves.',
    initials: 'SH',
    rating: 5,
  },
  {
    name: 'Momin Haider',
    role: 'CEO, The Carology',
    quote:
      'The AI car customiser was a complex idea and honestly we weren’t sure it could be done properly. Mohsin and his team built it, integrated it into our store, and our customers love playing with it.',
    initials: 'MH',
    rating: 5,
  },
  {
    name: 'Mian Amir Zafar',
    role: 'CEO, AHM Developers',
    quote:
      'Our social media finally looks consistent and professional. The Webfluence team handles everything from content to posting, so we can focus on our projects.',
    initials: 'MZ',
    rating: 5,
  },
  {
    name: 'Afzaal Khan',
    role: 'Director, Slap Media',
    quote:
      'We’ve partnered with Webfluence on multiple projects and it’s always smooth. They’re quick, reliable, and Momin is someone you can actually pick up the phone to. Rare in this industry.',
    initials: 'AK',
    rating: 5,
  },
  {
    name: 'Abdullah Tahir',
    role: 'CEO, Maktron Consultant',
    quote:
      'The WhatsApp automation alone saved our team hours every day. Student inquiries get answered instantly and nothing slips through the cracks anymore. Highly recommend Webfluence to any consultancy.',
    initials: 'AT',
    rating: 5,
  },
  {
    name: 'Raahim Khan',
    role: 'Director, Property Linkers',
    quote:
      'Webfluence took over our social media and the quality of inquiries improved noticeably. Good team, clear communication, and they genuinely care about results.',
    initials: 'RK',
    rating: 5,
  },
];
