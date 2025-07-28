# Design Document

## Overview

The Spots content and styling implementation creates a responsive photo sharing platform with a clean, modern design. The architecture follows BEM methodology with a component-based CSS structure, ensuring maintainability and scalability. The design emphasizes visual hierarchy, responsive behavior, and accessibility while maintaining consistency across all device sizes.

## Architecture

### File Structure

The implementation follows the established Flat BEM structure:

```
├── blocks/
│   ├── page.css (existing)
│   ├── header.css
│   ├── profile.css
│   ├── cards.css
│   ├── card.css
│   ├── content.css
│   └── footer.css
├── pages/
│   └── index.css (imports all blocks)
├── vendor/
│   ├── normalize.css
│   ├── fonts.css
│   └── fonts/
└── images/ (contains all project images)
```

### CSS Import Strategy

The main `pages/index.css` file imports all dependencies in the correct order:

1. normalize.css (reset styles)
2. fonts.css (font declarations)
3. All block CSS files (components)

### Responsive Design Strategy

The design uses a mobile-first approach with three main breakpoints:

- Mobile: 320px - 629px (base styles)
- Tablet: 630px - 1319px (intermediate adjustments)
- Desktop: 1320px+ (full desktop layout)

## Components and Interfaces

### Header Component (.header)

**Purpose:** Displays the site branding and navigation
**Structure:**

- Simple header with centered "Spots" title
- Consistent padding and typography
- Responsive behavior across breakpoints

**CSS Classes:**

- `.header` - Main container
- `.header__title` - Site title/logo

### Profile Component (.profile)

**Purpose:** Displays user information with avatar and description
**Structure:**

- Flexible layout that adapts from horizontal (desktop) to vertical (mobile)
- Avatar image with proper sizing and aspect ratio
- User name and description with overflow handling

**CSS Classes:**

- `.profile` - Main container
- `.profile__image` - User avatar
- `.profile__info` - Text content wrapper
- `.profile__name` - User name
- `.profile__description` - User description text

**Layout Behavior:**

- Desktop: Flexbox row with avatar left, text right
- Mobile: Flexbox column with centered alignment

### Cards Grid Component (.cards)

**Purpose:** Responsive grid container for photo cards
**Structure:**

- CSS Grid layout with auto-fit columns
- Responsive column count based on screen size
- Consistent gap spacing

**CSS Classes:**

- `.cards` - Grid container
- Uses CSS Grid with `auto-fit` and `minmax()` for responsiveness

### Individual Card Component (.card)

**Purpose:** Individual photo card with image and title
**Structure:**

- Image with proper aspect ratio and object-fit
- Title with overflow handling
- Hover effects for interactivity

**CSS Classes:**

- `.card` - Card container
- `.card__image` - Photo image
- `.card__title` - Location title

**Interaction Design:**

- Hover effects on entire card
- Image scaling or overlay effects
- Smooth transitions

### Content Component (.content)

**Purpose:** Main content wrapper with proper spacing and centering
**Structure:**

- Maximum width constraint (1280px)
- Centered alignment with auto margins
- Side padding to prevent edge touching

**CSS Classes:**

- `.content` - Main content container

### Footer Component (.footer)

**Purpose:** Site footer with copyright information
**Structure:**

- Simple centered text
- Consistent with overall design language

**CSS Classes:**

- `.footer` - Footer container
- `.footer__copyright` - Copyright text

## Data Models

### Image Assets

The design requires the following image types:

- **Avatar Image:** User profile photo (square aspect ratio recommended)
- **Card Images:** 6 location photos (consistent aspect ratio for grid alignment)
- **Favicon:** Site icon for browser tab

### Content Structure

```html
<div class="page">
  <header class="header">
    <h1 class="header__title">Spots</h1>
  </header>
  <main class="content">
    <section class="profile">
      <img class="profile__image" src="..." alt="..." />
      <div class="profile__info">
        <h2 class="profile__name">...</h2>
        <p class="profile__description">...</p>
      </div>
    </section>
    <section class="cards">
      <article class="card">
        <img class="card__image" src="..." alt="..." />
        <h3 class="card__title">...</h3>
      </article>
      <!-- Repeat for 6 cards -->
    </section>
  </main>
  <footer class="footer">
    <p class="footer__copyright">...</p>
  </footer>
</div>
```

## Responsive Breakpoint Strategy

### Desktop View (1320px+)

- Content max-width: 1280px, centered
- Profile: Horizontal layout (avatar left, text right)
- Cards: 3 columns grid
- Full spacing and typography as designed

### Tablet View (630px - 1319px)

- Content adapts to available width with side padding
- Profile: Maintains horizontal layout with adjusted spacing
- Cards: 2 columns grid
- Typography remains consistent

### Mobile View (320px - 629px)

- Content uses full width with minimum side padding (20px)
- Profile: Vertical layout, centered alignment
- Cards: 1 column grid
- Adjusted typography and spacing for mobile consumption

## Typography System

### Font Implementation

- **Primary Font:** Poppins (loaded via @font-face)
- **Fallback Chain:** Arial, Helvetica, sans-serif
- **Font Files:** Only necessary weights (Regular 400, Medium 500)

### Typography Scale

- **Header Title:** Large, prominent sizing
- **Profile Name:** Medium-large, bold weight
- **Profile Description:** Regular size, readable line-height
- **Card Titles:** Compact, single-line with ellipsis
- **Footer Text:** Small, subtle

### Text Overflow Handling

- **Single Line (Card Titles):**
  ```css
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ```
- **Multi-line (Profile Description):**
  ```css
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ```

## Color Scheme

### Primary Colors

- **Background:** #FCF5E5 (warm cream)
- **Text:** Dark colors for readability
- **Accent Colors:** Subtle colors for hover states and emphasis

### Accessibility Considerations

- Sufficient contrast ratios for all text
- Clear visual hierarchy through color and typography
- Consistent color usage across components

## Error Handling

### Image Loading Failures

- All images include descriptive alt attributes
- Graceful degradation when images fail to load
- Proper aspect ratios maintained even without images

### Font Loading Failures

- Robust fallback font stack
- System fonts ensure readability even if custom fonts fail
- No layout shifts during font loading

### Responsive Breakpoint Edge Cases

- Smooth transitions between breakpoints
- No horizontal scrolling at any screen size
- Content remains accessible and readable at all sizes

## Testing Strategy

### Cross-Browser Testing

- Modern browser compatibility
- Fallback support for older browsers
- Progressive enhancement approach

### Responsive Testing

- Test at exact breakpoints (320px, 630px, 1320px, 1440px)
- Test intermediate sizes for smooth transitions
- Verify no horizontal scrolling occurs

### Accessibility Testing

- Screen reader compatibility
- Keyboard navigation support
- Color contrast validation
- HTML semantic structure validation

### Performance Testing

- Font loading optimization
- Image optimization and proper sizing
- CSS efficiency and minimal redundancy

### Code Quality Testing

- W3C HTML validation
- CSS validation
- BEM methodology compliance
- Prettier formatting consistency
