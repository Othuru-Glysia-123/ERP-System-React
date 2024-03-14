import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import RecentOrders from "./components/Orders/Orders"
import ProductsManagement from "./components/Products/Products"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<RecentOrders />} />
                    <Route path="products" element={<ProductsManagement />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
