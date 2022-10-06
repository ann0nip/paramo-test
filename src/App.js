import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import Home from './routes/home/home.component';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
