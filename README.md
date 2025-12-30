# Electron + React Desktop App Starter

A robust boilerplate for building cross-platform desktop applications using Electron and React.

## Features

-   **Electron**: Build cross-platform desktop apps with JavaScript, HTML, and CSS.
-   **React**: Powerful UI library for building dynamic interfaces.
-   **IPC Communication**: Examples of secure main-to-renderer communication.
-   **Build Ready**: Configured for packaging and distribution.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/anunzio-international/electron-react-starter.git
    cd electron-react-starter
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Mode**:
    ```bash
    npm start
    ```
    This launches the React app in a dedicated Electron window.

## Building for Production

To package your application for your current OS:

```bash
npm run dist
```

## Project Structure

```
├── main.js             # Electron main process
├── preload.js          # Preload script for safe IPC
├── src/
│   ├── App.jsx         # Main React component
│   └── index.jsx       # React entry point
├── package.json
└── index.html
```

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel-anunzio/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
