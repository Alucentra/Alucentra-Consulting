# Component API Reference

## UI Components

### Card Component
**File:** `src/components/ui/Card.js`

#### Card
Primary container component with glassmorphism styling.

**Props:**
- `children` (ReactNode) - Content to be rendered inside the card
- `className` (string, optional) - Additional CSS classes to apply

**Default Styling:**
- Background: White with 70% opacity
- Border radius: Extra large (rounded-2xl)
- Shadow: Medium drop shadow
- Padding: 1rem (p-4)
- Max width: Small (max-w-sm)
- Positioning: Centered (mx-auto)

**Usage:**
```jsx
<Card className="custom-class">
  <CardContent>Your content here</CardContent>
</Card>
```

#### CardContent
Content wrapper component for cards.

**Props:**
- `children` (ReactNode) - Content to be rendered
- `className` (string, optional) - Additional CSS classes

**Default Styling:**
- Text color: Gray-700

**Usage:**
```jsx
<CardContent className="text-center">
  <h2>Card Title</h2>
  <p>Card description</p>
</CardContent>
```

### Button Component
**File:** `src/components/ui/Button.js`

Primary action button component.

**Props:**
- `children` (ReactNode) - Button text or content
- `onClick` (function, optional) - Click handler function
- `className` (string, optional) - Additional CSS classes

**Default Styling:**
- Background: Blue-600
- Text color: White
- Border radius: Extra large (rounded-xl)
- Padding: 1.5rem horizontal, 0.75rem vertical
- Font size: Large
- Hover: Blue-700 background
- Transition: Color transition over 200ms

**Usage:**
```jsx
<Button onClick={handleClick} className="w-full">
  Contact Us
</Button>
```

## Page Components

### Home Component
**File:** `src/Home.js`

Landing page component with hero section and service overview.

**Features:**
- Hero background image
- Service cards with hover animations (Framer Motion)
- Call-to-action section
- Responsive grid layout (1 column mobile, 3 columns desktop)

**Dependencies:**
- framer-motion (motion.div)
- react-router-dom (Link)
- UI components (Card, CardContent, Button)

### Services Component
**File:** `src/Services.js`

Service listing page with detailed service descriptions and navigation to sub-pages.

**Features:**
- 2x2 grid layout on desktop
- Individual service cards
- Responsive design
- Interactive Strategy & Transformation card with link to sub-page

**Services Listed:**
1. Strategy & Transformation (clickable - links to `/services/strategy`)
2. Process Design (clickable - links to `/services/process-design`)
3. Change Management
4. Consulting & Advisory

### Strategy Component
**File:** `src/Strategy.js`

Comprehensive Strategy & Transformation service page with detailed information.

**Features:**
- Breadcrumb navigation
- Service overview with approach icons
- Detailed service areas (4 main areas)
- Process visualization (4-step process)
- Why choose us section
- Call-to-action with multiple buttons

**Content Sections:**
- Hero section with service description
- Our approach (3-column layout with icons)
- What we deliver (4 service areas)
- Our process (4-step methodology)
- Why choose Alucentra (2-column benefits)
- Call-to-action section

**Service Areas Covered:**
1. Digital Transformation Strategy
2. Organizational Restructuring
3. Strategic Planning
4. Culture Transformation

### Process Design Component
**File:** `src/ProcessDesign.js`

Comprehensive Process Design service page focusing on Six Sigma and Lean methodologies.

**Features:**
- Breadcrumb navigation
- Six Sigma and Lean methodology sections
- DMAIC process visualization (5-step process)
- Service deliverables (4 main areas)
- Benefits section with quantified results
- Industry applications showcase
- Call-to-action with multiple buttons

**Content Sections:**
- Hero section with methodology focus
- Our approach (3-column layout with icons)
- Proven methodologies (Six Sigma & Lean)
- What we deliver (4 deliverable areas)
- DMAIC process (5-step methodology)
- Benefits (4 benefit categories with metrics)
- Industry applications (6 industries)
- Call-to-action section

**Methodologies Featured:**
1. Six Sigma Excellence (DMAIC, Statistical Process Control)
2. Lean Manufacturing (Value Stream Mapping, 5S, Kaizen)

**Service Deliverables:**
1. Process Mapping & Analysis
2. Quality Management Systems
3. Workflow Optimization
4. Continuous Improvement Framework

### Change Management Component
**File:** `src/ChangeManagement.js`

Comprehensive Change Management service page featuring PROSCI and ADKAR methodologies.

**Features:**
- Breadcrumb navigation
- PROSCI credibility data and research foundation
- ADKAR model visualization (5-element framework)
- Service deliverables (4 main areas)
- Benefits section with quantified results
- Change management applications showcase
- Call-to-action with multiple buttons

