interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: "Best Zumba & Weight Management Classes in Nashik | Zin Shreya's Academy",
    description: "Join Zin Shreya's Academy in Nashik for Zumba, weight management, and female fitness programs. 7+ years of trusted transformations. Affordable packages. Call now.",
    keywords: 'Best Zumba Class in Nashik, Weight Management Nashik, Female Fitness Classes Nashik, Women Gym Nashik, Personal Training for Women Nashik',
  },
  '/about': {
    title: "About Us - 7+ Years of Women's Fitness Excellence | Zin Shreya's Academy Nashik",
    description: "Learn about Zin Shreya's Academy, Nashik's premier female fitness destination with 7+ years of experience in Zumba, weight management, and women's wellness programs.",
    keywords: 'About Zin Shreyas Academy, Female Fitness Nashik, Women Gym Nashik, Zumba Academy Nashik, Weight Management Expert Nashik',
  },
  '/courses': {
    title: "Fitness Courses & Programs - Zumba, Weight Loss, Personal Training | Nashik",
    description: "Explore our specialized fitness programs: Zumba classes, weight management, personal training, and group fitness. Designed exclusively for women in Nashik.",
    keywords: 'Zumba Classes Nashik, Weight Loss Programs Nashik, Personal Training Women Nashik, Group Fitness Classes Nashik, Female Fitness Programs',
  },
  '/contact': {
    title: "Contact Us - Book Your Free Trial | Zin Shreya's Academy Nashik",
    description: "Get in touch with Zin Shreya's Academy. Book your free trial session today. Located at College Road, Nashik. Call +91 9922555866 or WhatsApp us.",
    keywords: 'Contact Zin Shreyas Academy, Fitness Classes Nashik Contact, Book Trial Session Nashik, Women Gym Near Me Nashik, Zumba Classes Contact',
  },
  '/404': {
    title: "Page Not Found | Zin Shreya's Academy Nashik",
    description: "The page you're looking for doesn't exist. Return to Zin Shreya's Academy homepage to explore our fitness programs.",
    keywords: 'Zin Shreyas Academy Nashik, Female Fitness Nashik',
  },
};
