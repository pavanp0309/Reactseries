🔥🔥Table of Contents🔥🔥
1. What is React?
2. NPM & NPX
3. Create a React App using CDN
4. What are package.json & package-lock.json?
5. Dev-Dependency vs Dependency

🎯What is React?
React is a JavaScript library for building user interfaces, particularly single-page applications where updates happen dynamically without reloading the page. Facebook developed it, which allows developers to create reusable UI components.

🔑Key features:

Component-based: Encapsulates code into reusable components.
Declarative: Allows you to create interactive UIs with simple components.
Virtual DOM: React creates a virtual representation of the UI and updates it efficiently.

🎯NPM & NPX
📌NPM (Node Package Manager): A tool that helps manage dependencies in a JavaScript project. It allows you to install and manage libraries and frameworks.
📌NPX: A tool that executes Node.js packages without installing them globally. It's useful when running one-time commands or scripts (e.g., npx create-react-app).

🎯Create a React App using CDN:
you can use a Content Delivery Network (CDN) to include React directly in a web page. This approach is great for small projects or trying out React.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
    <!-- Include React and ReactDOM via CDN -->
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const element = React.createElement('h1', null, 'Hello, React!');
      ReactDOM.render(element, document.getElementById('root'));
    </script>
  </body>
</html>

🎯 package.json & package-lock.json

📌package.json: This file holds metadata about your project and lists the dependencies (libraries, modules, etc.) required for your project. It also contains scripts that can be run using npm run commands.

📌package-lock.json: This file locks the specific versions of installed dependencies and ensures that installs are consistent across different environments. It provides an exact record of the dependency tree.

🎯Dev-Dependency vs Dependency

📍Dependencies: These are the libraries and modules required for the project to run in production (e.g., React, ReactDOM).
📍Dev-Dependencies: These are the tools needed for development and not necessary in production (e.g., testing frameworks like Jest, linters like ESLint).

"dependencies": {
  "react": "^17.0.2"
},
"devDependencies": {
  "eslint": "^7.32.0"
}