**Content Sections:**
- Hero section with people-centric approach
- Our approach (3-column layout with focus areas)
- PROSCI credibility (research foundation & global recognition)
- ADKAR model (5-element individual change framework)
- What we deliver (4 deliverable areas)
- Benefits (4 benefit categories with ROI metrics)
- Application areas (6 transformation types)
- Call-to-action section

**Methodologies Featured:**
1. PROSCI Methodology (25+ years research, 5,000+ organizations)
2. ADKAR Model (Awareness, Desire, Knowledge, Ability, Reinforcement)

**Key Statistics:**
- 6x more likely to meet objectives with structured change management
- 143% average ROI on change management investment
- 95% project success rate with excellent change management
- 70% reduction in change resistance

**Service Deliverables:**
1. Change Strategy & Planning
2. Communication & Engagement
3. Training & Development
4. Reinforcement & Sustainability

### Consulting & Advisory Component
**File:** `src/ConsultingAdvisory.js`

Comprehensive Consulting & Advisory services page featuring strategic planning, project portfolio management, and executive presentations.

**Features:**
- Breadcrumb navigation
- Core service areas (4 main specializations)
- Specialized advisory services (6 additional services)
- Service deliverables (4 main categories)
- Benefits section with performance metrics
- Industry applications showcase
- Call-to-action with multiple buttons

**Content Sections:**
- Hero section with strategic expertise focus
- Our approach (3-column layout with key principles)
- Core service areas (Strategic Planning, Project Portfolio Management, Executive & Board Presentations, Organizational Development)
- Specialized advisory services (Risk Management, Performance Analytics, Due Diligence, Market Research, Business Modeling, Interim Leadership)
- What we deliver (4 deliverable categories)
- Benefits (4 benefit areas with performance improvements)
- Industry applications (6 industry sectors)
- Call-to-action section

**Core Service Areas:**
1. Strategic Planning (visioning, market analysis, SWOT, roadmap development)
2. Project Portfolio Management (optimization, prioritization, PMO, governance)
3. Executive & Board Presentations (briefings, strategic communications, data visualization)
4. Organizational Development (design, leadership development, performance management)

**Key Performance Metrics:**
- 40% improvement in strategic alignment
- 25% average performance improvement
- 70% reduction in project failures
- 60% faster decision-making processes

**Service Deliverables:**
1. Strategic Assessments
2. Strategic Plans & Roadmaps
3. Governance & Frameworks
4. Capacity Building

### About Component
**File:** `src/About.js`

Company information page with mission, values, and brand story.

**Content Sections:**
- Company description
- Mission statement
- Core values list
- Brand name etymology

### Contact Component
**File:** `src/Contact.js`

Contact form page with Formspree integration.

**Features:**
- Contact form with validation
- Loading states
- Success/error messaging
- Form reset after submission

**Form Fields:**
- Name (required)
- Email (required)
- Message (required, textarea)

**Integration:**
- Formspree endpoint: `https://formspree.io/f/xovwpakl`
- Method: POST
- Response handling: JSON

## Styling Conventions

### Tailwind CSS Classes

#### Layout
- `min-h-screen` - Full viewport height
- `bg-cover bg-center` - Background image styling
- `max-w-{size} mx-auto` - Centered containers
- `grid grid-cols-1 md:grid-cols-{n}` - Responsive grids

#### Colors
- `text-gray-800` - Primary text
- `text-gray-600/700` - Secondary text
- `text-indigo-600` - Link hover color
- `bg-white/70` - Glassmorphism background
- `backdrop-blur-sm` - Blur effect

#### Spacing
- `p-6` - Outer padding
- `p-8` - Inner container padding
- `mt-12` - Top margin for main containers
- `mb-8` - Bottom margin for sections
- `space-x-8` - Navigation spacing

#### Typography
- `text-4xl font-bold` - Main headings
- `text-3xl font-bold` - Page titles
- `text-xl font-semibold` - Section titles
- `text-lg` - Body text
- `font-medium` - Navigation links

## Animation Patterns

### Framer Motion
Used for interactive animations on the home page.

**Card Hover Animation:**
```jsx
<motion.div whileHover={{ scale: 1.03 }}>
  <Card>...</Card>
</motion.div>
```

**Properties:**
- `whileHover` - Animation on hover state
- `scale: 1.03` - Slight scale increase (3%)

## Routing Structure

### React Router Configuration
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Navigation Component
Horizontal navigation bar with:
- Logo image
- Navigation links with hover effects
- Responsive spacing
- Centered layout
