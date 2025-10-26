const React = require('react');
const { Document, Page, Text, View, StyleSheet, Svg, Path, Circle, Rect, Link } = require('@react-pdf/renderer');

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#2d3748',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottom: '3 solid #1e40af',
    backgroundColor: '#f8fafc',
    padding: 8,
    borderRadius: 4,
    borderTop: '5 solid #1e40af',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
    title: {
    fontSize: 13,
    color: '#1e40af',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 9,
    color: '#4a5568',
    lineHeight: 1.6,
    marginTop: 8,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  section: {
    marginTop: 4,
    marginBottom: 4,
  },
  jobBlock: {
    marginBottom: 6,
    paddingLeft: 8,
    borderLeft: '3 solid #e0e7ff',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
    borderBottom: '2 solid #1e40af',
    paddingBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summaryText: {
    fontSize: 10,
    lineHeight: 1.3,
    color: '#2d3748',
    textAlign: 'justify',
    backgroundColor: '#f7fafc',
    padding: 6,
    borderRadius: 4,
  },
  jobTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 4,
  },
  dates: {
    fontSize: 9,
    color: '#718096',
    fontStyle: 'italic',
    marginBottom: 4,
    backgroundColor: '#edf2f7',
    padding: '2px 6px',
    borderRadius: 3,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.2,
    color: '#2d3748',
    marginBottom: 4,
    marginTop: 2,
  },
  bulletPoint: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#2d3748',
    marginLeft: 12,
    marginBottom: 2,
  },
  categoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e40af',
    marginTop: 4,
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  educationItem: {
    marginBottom: 4,
    paddingLeft: 8,
    borderLeft: '3 solid #e0e7ff',
  },
  educationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
  },
  educationInstitution: {
    fontSize: 11,
    color: '#1e40af',
    marginBottom: 3,
    fontWeight: 'bold',
  },
  educationDates: {
    fontSize: 9,
    color: '#718096',
    fontStyle: 'italic',
    backgroundColor: '#edf2f7',
    padding: '3px 8px',
    borderRadius: 3,
    alignSelf: 'flex-start',
  },
  competencyItem: {
    fontSize: 9,
    color: '#2d3748',
    marginBottom: 3,
    marginLeft: 12,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillTag: {
    fontSize: 8,
    color: '#1e40af',
    backgroundColor: '#eef2ff',
    padding: '4px 10px',
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 12,
    border: '1 solid #c7d2fe',
  },
  pageBreak: {
    marginTop: 40,
    marginBottom: 10,
  },
  iconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginRight: 8,
  },
});

// Simple SVG Icons
const EmailIcon = ({ size = 8, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    fill: color
  }),
  React.createElement(Path, {
    d: 'M22 6l-10 6L2 6',
    stroke: 'white',
    strokeWidth: '1.5',
    fill: 'none'
  })
);

