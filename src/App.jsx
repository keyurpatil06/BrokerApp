import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Listings from './components/Listings'
import SinglePage from './components/SinglePage'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import ListingsProvider from './context/context'
import { FilterContextProvider } from './context/Filter_context'
import { CartContextProvider } from './context/Cart_context'
import Form from './components/Form';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/listings",
      element: <><Navbar /><Listings /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer /></>
    },
    {
      path: "/cart",
      element: <><Navbar /><Cart /><Footer /></>
    },
    {
      path: "/singleListing/:id",
      element: <><Navbar /><SinglePage /><Footer /></>
    },
    {
      path: "/form",
      element: <><Navbar /><Form /><Footer /></>
    },
    {
      path: "*",
      element: <><Navbar /><ErrorPage /><Footer /></>
    },
  ]);

  return (
    <>
      <Auth0Provider
        domain="dev-t03s3ap1xtkiwx4v.us.auth0.com"
        clientId="riL3rezD1sbSpZKTNmTQKLEIn2Q7waC8"
        authorizationParams={{ redirect_uri: window.location.origin }}>
        <ListingsProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <RouterProvider router={router} />
            </CartContextProvider>
          </FilterContextProvider>
        </ListingsProvider>
      </Auth0Provider>
    </>
  )
}

export default App
