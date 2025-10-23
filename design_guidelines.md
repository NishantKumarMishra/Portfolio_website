# Portfolio Website Design Guidelines for Nishant Kumar Mishra

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from modern developer portfolios like Bruno Simon, Brittany Chiang's portfolio, and Linear's clean aesthetic combined with GitHub's professional tone.

## Core Design Principles
1. **Technical Sophistication**: Clean, modern aesthetic that reflects software engineering expertise
2. **Content-First**: Prioritize showcasing work and achievements
3. **Performance**: Fast-loading, optimized for developer audience
4. **Scannable**: Easy navigation for recruiters reviewing quickly

## Typography System
- **Primary Font**: Inter or DM Sans via Google Fonts (professional, technical)
- **Accent Font**: JetBrains Mono for code snippets and technical details
- **Hierarchy**:
  - Hero Name: text-5xl to text-7xl, font-bold
  - Section Headings: text-3xl to text-4xl, font-semibold
  - Subsection Headings: text-xl to text-2xl, font-medium
  - Body Text: text-base to text-lg, font-normal
  - Technical Labels: text-sm, font-mono

## Layout & Spacing System
**Tailwind Units**: Consistent spacing using 4, 6, 8, 12, 16, 20, 24, 32 units
- Section Padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component Gaps: gap-6 to gap-12
- Container: max-w-6xl for content sections, max-w-7xl for full sections

## Page Structure (Single-Page Portfolio)

### 1. Navigation Bar
- Fixed top navigation with smooth scroll behavior
- Logo/Name on left, navigation links on right
- Links: About, Experience, Projects, Skills, Contact
- Mobile: Hamburger menu with slide-in panel
- Spacing: px-6 py-4, backdrop-blur with semi-transparent background

### 2. Hero Section (100vh)
- **Large Hero Image**: Abstract tech/code visualization or professional workspace photo as full-width background with subtle overlay
- Split layout: 60% text content (left), 40% visual accent (right)
- Content hierarchy:
  - "Hi, I'm Nishant" - text-lg, accent color
  - Main headline: "Software Engineer" - text-6xl to text-7xl, font-bold
  - Subtitle: "Building scalable systems with Java, React & Cloud" - text-xl, muted
  - Quick stats bar: "500+ Problems Solved • 3+ Years Experience • Full Stack Expert"
  - CTA buttons: "View Projects" (primary), "Download Resume" (secondary) with backdrop-blur backgrounds
  - Social links (GitHub, LinkedIn, Email) as icon buttons
- Spacing: px-8 to px-16, generous vertical padding

### 3. About Section
- Two-column layout: Professional headshot/photo (left, rounded-2xl), bio text (right)
- Bio highlights: Current role, specializations, passion statement
- Technical focus areas as pill badges
- Spacing: py-24, gap-12 between columns

### 4. Experience Section
- Timeline-style layout with vertical line connector
- Each position as card component:
  - Company logo/icon (if available, else colored accent square)
  - Job title + company name (text-xl, font-semibold)
  - Date range (text-sm, muted)
  - Bullet points with achievements
  - Tech stack tags at bottom
- Three experiences: Pysellers (Apr-Aug 2025), Piquant (Sept 2024-Mar 2025), HCL (Jul-Sept 2022)
- Spacing: gap-8 between cards, p-6 within cards

### 5. Projects Section
- Grid layout: 2 columns on desktop, 1 on mobile
- Featured projects as interactive cards:
  - **AI-based Testing Assistant**: Full card with project screenshot/mockup placeholder
  - **Employee Management System**: Full card with project screenshot/mockup placeholder
- Each card includes:
  - Project image/visual (aspect-ratio-video, rounded-xl)
  - Title (text-2xl, font-semibold)
  - Description (2-3 lines)
  - Tech stack badges
  - Action buttons: "View Demo" + "GitHub" with icons
- Hover state: Subtle lift effect (transform scale)
- Spacing: gap-8 between cards, p-6 within cards

