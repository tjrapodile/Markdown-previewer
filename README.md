# React + Vite Markdown Previewer project
A React-based markdown previewer application developed as part of a freeCodeCamp course certification.
This app allows users to write GitHub-flavored markdowns in a text editor and see the rendered HTML in real time.
The project was built to fulfill specific user stories and pass all provided tests.

Features:
Editor-A textarea element with the id editor is provided for users to input their markdown text.
Preview Area- The app includes a preview area with the id preview, where the HTML-rendered markdown is displayed in real-time as the user types in the editor.
Real-time Rendering- As you type markdown into the editor, the preview area is updated immediately to show the corresponding HTML.
Markdown Support-The app supports GitHub-flavored markdown. Common elements such as headings, links, inline code, code blocks, lists, blockquotes, images, and bold text are all rendered correctly in the preview area.
The marked library is used to parse and convert markdown into HTML.
Default Content:
When the markdown previewer first loads, the editor is pre-filled with a sample markdown that includes one of each of the following elements:

H1 heading
H2 subheading
Link
Inline code
Code block
List item
Blockquote
Image
Bold text
This markdown is rendered as HTML in the preview area upon loading.

Technologies Used:
React- The frontend framework used to build the interactive components of the markdown previewer.
Marked-A markdown parser and compiler used to convert markdown into HTML.
HTML & CSS-For structuring the application and styling the user interface.
JavaScript- To handle the logic for updating the preview area in real-time as users type in the editor.

How to Use:
Write Markdown-Input your markdown text into the editor text area. The preview area will update in real time to show the rendered HTML.
Preview HTML-The preview area will display the HTML-rendered markdown content as you type.

Clone the repository to your local machine using:
git clone https://github.com/tjrapodile/Markdown-previewer.git

Navigate to the project directory:
cd markdown-previewer

Install the necessary dependencies:
npm install

Start the application:
npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
