# Car Damage

An application that will be compiled into two files, plugin.js and plugin.css, and can be embedded into any application through the window object. Create a project on GitHub and provide us with the link upon completing the task.

Example of application invocation:


```js
document.addEventListener("DOMContentLoaded", () => {
  window.DAMAGE_SELECTOR_API &&
    window.DAMAGE_SELECTOR_API.init({
      selector: "#root"
  });
});
```

## Project setup

- Node version: `20.11.0`
- npm version: `10.2.4`


### Install Dependencies
```bash
npm install
```

### Run Development Server

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Build

```bash
npm run build
```

### Run Production Server

```bash
npm run build

npm run preview
```

Open [http://localhost:4173](http://localhost:4173) with your browser to see the result.

## Tech Stack

<div>
  <img src="https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40" />&nbsp;&nbsp;
  <img src="https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40" />&nbsp;&nbsp;
  <img src="https://www.svgrepo.com/show/354521/vitejs.svg" title="Vite" alt="Vite" width="40" height="40" />&nbsp;&nbsp;
  <img src="https://effector.dev/favicon.svg" title="Effector" alt="Effector" width="40" height="40" />&nbsp;&nbsp;
</div>