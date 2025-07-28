Project requirements
This document contains general requirements and best practices for Spots Stage
2. It doesn’t include the specific project tasks, which are listed in checklists on the
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

Task 1. Create the file structure
The first task is to create the files and directories for our project. Once you’re finished with this step, your project should look like this:

├── blocks
│   └── page.css
├── images
│   ├── ...
│   ├── ... image files
|   └── ...
├── pages
│   └── index.css
└── vendor
    ├── fonts
    │   ├── (empty for now)
    ├── fonts.css
    └── normalize.css
├── .gitignore
├── .prettierignore
├── favicon.ico
├── index.html
└── README.md
The README.md and .gitignore files are already present. Here are the steps for setting up the rest of the file structure. Our instructions use the command line and assume that the current working directory is the project’s root. You are welcome to use VS Code’s graphical interface instead.

Start by creating the four directories. If you’re in the root directory of your project, you can do this with the following command: mkdir blocks images pages vendor
Create the nested vendor/fonts directory: mkdir vendor/fonts
Create index.html in the project’s root and index.css in the pages directory: touch index.html
Create three CSS files: pages/index.css, blocks/page.css, and vendor/fonts.css. These can be created with one command line: 
 touch pages/index.css blocks/page.css vendor/fonts.css
Download the image archive and extract the files. Then, drag and drop all of the images into the images directory.
📂 spots-images.zip
One of the image files is favicon.ico. This is the image that will appear in the browser tab, and it is usually placed in the root directory. You can move it there with mv images/favicon.ico .
Your project will also need .editorconfig and normalize.css files with the same content you used in your previous project. You can drag these files to the new project or copy them via the command line with the cp command.
Last, add a .prettierignore file to your project and add one line of text to it: vendor/normalize.css. This instructs Prettier to ignore this file when formatting.
File structure checklist
Use this checklist to make sure your project has the correct file structure before proceeding. Your project should contain:


An images directory, containing all the project’s images


A vendor directory, containing normalize.css, fonts.css, and a nested fonts directory.


A pages directory containing index.css


A blocks directory containing page.css


README.md


favicon.ico


index.html


.editorconfig


.gitignore


.prettierignore

2. Create the HTML page structure
Now we can start coding! 

Open index.html and outline the basic document structure: the <!DOCTYPE> declaration and the <html> tags with the <head> and <body> tags nested inside. 

❇️ Pro tip:

We can use Emmet abbreviations to quickly produce some common HTML and CSS code, including the basic document structure. Just type ! in an HTML file and hit TAB.

3. Add metadata to the page’s <head>
To kick things off, let’s provide some useful information for browsers and search engines. If you need a refresher, refer to the “Metadata” chapter in Sprint 1.

Add a <title></title> tag with a title for your project. You can try to be creative, or just use “Spots.”
Set the page language to English.
Use <meta> tags to set the following:
The character encoding to UTF-8.
The viewport is defined so that 1) the width of the page matches the user’s device-width, and 2) initial-scale is equal to 1.
For SEO (Search engine optimization): description (1-2 sentences), author with your name, and keywords.
Connect index.css to index.html using a <link> tag.
Connect the favicon using another <link>.
Connect normalize.css to index.css using an @import statement.
❇️ Pro tip:
Keep in mind that these files are in different locations. The favicon and index.html are both in the root, but index.css and normalize.css are both inside separate folders. Take this into consideration when writing the file paths.

4. Outline the main blocks of the webpage
💡 In this section, we’ll use Emmet shorthand to describe tags. For example, div.page is short for a <div> with the class "page".  You can create this element easily by typing div.page followed by the TAB key.

As in your previous projects, we’ll wrap our page content in a single <div> element. Inside this <div>, we’ll add the header, footer, and main content areas. Add the following elements:

Inside the <body>, add a div.page element
Inside the div.page, add three elements: header.header, main.content, and footer.footer.
Now, take a look at the screenshot below. You’ve already created the other structure. Add two <section> tags inside the <main> tag and give them the appropriate classes.

A screenshot of the Spots application. The header, main content area, and footer are highlighted. Inside the main content area, two subsections are emphasized, with class names “profile” and “cards.”

5. Style the page class
The div.page is our outermost styled element. For now, all it needs is the background color: #FCF5E5.

Make sure to follow the BEM flat file structure. Styles for the page class should go in blocks/page.css. 

6. Set up the fonts
💡 If you need a refresher on this section, refer to the “Adding Fonts” lesson earlier in this chapter.

All fonts used in this project are from the Poppins family, which you can download here: https://fonts.google.com/specimen/Poppins. 

Just click the Get font button, followed by Download all. Inside, you’ll find font files for all of the Poppins typefaces. Your @font-face declarations should look something like this:

@font-face {
  font-family: "Poppins";
  font-style: normal;
   /* Replace with the appropriate font weight */
  font-weight: 400;
  /* Replace with the correct file path */
  src: url("./fonts/Poppins-Regular.ttf") format("truetype");
}
Add the necessary font files and @font-face declarations to your project’s vendor directory. When you’re finished, the directory should look like this:

└── vendor
    ├── fonts
    │   ├── Poppins-Medium.ttf
    │   └── Poppins-Regular.ttf
    ├── fonts.css
    └── normalize.css
💡 Keep in mind the following important considerations:

Don't forget to import fonts.css into index.css.
Only include the font files and declarations that you actually need for this project. If you include them all, your project will likely exceed the size limitation.
Make sure to update the file paths used in the @font-face declarations to reflect your project's file structure.
Task 7. Verifying that the styles and fonts are correctly linked
To apply the Poppins font family to all text elements, add the appropriate font-family declaration to the .page selector. Include Arial, Helvetica, and sans-serif as fallbacks.

Before submitting your project, check that the fonts are set up correctly and the styles are linked. You can do this by temporarily adding some text somewhere inside thepage block. 

When you open the page in the browser, you should see the correct background color, although it will only cover a small strip of the page.

Next, select the element containing the text with the element inspector, and open the Computed panel. Make sure that this panel shows the appropriate font styles.

A webpage is open with the text “Testing…” showing. The text is selected with the developer’s tools, and the Computed tab is open. The rendered font is shown to be Poppins.


Checklist and project criteria

Spots Stage 1 requirements
The criteria for this stage are minimal. We’ll provide a more detailed PDF in the next project stage.


The project has the correct file structure. 


The HTML document contains a <head>.


The <head> contains a <title> and the four specified <meta> tags.


index.css and favicon.ico are linked to the HTML.


normalize.css, fonts.css, and page.css are imported into index.css.


The layout is outlined as described in Step 4.


The correct background color is displayed in the browser.


Fonts are connected and display correctly in the browser.