import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/header";

function Home() {
  return <div className="container mx-auto p-8">Home</div>;
}

function Products() {
  return <div className="container mx-auto p-8">Products</div>;
}

function Cart() {
  return <div className="container mx-auto p-8">Cart</div>;
}

function Login() {
  return <div className="container mx-auto p-8">Login</div>;
}

function Signup() {
  return <div className="container mx-auto p-8">Sign Up</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
