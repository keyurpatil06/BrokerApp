import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Listings from './components/Listings'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import ListingsProvider from './context/context'

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
      path: "*",
      element: <><Navbar /><ErrorPage /><Footer /></>
    },
  ]);

  return (
    <>
      <ListingsProvider>
        <RouterProvider router={router} />
      </ListingsProvider>
    </>
  )
}

export default App
