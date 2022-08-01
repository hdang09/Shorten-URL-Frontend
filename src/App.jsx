import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => {
                    let Element = route.element;
                    return <Route key={route.id} path={route.path} element={<Element />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;
