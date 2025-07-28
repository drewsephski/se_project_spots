Project requirements
This document contains general requirements and best practices for Spots Stage
corresponding project pages.
File Structure
The project must contain the following files:
A blocks directory with BEM blocks stored in separate CSS files (Flat BEM)
An images directory with all the images
A pages directory with an index.css file stored inside it
The index.html file
A README.md file
A .prettierignore file, which tells Prettier to ignore normalize.css
A .gitignore file, which tells Git to ignore .DS_Store
A vendor directory containing
normalize.css
fonts.css
a fonts directory
vendor/fonts stores only the necessary font files
General Requirements
The page has six photo cards. The photos and location names are up to you.
The HTML and CSS are error-free, and the code must be valid. We
recommend checking your code for validity using the W3C Markup Validator.
The code is well-formatted using Prettier.
Spots Stage 2 General Criteria 1
The viewport meta tag is set correctly, and title and lang must be used.
The cumulative value of the width , padding , and margin properties for each
element is specified to within 30px of the design requirements at the 1440px
breakpoint.
HTML Semantics
The page has a first-level heading.
Headings are made using the appropriate tags (from <h1> to <h6> ). Text blocks
are made with <p> tags. The <header> , <main> , <footer> , <section> , <ul> , and <li>
elements must be present in the code and used for their intended purposes.
Elements are not wrapped in <div> tags unless required for alignment
purposes.
The hierarchy of headings is consistent (i.e., no heading levels are missing).
Tags such as <br> , <b> , <i> , <em> , and <strong> , may only be used if indicated
in the project instructions.
Accessibility
All links and interactive elements must have a :hover state.
All <img> elements must have an alt attribute containing a description in the
page language.
Responsive design
The layout doesn't break between breakpoints:
Media queries must be properly used so that the layout is maintained at all
resolutions.
Displays with a width of 320px or more can’t have horizontal scrolling.
Text can’t overflow its corresponding block boundary.
The cumulative value of the width , padding , and margin properties for each
element is specified to within 10px of the design requirements at 320px .
Spots Stage 2 General Criteria 2
In the intermediate dimensions (between 320 and 1280), the layout should look
similar to either the desktop or mobile view.
Aside from the <header> , elements do not touch the sides of the container on
any screen larger than 320px .
CSS
normalize.css must be imported into index.css before other CSS files.
The page content is centered.
The page has no white margins.
!important is not used.
The Poppins font family is used. Font sizes, weights, and colors are the same as
in the design.
System fonts are connected as alternatives to each of your fonts. No extra
fonts are connected, and the fonts folder doesn't contain any extra font files.
Relative values and appropriate CSS properties are used to set block sizes. For
example, use max-width instead of width for text elements.
The padding for each section is set separately; negative values of the margin
are not used.
Margins are not used unnecessarily (for positioning elements on the page).
Text elements don't have a fixed height, only have a fixed width if specified in
the design, and will expand if more text is added to them.
Absolute positioning is only used in instances where static or relative
positioning can't be used.
For elements with absolute positioning, top and bottom declarations are not
used simultaneously, and neither are left and right .
A horizontal scroll bar does not appear when changing the width of the
preview window in the debugger.
Breakpoints are grouped together. If there's a small difference in pixels
between breakpoints in the @media at-rule, e.g., max-width: 1044px and max-width:
Spots Stage 2 General Criteria 3
1080px , it's better to change the resolution in one of the media queries so that
they have the same value.
The project visually matches the design and is displayed correctly for all
screen resolutions, as shown in the design.
The same styles are not duplicated across different media queries. Each
@media at-rule must only describe styles that are different from another @media
at-rule.
The maximum width is set for the content according to the design.
To prohibit text wrapping and stretching of the card’s title, use the following
properties:
.block {
 text-overflow: ellipsis;
 white-space: nowrap;
 overflow: hidden;
}
To clamp the maximum rows of text for the profile elements and hide overflow
text, use the following properties:
.block {
 text-overflow: ellipsis;
 overflow: hidden;
 display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
}
BEM Methodology
Stylesheets don’t use tag selectors to set CSS rules.
No more than two selectors are nested in any CSS rule.
Spots Stage 2 General Criteria 4
Stylesheets and images are located in separate folders and organized into
blocks. Files are organized within a Flat BEM file structure.
Blocks are imported into the corresponding page file. CSS rules for elements
and modifiers are declared in the corresponding CSS block file.
Modifiers don’t contain duplicate styles of the element or block being
modified. They can contain only the properties that are being modified.
There are no class attributes with a BEM modifier as their only value. For
example, this is wrong: <div class="block__element_mod-name_mod-value"> . This is correct:
<div class="block__element block__element_mod-name_mod-value"> .
Components that share similar styles or functions are represented by the same
BEM entity, i.e., a block or an element.
Other
The README.md file contains the following:
1. The project's name
2. A description of the project and its functionality
3. A description of the technologies and techniques used
4. Pictures, GIFs, or screenshots that detail the project features (highly
recommended)
5. The link to your deployed project on GitHub Pages