### 6. Technical Skills Section
- Multi-category grid layout (3-4 columns on desktop)
- Categories: Languages, Frameworks & Tools, Databases, Cloud & DevOps, Testing
- Each category as card with:
  - Category icon/emoji
  - Category title (text-lg, font-semibold)
  - Skills as grid of badges/pills
- Visual hierarchy with icon sizes and badge prominence
- Spacing: gap-6 between cards, gap-3 for skill badges

### 7. Achievements & Certifications
- Highlight cards in 3-column grid:
  - **Problem Solving**: "500+ Problems Solved" with LeetCode/GFG logos, rank badge
  - **NPTEL Certification**: Certificate icon with course name
  - **Hackathon Winner**: Trophy icon with event details
- Each card with icon, title, description, visual badge/metric
- Spacing: gap-6, p-6 within cards

### 8. Contact Section
- Centered layout with multiple contact options
- Primary: Contact form (Name, Email, Message fields)
- Secondary: Direct contact cards (Email, Phone, LinkedIn, GitHub) in 2x2 grid below form
- Form styling: Bordered inputs with focus states, textarea for message
- CTA: "Send Message" button (full-width on mobile)
- Spacing: py-24, gap-8

### 9. Footer
- Full-width with subtle top border
- Content layout:
  - Left: "Built with React • Designed by Nishant" text
  - Center: Quick navigation links
  - Right: Social media icons
- Secondary row: Copyright text, back-to-top button
- Spacing: py-8, px-8

## Component Library

### Cards
- Border radius: rounded-xl to rounded-2xl
- Borders: Subtle 1px borders or shadows
- Padding: p-6 to p-8
- Hover: Subtle shadow increase, slight scale transform

### Buttons
- Primary: Solid fill, rounded-lg, px-6 py-3
- Secondary: Outlined, rounded-lg, px-6 py-3
- Icon buttons: Circular or square, p-2 to p-3
- All buttons: Backdrop-blur when on images

### Badges/Pills
- Small rounded-full pills for tech stacks
- Padding: px-3 py-1, text-sm
- Various semantic categories (language, framework, tool)

### Form Elements
- Input fields: Bordered, rounded-lg, px-4 py-3
- Focus states: Border accent, subtle shadow
- Labels: text-sm, font-medium, mb-2

### Icons
- Use Heroicons for UI elements
- Size: w-5 h-5 for inline, w-6 h-6 for standalone, w-8 h-8 for featured

## Interactions & Animations

### Scroll Behavior
- Smooth scroll for navigation links
- Subtle fade-in animations for sections as they enter viewport
- Intersection Observer for triggering animations

### Micro-interactions
- Button hover: Slight scale or shadow change
- Card hover: Lift effect with shadow
- Link hover: Underline animation
- Form focus: Border color transition

### Navigation
- Active section highlight in navbar
- Scroll progress indicator (optional thin line at top)

## Images

### Hero Section
**Large Background Image**: Abstract code visualization, terminal/IDE screenshot with code, or professional workspace setup. Should be high-quality, slightly desaturated, with dark overlay (opacity-70) to ensure text readability.

### About Section
**Professional Headshot**: High-quality photo, professional attire, neutral background. Aspect ratio 1:1, rounded corners (rounded-2xl).

### Project Cards
**Project Screenshots/Mockups**: 
- AI Testing Assistant: Dashboard screenshot showing code analysis interface
- Employee Management System: CRUD interface or admin panel view
- Aspect ratio: 16:9, rounded-xl

### Achievement Cards
**Icons/Badges**: Use icon library or simple illustrative graphics for each achievement category.

## Responsive Behavior
- **Desktop (lg+)**: Full multi-column layouts, horizontal navigation
- **Tablet (md)**: 2-column grids reduced to single column where needed
- **Mobile**: All sections stack vertically, hamburger menu, touch-optimized spacing
- Container padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)

## Accessibility
- Semantic HTML structure (header, nav, main, section, footer)
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for all images
- Form labels properly associated

## Modular Architecture Notes
- Each section as separate React component
- Shared components: Card, Button, Badge, SectionHeading
- Data-driven: Skills, projects, experiences from JSON/config files
- Easy to add/remove sections by commenting out imports
- Prop-based customization for reusable components