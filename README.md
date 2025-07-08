# isCloudy Weather App

A Server-Side Rendered (SSR) React application built with Vite, Express, and TypeScript.

## Prerequisites

### Node.js Version

This application requires **Node.js 18.20.0 or higher** (or Node.js 20.10.0+).

Check your Node.js version:

```bash
node --version
```

If you need to update Node.js:

- Download the latest LTS version from [nodejs.org](https://nodejs.org/)
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm)

### Package Manager

You'll need npm (comes with Node.js) or any compatible package manager.

## Installation

1. **Clone the repository** (or download the project files)

   ```bash
   git clone https://github.com/Cloudyaa/is-cloudy-weather-app.git
   cd is-cloudy-weather-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   If you encounter any issues, try:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Create env file**
 
   ```bash
   copy example.env .env
   ```

## Development

### Start the development server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Other available commands

```bash
# Build the client-side application
npm run build:client

# Build the server-side application
npm run build:server

# Run linting
npm run lint

# Preview the built application
npm run preview

# Format code with prettier
npm run format
```

## Project Structure

```
ssr-react-redux-ts-boiler/
├── src/
│   ├── entry-server.tsx    # Server-side entry point
│   └── ...                 # Other source files
├── server.ts               # Express server with SSR
├── index.html              # HTML template
├── package.json
└── README.md
└── ...
```

## Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind 4, shadcn/ui
- **State Management**: Redux 9
- **Routing**: React Router 7
- **Build Tool**: Vite 7
- **Server**: Express 5, SSR (Server-Side Rendering)
- **Runtime**: Node.js with tsx for TypeScript execution

## Troubleshooting

### Common Issues

1. **"crypto.hash is not a function" error**
    - Your Node.js version is too old
    - Update to Node.js 18.20+ or 20.10+

2. **"Cannot find module" errors**
    - Make sure all dependencies are installed: `npm install`
    - Delete `node_modules` and `package-lock.json`, then reinstall

3. **Port 3000 already in use**
    - Kill the process using port 3000, or modify the port in `server.ts`

4. **TypeScript compilation errors**
    - Ensure you're using the correct Node.js version
    - Try: `npm install tsx@latest`

### System Requirements

- **Node.js**: 18.20.0+ or 20.10.0+
- **npm**: 8.0.0+
- **Operating System**: Windows, macOS, or Linux

### Node.js Version Management

If you need to manage multiple Node.js versions:

**Using nvm (macOS/Linux):**

```bash
# Install and use Node.js 20.18.0
nvm install 20.18.0
nvm use 20.18.0
```

**Using nvm-windows (Windows):**

```bash
# Install nvm-windows first, then:
nvm install 20.18.0
nvm use 20.18.0
```

## Support

If you encounter any issues:

1. Ensure your Node.js version meets the requirements
2. Try deleting `node_modules` and reinstalling dependencies
3. Check that all required files are present in the project directory

---

**Author**: Cloudyaa - Klaudia Gadzinska  
**Version**: 0.0.1
