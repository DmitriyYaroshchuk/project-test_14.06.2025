import Pages from './engine/config/routers.jsx';
import {Route, Routes} from "react-router-dom";
import Layout from "./ui/containers/Layout.jsx";

function App() {
    return (
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
    )
}
export default App;
