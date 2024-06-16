import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

import DefaultLayout from './layouts/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout !== undefined) {
                            Layout = route.layout || Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout
                                        imgSrc={route.pageImg}
                                        title={route.title}
                                        desc={route.desc}
                                    >
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
