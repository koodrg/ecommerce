import { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout";

const products = [
    { id: 1, name: 'Laptop', categoryId: 1, image_url: 'https://s.tmimgcdn.com/scr/151600/cosmetics-set-product-mockup_151641-original.gif', price: 10.11},
    { id: 2, name: 'Smartphone', categoryId: 1, image_url: 'https://s.tmimgcdn.com/scr/151600/cosmetics-set-product-mockup_151641-original.gif', price: 10.11 },
    { id: 3, name: 'T-Shirt', categoryId: 2, image_url: 'https://s.tmimgcdn.com/scr/151600/cosmetics-set-product-mockup_151641-original.gif', price: 10.11 },
    { id: 4, name: 'Microwave', categoryId: 3, image_url: 'https://s.tmimgcdn.com/scr/151600/cosmetics-set-product-mockup_151641-original.gif', price: 10.11 },
    { id: 5, name: 'Jeans', categoryId: 2, image_url: 'https://s.tmimgcdn.com/scr/151600/cosmetics-set-product-mockup_151641-original.gif', price: 10.11 },
];

const categories = [
    'Femail', 'Male'
];

const Shop = () => {
    return (
        <GuestLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg"
                    >
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-500 mt-2">${product.price.toFixed(2)}</p>
                        <Link
                            href={`/product/${product.id}`}
                            className="text-blue-500 hover:underline mt-2 block"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </GuestLayout>
    );
};

export default Shop;
