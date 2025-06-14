import Pages from './engine/config/routers.jsx';
import {Route, Routes} from "react-router-dom";
import Layout from "./ui/containers/Layout.jsx";
import {HistoryRouter} from "redux-first-history/rr6";
import {history} from "./engine/init/store.js";

function App() {
    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {
                        Pages.map(({ link, element: component }) =>
                            <Route
                                key={link}
                                path={link}
                                element={component}
                            />
                        )
                    }
                </Route>
            </Routes>
        </HistoryRouter>
    )
}
export default App;
