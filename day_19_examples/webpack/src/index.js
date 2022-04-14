import {v4 as uuidv4} from 'uuid'
import './styles/body.css'
import './styles/page.scss'
import { createRoot } from 'react-dom/client';
import App from './components/App'

console.log(uuidv4())


const container = document.getElementById('root');
console.log(container)
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);