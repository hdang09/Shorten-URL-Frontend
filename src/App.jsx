import { RouterComponents } from './routers';
import { useLocalStorage } from './hooks';

function App() {
    const [color, setColor] = useLocalStorage('primary-color', '#45ce7b');
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    return <RouterComponents />;
}

export default App;
