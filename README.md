# 🚀 Dev Stack Builder

A modern and responsive web application that helps developers explore different technologies and build their own development stack.

Users can browse technologies, view their details, add technologies to their personal stack, and remove them when needed.

---

## 🔗 Live Preview

👉 [Live Demo](https://devstack-14a5.netlify.app/)

---

## 📌 Project Description

**Dev Stack Builder** is a React-based web application where users can explore popular web development technologies such as React, JavaScript, TypeScript, Node.js, MongoDB, Docker, and more.

The application allows users to create their own technology stack by selecting technologies from the available list. It also prevents duplicate selections and provides notifications for different actions.

---

## 🛠️ Technologies Used

This project was built using:

- ⚛️ React.js
- 🔷 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔔 React Toastify
- 📄 JSON
- 🧩 React Hooks

---

## ✨ Features

### 1️⃣ Build Your Own Development Stack

Users can select technologies and add them to the **Your Stack** section.

The same technology cannot be added twice.

### 2️⃣ Add and Remove Technologies

Users can:

- Add technologies to their stack
- Remove individual technologies
- Remove all technologies at once

Toast notifications provide feedback for every action.

### 3️⃣ Filter Technologies by Category

Users can filter technologies based on different categories:

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

---

## 📱 Responsive Design

The website is fully responsive and works smoothly on:

- 📱 Mobile devices
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

The technology cards automatically adjust their layout based on screen size.

---

## ⏳ Loading State

Technology data is loaded from a local JSON file.

While the data is being fetched, a loading spinner is displayed.

---

## 🔔 Notifications

The project uses **React Toastify** to show notifications when:

- A technology is added to the stack
- A duplicate technology is selected
- A technology is removed
- All technologies are removed

---

## 📂 Project Structure

```text
dev-stack-builder/
│
├── public/
│   └── technologies.json
│
├── src/
│   │
│   ├── assets/
│   │   └── banner-stack.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── TechnologyList.tsx
│   │   ├── StackSidebar.tsx
│   │   └── Footer.tsx
│   │
│   ├── types/
│   │   └── technology.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Irfan-Rakib/DevStack-14-a5.git

# Navigate to the project folder
cd devStack

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📚 React Concepts Q&A

**1. What is JSX, and why is it used in React?**

JSX is a syntax that lets you write HTML-like code inside JavaScript. React uses it because it makes writing and reading UI code easier — instead of building elements with plain JavaScript functions, I can write markup that looks like HTML directly inside components like `TechnologyCard.tsx` and `Hero.tsx`.

**2. What is the difference between props and state?**

Props are data passed _into_ a component from its parent, and the component receiving them can't change them. State is data that lives _inside_ a component and can change over time. For example, the list of technologies passed to `TechnologyCard` comes in as props, while the "Your Stack" list in `App.tsx` is state, since it changes whenever the user adds or removes a technology.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a component remember and update values between renders. In this project, it's used to track the full list of technologies fetched from the JSON file, the technologies the user has added to their stack, the currently selected category filter, and the loading state while data is being fetched.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` lets you run code in response to a component rendering or a value changing — things like fetching data, setting timers, or subscribing to events. It was needed here because fetching `technologies.json` is a side effect: it shouldn't run during rendering itself, but _after_ the component mounts. `useEffect` runs the fetch once when the app loads, updates the state with the result, and turns off the loading spinner.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to keep track of which item is which when a list changes. Without unique keys (like each technology's `id`), React can't tell which cards were added, removed, or reordered, which can lead to bugs, incorrect UI updates, or unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on a condition. In this project, the `StackSidebar` checks whether the user's stack is empty and shows a friendly message instead of an empty list:

```jsx
{
  stack.length === 0 ? (
    <p>Your stack is empty. Start adding technologies!</p>
  ) : (
    stack.map((tech) => <TechnologyCard key={tech.id} technology={tech} />)
  );
}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child using props, like `<TechnologyCard technology={tech} />`. To send data back up, the parent passes a function as a prop to the child — for example, `onAddToStack` — and the child calls that function (often with the selected technology as an argument) whenever the user clicks "Add." This pattern is often called "lifting state up," since the actual state update happens in the parent (`App.tsx`), not the child.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
