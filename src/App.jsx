import { Await, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css';

import Footer from "./Components/Component/Root/Footer";
import Home from "./Components/Component/Home";
import About from "./Components/Component/About";
import Blog from "./Components/Component/Blog";
import Contact from "./Components/Component/Contact";
import Nav from "./Components/Component/Root/Nav";
import Mega from "./Components/Component/Mega";



function Layout() {
  return (
    <>
      <Nav />
      <Outlet/>
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
 
  
  {
    path: "/",
    element: <Layout />,
    children: [
     

      {
        index:true,
       
        element: <Home />,
        loader: async () => {
          const response = await fetch('/Product.json');
          if (!response.ok) {
            throw new Response('Failed to fetch data', { status: 500 });
          }
          const data = await response.json();
          return data;
        },
      },
      {
        path: "about",
        element: <About />,
        loader: async () => {
          const response = await fetch('/Product.json');
          if (!response.ok) {
            throw new Response('Failed to fetch data', { status: 500 });
          }
          const data = await response.json();
          return data;
        },
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async () => {
          const response = await fetch('/Blog.json');
          if (!response.ok) {
            throw new Response('Failed to fetch data', { status: 500 });
          }
          const data = await response.json();
          return data;
        },
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "mega",
        element: <Mega />,
       loader: async () => {
          const response = await fetch('/Product.json');
          if (!response.ok) {
            throw new Response('Failed to fetch data', { status: 500 });
          }
          const data = await response.json();
          return data;
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
