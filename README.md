# AdaptNXT Website Redesign

## Overview
Modern, enterprise-grade B2B website for AdaptNXT Technology Solutions - a company specializing in IoT, AI/ML, Cloud Solutions, and Digital Transformation.

## File Structure
```
adaptnxt-redesign/
├── index.html                 # Homepage
├── services.html              # Services overview page
├── industries.html            # Industries we serve
├── technologies.html          # Technology stack
├── case-studies.html          # Case studies & success stories
├── about.html                 # About us & company values
├── knowledge-hub.html         # Blog/articles page
├── contact.html               # Contact information & form
├── css/
│   └── styles.css            # Main stylesheet with CSS variables
├── js/
│   └── script.js             # Interactive functionality
└── README.md                 # This file
```

## Features

### Design & UX
- Modern, clean enterprise SaaS aesthetic
- Fully responsive (mobile, tablet, desktop)
- Sticky navigation with smooth scrolling
- Professional typography using Inter font
- Consistent color scheme with CSS variables
- Subtle animations and transitions
- Accessible design (WCAG compliant)

### Technical Features
- Semantic HTML5 markup
- CSS Grid and Flexbox layouts
- CSS custom properties for theming
- Vanilla JavaScript (no dependencies)
- Form validation
- FAQ accordion
- Mobile-friendly navigation
- SEO optimized (meta tags, structured data)
- Fast loading and performance optimized

### SEO
- Proper heading hierarchy
- Meta descriptions and Open Graph tags
- JSON-LD structured data for organization
- Semantic HTML for better crawling
- Optimized for Core Web Vitals

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup & Deployment

### Local Development
1. Clone or download the files
2. Open index.html in a web browser
3. For local server (optional):
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Production Deployment
Upload all files to your web hosting, ensuring the file structure is maintained.

### Customization
- **Colors**: Edit CSS variables in `:root` selector in styles.css
- **Content**: Update HTML files with actual company content
- **Images**: Replace SVG placeholders with actual images
- **Forms**: Connect form submission to your backend API

## Contact Information
- **India Office**: First Floor, L374, 5th Main Rd, HSR Layout, Bengaluru 560102
- **Canada Office**: 1172 Mount Pleasant Road, Toronto, ON M4N 2T2
- **Phone**: +91 83103 19838
- **Email**: [email protected]

## Key Pages

### Homepage (index.html)
- Hero section with value proposition
- Trust indicators
- Services overview (5 main categories)
- Industries served
- Case studies showcase
- Process/How we work
- Technologies
- 30-day outcomes
- Knowledge hub preview
- FAQ section
- Consultation form
- CTA banner

### Services (services.html)
Detailed pages for:
- Software for IoT
- AI & Machine Learning
- Business Process Improvement
- Product Engineering
- Cloud Solutions

### Contact (contact.html)
- Multiple contact methods
- Email addresses for different purposes
- Office locations (India & Canada)
- Contact form
- Map integration ready

## Notes
- All forms currently show alert messages (frontend only)
- Connect to backend API for production form submissions
- Replace placeholder logos and images with actual assets
- Add Google Analytics or tracking code as needed
- Consider adding a CMS for blog/knowledge hub content

## License
© 2025 AdaptNXT® Technology Solutions Pvt Ltd. All rights reserved.
