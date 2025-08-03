# Igniting Our App: Tooling, Bundlers, and npm Explained

## Bundler

A **bundler** is a tool that packages your application for production and development, making it ready to be shipped or deployed.

### Examples of Bundlers

- **Webpack**
- **Vite**
- **Parcel**

> In **Create React App**, the default bundler is **Webpack**.

---

## npm:

- **npm** is a package manager that provides and manages all the packages your project needs.

### Setting Up npm in Your Project

1. **Initialize npm:**

```js
npm init
```

- Follow the prompts; this command creates a `package.json` file that holds your project's configuration.

2. **Package.json:**

- Stores information and generic version ranges for each dependency.

---

## Installing a Bundler Example (Parcel)

```js
npm i -D parcel
```

- **-D** (or `--save-dev`): Installs Parcel as a development dependency.

### What Happens After Installation?

- `package.json` will now include Parcel under `devDependencies`:

```
"devDependencies": {
"parcel": "^2.15.4"
}
```

- **Caret (`^`)**: Allows updates to minor versions.
- **Tilde (`~`)**: Allows updates to patch versions only.
- **Major versions**: You must update these manually for breaking changes.

---

## package-lock.json

- A file created or updated when you install dependencies.
- Contains the **exact version** of every installed package—ensuring consistent installs across environments.
- Difference between `package.json` and `package-lock.json`:
- `package.json`: Stores _generic version ranges_ and project metadata.
- `package-lock.json`: Stores the _exact_ versions installed in your project.

---

## node_modules

- A directory that acts as a database for npm:
- Stores the actual code for all installed npm dependencies.
- Every dependency inside `node_modules` has its own `package.json`.
- **Warning:**
- `node_modules` is very large and should always be listed in your `.gitignore` file.
- You can safely regenerate it any time with:
  ```
  npm install
  ```
  This command will read `package.json` and `package-lock.json` and reinstall all dependencies.

---

# Igniting Our App

## Starting the App with Parcel

To ignite (run) your app, use Parcel's development server:

```js
npx parcel index.html
```

- **npx**: Executes a package without needing to install it globally.
- **npm**: Used for installing packages.
- **index.html**: Serves as the entry point for the application.

### What Parcel Does

- Builds a development version of your app.
- Creates a local server to run and preview your code.
- **Hot Module Replacement (HMR):** Rebuilds and updates the content in the browser automatically on file save.
- **Caching:** Enables faster builds by storing intermediate results.
- **Image Optimization:** Optimizes images for better performance.
- **Bundling, Compressing, Minimizing:** Merges and shrinks files for efficient delivery.
- **Code Splitting:** Splits code for better load times.
- **Differentiated Bundling:** Supports older browsers with the correct bundle.
- **Diagnostics:** Provides clear, beautiful error messages in the console.
- **Tree Shaking:** Removes unused code to make your final bundle smaller.
- And much more—see the [Parcel documentation](https://parceljs.org/) for details.

---

## Injecting React with npm Packages

Another way to use React in your app is to install React packages:

```js
npm install react
npm install react-dom
```

- These commands add `react` and `react-dom` to your project's `node_modules` directory.
- You can then **import** and use React in your code instead of relying on CDN links.

**Note:**

- When using ES module imports, ensure your `<script>` tag in HTML has `type="module"`:

```js
<script type="module" src="app.js"></script>
```

- Browser scripts (without `type="module"`) do not support ES module imports and will throw errors if you try to import packages from `node_modules`.

---

## Building for Production with Parcel

To create a production-ready build, use:

```js
npx parcel build index.html
```

- Generates optimized output: typically one HTML file, one JS file, one CSS file.
- Applies advanced optimizations (compression, minification, tree shaking).
- Results in a smaller, faster app suitable for deployment.

---

## Browserslist

**Browserslist** helps specify which browsers your app should support.

- Improves cross-browser compatibility automatically during builds.
- Add the following to your `package.json`:

```js
"browserslist": [
"last 2 versions"
]
```

- This ensures your code will work in the last two versions of all major browsers.

For browser compatibility coverage, check the [Browserslist coverage tool](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z).

- This can also help reduce unnecessary code for legacy browser support, simplifying your bundle.

---

**For runnable React js examples, see the [Example Code](../../examples/basics/2-igniting-our-app).**
