import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => {
                    const Element = route.element;
                    const Layout = route.layout;
                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                Layout ? (
                                    <Layout>
                                        <Element />
                                    </Layout>
                                ) : (
                                    <Element />
                                )
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
