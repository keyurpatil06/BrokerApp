import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
      path: "*",
      element: <><Navbar /><ErrorPage /><Footer /></>
    },
  ]);

  return (
    <>
      <ListingsProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <RouterProvider router={router} />
          </CartContextProvider>
        </FilterContextProvider>
      </ListingsProvider>
    </>
  )
}

export default App
