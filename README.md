Foreach Logistics App

This tool allows company employees to register their commutes and calculate the associated carbon footprint. Through a simple form, users can enter the distance traveled and the mode of transportation used. The app automatically calculates the carbon footprint of each commute and displays the total carbon footprint of the company, helping to monitor and reduce environmental impact.

##

Authentication Mechanism

The authentication for our application is implemented using JSON Web Tokens (JWT) to ensure secure and stateless user sessions. The login and signup functionalities are developed as microservices using Node.js, Express, and Mongoose. During the signup process, new user information is validated and stored in our MongoDB database through Mongoose models. A JWT is then generated and sent to the client, encapsulating the user's unique identification and an expiration timestamp. For the login process, user credentials are verified against the stored records. Upon successful authentication, a JWT is issued to the client. This token is used to authenticate subsequent requests by including it in the Authorization header. This setup ensures a scalable and secure way to handle user authentication across the application, leveraging the power of microservices architecture.

##

Technologies Used

1. Redux Toolkit: A set of tools for efficiently managing Redux state, providing a standardized way to write Redux logic with less boilerplate.
2. Framer Motion: A library for creating animations and transitions in React applications, enhancing the user experience with smooth and visually appealing effects.
3. jwt-decode: A small library to decode JSON Web Tokens (JWTs) without verifying the token's signature, useful for extracting payload data.
4. React: A JavaScript library for building user interfaces, enabling the creation of reusable UI components.
5. React DOM: A package for rendering React components in the Document Object Model (DOM).
6. React Redux: Official bindings for integrating Redux with React, providing a seamless way to connect React components to the Redux store.
7. React Router DOM: A library for routing in React applications, enabling navigation and dynamic route handling.
8. Redux: A predictable state container for JavaScript applications, managing global state in a consistent and central manner.
9. Sass: A CSS preprocessor that allows you to use variables, nested rules, mixins, functions, and more, simplifying the process of writing CSS.
10. xlsx: A library for reading, manipulating, and writing spreadsheet data in various formats, including Excel files.
11. @eslint/js: The ESLint core library, used for identifying and fixing problems in JavaScript code.
12. @types/react: TypeScript type definitions for React, enabling type checking and autocompletion in TypeScript projects.
13. @types/react-dom: TypeScript type definitions for React DOM, providing type checking and autocompletion.
14. @vitejs/plugin-react-swc: A Vite plugin for integrating React with SWC (a fast JavaScript/TypeScript compiler), enhancing build performance and development experience.
15. autoprefixer: A PostCSS plugin to parse CSS and add vendor prefixes automatically, ensuring cross-browser compatibility.
16. eslint: A tool for identifying and fixing problems in JavaScript code, enforcing coding standards and best practices.
17. eslint-plugin-react-hooks: An ESLint plugin for enforcing rules of Hooks in React, ensuring proper usage of Hooks.
18. eslint-plugin-react-refresh: An ESLint plugin for React Fast Refresh, improving the development experience by enabling hot reloading of React components.
19. globals: A library that provides a list of global variables, used by linter tools to recognize global variables in code.
20. postcss: A tool for transforming CSS with JavaScript plugins, allowing you to use future CSS features and other CSS extensions.
21. postcss-loader: A loader for Webpack to process CSS with PostCSS plugins.
22. tailwindcss: A utility-first CSS framework for building custom designs, providing a set of low-level utility classes.
23. typescript: A typed superset of JavaScript that enhances development with static typing, making code more robust and maintainable.
24. typescript-eslint: A tool for linting TypeScript code with ESLint, integrating TypeScript-specific rules into ESLint.
25. vite: A fast build tool and development server for modern web projects, providing rapid build times and a smooth development experience.


##


Design Patterns, Design Principles, Methodologies, Architectures
1. The Smart and The Dumb: A design pattern that separates logic-heavy "Smart" components from UI-focused "Dumb" components.
2. Component-Driven Development (CDD) is a methodology that emphasizes building user interfaces by creating independent, reusable components that enhance modularity and maintainability in software development.
3. Atomic Design: A methodology for creating scalable UI components by breaking them into atoms, molecules, organisms, templates, 
and pages.
4. DRY Principle (Don't Repeat Yourself): This principle emphasizes reducing repetition of code or logic. Instead of duplicating code, 
you should abstract it into a single place and reuse it. This makes the code more maintainable and reduces the risk of errors.
5. KISS Principle (Keep It Simple, Silly): This principle advocates for simplicity in design and implementation. The idea is to avoid 
unnecessary complexity and keep the code as straightforward as possible. Simple solutions are easier to understand, maintain, and debug.
6. Single Responsibility Principle: This principle states that a class or module should have only one reason to change, meaning it 
should have only one job or responsibility. This makes the code more modular and easier to maintain.
7. Open/Closed Principle: This principle suggests that software entities (like classes, modules, functions) should be open for extension 
but closed for modification. This means you should be able to add new functionality without changing existing code, typically achieved 
through inheritance or interfaces.
8. Progressive Enhancement: A strategy that prioritizes basic functionality for all browsers and devices, adding enhancements for more advanced ones.
9. Mobile First: A design approach that prioritizes the user experience on mobile devices before adapting to larger screens.
10. Responsive design: Ensures optimal viewing and interaction across various devices and screen sizes.


##


Installation
Follow these steps to install and run the project locally:

# Note: To use this app, you will first need to run the microservices Microservices-Auth and ForEach-Microservices-Logistics
# (In case of running it locally, you will need to change the endpoints, as they are set to the remote ones)
   https://github.com/MatiFiordelli/Microservices-Auth.git
   https://github.com/MatiFiordelli/ForEach-Microservices-Logistics.git


Clone the repository:
   ```bash
   git clone https://github.com/MatiFiordelli/ForEach-Challenge.git
   ```

Follow these steps:
1. Make sure you are in the root directory of the app

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

4. Access the App: The App will be available at: 
http://localhost:5173

or remotely:
https://for-each-challenge-seven.vercel.app/


##


Author  
Matias Javier Fiordelli  
[LinkedIn](https://www.linkedin.com/in/matiasfiordelli/)  
[GitHub](https://github.com/MatiFiordelli)