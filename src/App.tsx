import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link
} from "react-router-dom";
import "react-canvas-carousel/carousel.css";
import Container from "./components/con-pres/Container";
import Component from "./components/hoc/Component";
import RenderProps from "./components/render-props/RenderProps";
import Hooks from "./components/hooks/Hooks";
import Provider from "./components/provider/Theme";
import Compound from "./components/compound/Component";

const Home = () => {
    return (
        <ul>
            <li><Link to="/con-pres">Container-Presentation</Link></li>
            <li><Link to="/hoc">Higher Order Component</Link></li>
            <li><Link to="/render-props">Render Props</Link></li>
            <li><Link to="/hooks">Hooks</Link></li>
            <li><Link to="/provider">Provider</Link></li>
        </ul>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/con-pres",
        element: <Container />,
    },
    {
        path: "/hoc",
        element: <Component />,
    },
    {
        path: "/render-props",
        element: <RenderProps />,
    },
    {
        path: "/hooks",
        element: <Hooks />,
    },
    {
        path: "/provider",
        element: <Provider />,
    },
    {
        path: "/compound",
        element: <Compound />,
    },
]);

const App = () => {    
    return (
        <RouterProvider router={router} />
    );
};

const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(<App />);