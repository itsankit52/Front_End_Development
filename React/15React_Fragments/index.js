/* React Fragments :
        React Fragments are a way to group multiple elements without adding an extra node to the DOM.
    What fregments does:
        A Fragment lets you return multiple elements together without creating an extra HTML tag in the browser.
*/

import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(<App />)

