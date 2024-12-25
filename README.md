# Setting Up Your Node.js App (Node.js LTS Version 22)

This app leverages the latest features of Node.js LTS version 22, including ESM modules, the Fetch API, and enhanced performance capabilities. Follow these steps to set up and run the app in your repository:

---

## 1. Initialize Your Project Directory

Start by creating and initializing a new project directory:

```bash
mkdir my-node-app
cd my-node-app
git init
```

---

## 2. Add `app.js` and `package.json`

Copy the provided `app.js` file and `package.json` into your project directory:

```plaintext
my-node-app/
|-- app.js
|-- package.json
```

---

## 3. Install Node.js Dependencies

Run the following command to install all required dependencies listed in `package.json`:

```bash
npm install
```

---

## 4. Create a Public Directory (Optional)

If your app serves static files, create a `public` directory for those files:

```bash
mkdir public
```

Place any static files (HTML, CSS, JS, images) inside this directory.

---

## 5. Run the Server

Start your server using Node.js:

```bash
node app.js
```

---

## 6. Access the App

- Open your browser and navigate to `http://localhost:3000` to see the basic welcome message.
- Access the API endpoint at `http://localhost:3000/api/greeting` to get a JSON response.
- Explore the `/api/external` endpoint, which demonstrates integration with the Fetch API to fetch data from an external API.

---

## Additional Commands

### Start the App
To start the app with npm:

```bash
npm start
```

Ensure your `package.json` includes the `start` script:

```json
"scripts": {
  "start": "node app.js"
}
```

### Commit Your Work
To track your work in Git:

```bash
git add .
git commit -m "Initial commit of Node.js app with LTS version 22"
```

---

## Features of Node.js LTS Version 22 in This App

- **ECMAScript Modules (ESM)**: Modern `import/export` syntax is used for cleaner, future-proof code.
- **Global Fetch API**: Native `fetch()` is utilized for making server-side HTTP requests.
- **Enhanced Static File Serving**: Static files are prioritized for performance.
- **Improved Error Handling**: Structured error logging and middleware ensure robust error management.

---

## Notes

- Ensure Node.js (version 22 or later) and npm are installed on your system.
- Customize the app as needed for your use case.

Enjoy coding with modern Node.js features!

