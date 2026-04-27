// Import the createRoot function from React DOM (used in React 18+ to render the app)
import { createRoot } from "react-dom/client";

// Import the main App component (root component of application)
import App from "./App";

// Import Provider from react-redux to connect Redux with React
import { Provider } from "react-redux";

// Import the Redux store (contains global state of app)
import { store } from "./store";

// Select the root DOM element (usually a div with id="root" in index.html)
const rootElement = document.querySelector('#root');

// Create a React root and render the application inside it
createRoot(rootElement).render(

    // Provider makes the Redux store available to all components in the app
    <Provider store={store}>
        
        {/* App is the main component that contains entire UI */}
        <App />

    </Provider>
);