const LinkIcon = ({ size = 8, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Path, {
    d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const GitHubIcon = ({ size = 8, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const LocationIcon = ({ size = 8, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Circle, {
    cx: '12',
    cy: '10',
    r: '3',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const UserIcon = ({ size = 12, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Circle, {
    cx: '12',
    cy: '7',
    r: '4',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const CodeIcon = ({ size = 8, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const BriefcaseIcon = ({ size = 8, color = '#1e40af' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 4 } },
  React.createElement(Path, {
    d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Rect, {
    x: '8',
    y: '6',
    width: '8',
    height: '4',
    stroke: color,
    fill: 'none',
    strokeWidth: '2',
    rx: '1'
  })
);

const FileTextIcon = ({ size = 12, color = '#1a202c' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 6, marginTop: -2 } },
  React.createElement(Path, {
    d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Path, {
    d: 'M14 2v6h6M16 13H8M16 17H8M10 9H8',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const WorkIcon = ({ size = 12, color = '#1a202c' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 6, marginTop: -2 } },
  React.createElement(Path, {
    d: 'M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Path, {
    d: 'M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const GraduationCapIcon = ({ size = 12, color = '#1a202c' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 6, marginTop: -2 } },
  React.createElement(Path, {
    d: 'M22 10v6M2 10l10 5 10-5',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  }),
  React.createElement(Path, {
    d: 'M6 12v5c3 3 9 3 12 0v-5',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const ZapIcon = ({ size = 12, color = '#1a202c' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 6, marginTop: -2 } },
  React.createElement(Path, {
    d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const WrenchIcon = ({ size = 12, color = '#1a202c' }) => React.createElement(
  Svg,
  { width: size, height: size, viewBox: '0 0 24 24', style: { marginRight: 6, marginTop: -2 } },
  React.createElement(Path, {
    d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    stroke: color,
    fill: 'none',
    strokeWidth: '2'
  })
);

const CV = () => React.createElement(
  Document,
  null,
  React.createElement(
    Page,
    { size: 'A4', style: styles.page },
    // Header
    React.createElement(
      View,
      { style: styles.header },
      React.createElement(
        View,
        { style: { flexDirection: 'row', alignItems: 'flex-start' } },
        // Name + Title column (3/5 width)
        React.createElement(
          View,
          { style: { flex: 3, paddingRight: 10 } },
          React.createElement(
            View,
            { style: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap' } },
            React.createElement(Text, { style: styles.name }, '💼 Carlos Santisteban '),
            React.createElement(Text, { style: styles.title }, '🔧 Fullstack Software Engineer specializing in Frontend')
          )
        ),
        // Contact info column (2/5 width)
        React.createElement(
          View,
          { style: { flex: 2, paddingLeft: 10 } },
          React.createElement(
            View,
            { style: { flexDirection: 'row', marginBottom: 3 } },
            React.createElement(EmailIcon, { size: 10 }),
            React.createElement(Text, { style: { fontSize: 9 } }, 'carlos.santisteban@outlook.com')
          ),
          React.createElement(
            View,
            { style: { flexDirection: 'row', marginBottom: 3 } },
            React.createElement(GitHubIcon, { size: 10 }),
            React.createElement(Link, { src: 'https://github.com/santistebanc', style: { fontSize: 9, color: '#1e40af' } }, 'github.com/santistebanc')
          ),
          React.createElement(
            View,
            { style: { flexDirection: 'row', marginBottom: 3 } },
            React.createElement(LocationIcon, { size: 10 }),
            React.createElement(Text, { style: { fontSize: 9 } }, 'Berlin, Germany')
          ),
          React.createElement(
            Text,
            { style: { fontSize: 9, marginBottom: 3 } },
            '🌍 Mexican and Spanish (full european citizen)'
          ),
          React.createElement(
            Text,
            { style: { fontSize: 9 } },
            'Age 31'
          )
        )
      )
    ),
    
    // Professional Summary
    React.createElement(
      View,
      { style: styles.section },
      React.createElement(
        Text,
        { style: styles.summaryText },
        'Software engineer with 10+ years of experience in webapp development using JavaScript/TypeScript. ' +
        'Passionate about building functional, well-polished, user-centric solutions for web apps. ' +
        'Eager to learn and try the latest tech, and leverage the newest tools (AI in recent times) to develop ' +
        'efficient, high-quality, scalable applications.'
      )
    ),
    
    // Professional Experience
    React.createElement(
      View,
      { style: styles.section },
      React.createElement(
        View,
        { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 3, paddingBottom: 3, textTransform: 'uppercase' } },
        React.createElement(WorkIcon, { size: 14 }),
        React.createElement(Text, { style: styles.sectionTitle }, 'PROFESSIONAL EXPERIENCE')
      ),
      
      // Lingoda
      React.createElement(
        View,
        { style: styles.jobBlock },
        React.createElement(
          View,
          { style: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap' } },
          React.createElement(
            View,
            { style: styles.dates },
            React.createElement(Text, { style: { fontSize: 9 } }, 'June 2021 - March 2025')
          ),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: styles.jobTitle }, '💻 Software Engineer'),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold', color: '#1e40af' } }, 'Lingoda - Berlin, Germany')
        ),
        React.createElement(
          Text,
          { style: styles.description },
          'Developed features for a language learning platform at a startup company, focusing on ' +
          'interactive practice exercises including quizzes, flashcards, and other engaging learning tools.'
        ),
        React.createElement(Text, { style: styles.bulletPoint }, '• Built frontend features using React with TypeScript'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Implemented UI components using MaterialUI'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Developed GraphQL API using Apollo'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Worked with backend services built on NestJS'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Managed data persistence using PostgreSQL databases'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Collaborated with cross-functional teams in a startup environment')
      ),
      
      // Quandoo
      React.createElement(
        View,
        { style: styles.jobBlock },
        React.createElement(
          View,
          { style: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap' } },
          React.createElement(
            View,
            { style: styles.dates },
            React.createElement(Text, { style: { fontSize: 9 } }, 'September 2017 - January 2021')
          ),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: styles.jobTitle }, '💻 Software Engineer'),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold', color: '#1e40af' } }, 'Quandoo - Berlin, Germany')
        ),
        React.createElement(
          Text,
          { style: styles.description },
          'Contributed to multiple teams developing complex features for a restaurant reservation ' +
          'platform, specializing in advanced UI components and SEO optimizations.'
        ),
        React.createElement(Text, { style: styles.bulletPoint }, '• Developed complex UI components including interactive carousels and responsive layouts'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Implemented SEO optimizations with extensive server-side rendering'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Built scalable features using React with Redux'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Created styled, reusable components with Styled Components'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Enhanced user experience through responsive design')
      ),
      
      // Market Logic
      React.createElement(
        View,
        { style: styles.jobBlock },
        React.createElement(
          View,
          { style: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap' } },
          React.createElement(
            View,
            { style: styles.dates },
            React.createElement(Text, { style: { fontSize: 9 } }, 'March 2016 - July 2016')
          ),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: styles.jobTitle }, '🌐 Web Developer'),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold', color: '#1e40af' } }, 'Market Logic Software - Berlin, Germany')
        ),
        React.createElement(
          Text,
          { style: styles.description },
          'Worked on development of advanced UI components for data visualization.'
        ),
        React.createElement(Text, { style: styles.bulletPoint }, '• Created interactive graphs and data visualizations using React and D3.js'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Developed dynamic widgets for data representation'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Focused on creating intuitive user interfaces')
      ),
      
      // AISA
      React.createElement(
        View,
        { style: styles.jobBlock },
        React.createElement(
          View,
          { style: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap' } },
          React.createElement(
            View,
            { style: styles.dates },
            React.createElement(Text, { style: { fontSize: 9 } }, 'April 2015 - June 2015')
          ),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: styles.jobTitle }, '💻 Software Developer'),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold', color: '#1e40af' } }, 'AISA - Mexico')
        ),
        React.createElement(
          Text,
          { style: styles.description },
          'Contributed to software development for legal document management systems in government institutions.'
        ),
        React.createElement(Text, { style: styles.bulletPoint }, '• Designed and programmed UI forms and controls using Windows Presentation Foundation (WPF)'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Developed applications using C#'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Worked with large SQL databases to manage legal documents'),
        React.createElement(Text, { style: styles.bulletPoint }, '• Collaborated on systems for government institution management')
      )
    ),
    
    // Education
    React.createElement(
      View,
      { style: styles.section },
      React.createElement(
        View,
        { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 3, paddingBottom: 3, textTransform: 'uppercase' } },
        React.createElement(GraduationCapIcon, { size: 14 }),
        React.createElement(Text, { style: styles.sectionTitle }, 'EDUCATION')
      ),
      React.createElement(
        View,
        { style: styles.educationItem },
        React.createElement(
          View,
          { style: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap' } },
          React.createElement(
            View,
            { style: styles.educationDates },
            React.createElement(Text, { style: { fontSize: 9 } }, 'August 2012 - May 2017')
          ),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: styles.educationTitle }, '🎓 Bachelor of IT Engineering'),
          React.createElement(Text, { style: { fontSize: 8, marginHorizontal: 6 } }, '|'),
          React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold', color: '#1e40af' } }, 'Tecnológico de Monterrey')
        ),
        React.createElement(
          Text,
          { style: styles.description },
          'Comprehensive studies covering Object-Oriented Programming, Data Structures, Databases, ' +
          'Networks, Servers and Operating Systems, IT Security, and Cloud Computing.'
        )
      )
    )
  ),
  
  // Page 2: Technical Skills
  React.createElement(
    Page,
    { size: 'A4', style: styles.page },
    // Page Header
    React.createElement(
      View,
      { style: { marginBottom: 15, borderBottom: '2 solid #cbd5e1', paddingBottom: 8 } },
      React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: '#1a202c' } }, '💼 Carlos Santisteban'),
      React.createElement(Text, { style: { fontSize: 11, color: '#64748b', marginTop: 3 } }, '🛠️ Skills & Competencies')
    ),
    // Technical Skills
    React.createElement(
      View,
      { style: styles.section },
      React.createElement(
        View,
        { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 3, paddingBottom: 3, textTransform: 'uppercase' } },
        React.createElement(WrenchIcon, { size: 14 }),
        React.createElement(Text, { style: styles.sectionTitle }, 'TECHNICAL SKILLS')
      ),
      
      React.createElement(Text, { style: styles.categoryTitle }, '🎨 Frontend Technologies:'),
      React.createElement(Text, { style: styles.bulletPoint }, 'JavaScript, TypeScript, HTML, CSS, React, Next.js, Redux, Zustand, MaterialUI, Styled Components, Tailwind CSS, CSS Modules, Shadcn, Webpack, Vite, ReactRouter, AMP'),
      
      React.createElement(Text, { style: styles.categoryTitle }, '⚙️ Backend & Data:'),
      React.createElement(Text, { style: styles.bulletPoint }, 'Node.js, Express, Hono, Fastify, NestJS, WebSockets, Geckos.io, Partykit, PostgreSQL, SQL, MongoDB, Redis, Convex, Prisma, NextAuth, REST APIs, GraphQL, Apollo, tRPC, AWS, Cloudflare'),
      
      React.createElement(Text, { style: styles.categoryTitle }, '🔧 Tools & Practices:'),
      React.createElement(Text, { style: styles.bulletPoint }, 'Jest, Enzyme, React Testing Library, Cypress, Playwright, Storybook, Sentry, Postman, Git, ESLint, Prettier, npm, yarn, pnpm, GitHub, GitHub Actions, Docker, Figma, Jira, Slack, Cursor, MCP, RAG')
    ),
    
    // Core Competencies
    React.createElement(
      View,
      { style: styles.section },
      React.createElement(
        View,
        { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 3, paddingBottom: 3, textTransform: 'uppercase' } },
        React.createElement(ZapIcon, { size: 14 }),
        React.createElement(Text, { style: styles.sectionTitle }, 'CORE COMPETENCIES')
      ),
      React.createElement(Text, { style: styles.categoryTitle }, '💡 Technical Expertise:'),
      React.createElement(Text, { style: styles.competencyItem }, '• Routing and State Management'),
      React.createElement(Text, { style: styles.competencyItem }, '• Client-Server Interaction'),
      React.createElement(Text, { style: styles.competencyItem }, '• Server-Side Rendering (SSR)'),
      React.createElement(Text, { style: styles.competencyItem }, '• SEO Optimization'),
      React.createElement(Text, { style: styles.competencyItem }, '• Responsive Design & UX/UI'),
      React.createElement(Text, { style: styles.competencyItem }, '• Performance Optimization'),
      React.createElement(Text, { style: styles.competencyItem }, '• Code Splitting and Lazy Loading'),
      React.createElement(Text, { style: styles.competencyItem }, '• Web Vitals and Lighthouse'),
      React.createElement(Text, { style: styles.competencyItem }, '• API Design'),
      React.createElement(Text, { style: styles.competencyItem }, '• Code Quality & Code Reviews'),
      React.createElement(Text, { style: styles.competencyItem }, '• Security Best Practices'),
      React.createElement(Text, { style: styles.competencyItem }, '• Documentation'),
      React.createElement(Text, { style: styles.competencyItem }, '• Debugging and Troubleshooting'),
      React.createElement(Text, { style: styles.competencyItem }, '• Cross-Functional Team Collaboration'),
      React.createElement(Text, { style: styles.competencyItem }, '• Unit Testing & CI/CD'),
      React.createElement(Text, { style: styles.competencyItem }, '• Agile Methodology'),
      React.createElement(Text, { style: styles.competencyItem }, '• AI-Assisted Development')
    )
  )
);

module.exports = CV;
