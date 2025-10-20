export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  body: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "core" | "data" | "services";
}
