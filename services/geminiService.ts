import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, EDUCATION } from '../constants';

// Local knowledge base for intelligent responses without API
const knowledgeBase = {
  greeting: [
    `Hi! I'm Radhika's AI assistant. I'm here to help you learn about her skills, projects, and experience!`,
    `Welcome! I'm here to answer questions about Radhika's portfolio, background, and interests.`,
    `Hello! Feel free to ask me anything about Radhika's projects, skills, or professional journey.`
  ],
  
  about: {
    keywords: ['who', 'what', 'about', 'background', 'radhika'],
    response: `${PERSONAL_INFO.name} is a final-year Computer Science and Engineering student and AI/ML Intern at VTU's VRIF. ${PERSONAL_INFO.about} You can reach her at ${PERSONAL_INFO.email}.`
  },
  
  skills: {
    keywords: ['skill', 'expertise', 'tech', 'programming', 'language', 'proficient'],
    response: () => `Radhika's skills include:\n${SKILLS.map(s => `• ${s.category}: ${s.items.join(', ')}`).join('\n')}`
  },
  
  projects: {
    keywords: ['project', 'build', 'work', 'portfolio'],
    response: () => `Radhika has worked on some impressive projects:\n${PROJECTS.map(p => `• ${p.title}: ${p.description}`).join('\n')}`
  },
  
  experience: {
    keywords: ['experience', 'internship', 'work', 'job', 'career'],
    response: () => `Radhika's experience:\n${EXPERIENCE.map(e => `• ${e.role} at ${e.company} (${e.period})`).join('\n')}`
  },
  
  education: {
    keywords: ['education', 'study', 'degree', 'university', 'college', 'gpa'],
    response: `Radhika is pursuing ${EDUCATION.degree} at ${EDUCATION.institution} (${EDUCATION.period}) with a GPA of ${EDUCATION.gpa}.`
  },
  
  contact: {
    keywords: ['contact', 'email', 'reach', 'message', 'talk', 'connect'],
    response: `You can reach Radhika at ${PERSONAL_INFO.email} or connect with her on LinkedIn: ${PERSONAL_INFO.linkedin}`
  }
};

export async function askAboutRadhika(query: string): Promise<string> {
  const lowerQuery = query.toLowerCase();
  
  // Check for specific topics
  for (const [key, data] of Object.entries(knowledgeBase)) {
    if (key === 'greeting') continue;
    
    if ('keywords' in data && data.keywords.some(keyword => lowerQuery.includes(keyword))) {
      const response = typeof data.response === 'function' ? data.response() : data.response;
      return response;
    }
  }
  
  // Default response for generic questions
  const defaultResponses = [
    `That's a great question! I'd recommend checking out Radhika's portfolio sections or reaching out to her directly at ${PERSONAL_INFO.email}.`,
    `I'm not sure about that specific topic, but Radhika would love to discuss it! Feel free to contact her at ${PERSONAL_INFO.email}.`,
    `That's an interesting question! For more details, please connect with Radhika at ${PERSONAL_INFO.email} or via her LinkedIn profile.`
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
