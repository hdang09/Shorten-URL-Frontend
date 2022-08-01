import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
