import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product';

const container = document.getElementById('root');

createRoot(container).render(<Product />);
