# Setting Up Your Node.js App

Follow these steps to set up and run the Node.js app in your repository:

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

---

## Additional Commands

### Start the App
To start the app with npm:

```bash
npm start
```

Make sure your `package.json` includes the `start` script:

```json
"scripts": {
  "start": "node app.js"
}
```

### Commit Your Work
To track your work in Git:

```bash
git add .
git commit -m "Initial commit of Node.js app"
```

---

## Notes

- Ensure Node.js and npm are installed on your system.
- Customize the app as needed for your use case.

Enjoy coding!

