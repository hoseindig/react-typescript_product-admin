import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/products">Product List</Link></li>
                    <li><Link to="/products/new">Add Product</Link></li>
                </ul>
            </nav>

            {/* Use React Router to render corresponding components */}
        </div>
    );
};

export default Dashboard;
