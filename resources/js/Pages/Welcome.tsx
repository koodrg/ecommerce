import ApplicationLogo from '@/Components/ApplicationLogo';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
    appVersion,
    appName,
}: PageProps<{ appVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-5">
                            <div className="flex lg:justify-start">
                                <ApplicationLogo className="h-20 w-auto text-white lg:text-[#FF2D20]"/>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                <Link
                                    href={route('home')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Home
                                </Link>
                                <Link
                                    href={route('shop')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Shop
                                </Link>
                                <Link
                                    href={route('contact')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href={route('about-us')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    About Us
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <section className="bg-gray-100">
                                <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-1/2">
                                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                    Shop the Latest Trends
                                    </h1>
                                    <p className="text-gray-600 mb-6">
                                    Discover our collection of stylish and modern products designed to fit your needs. Enjoy discounts and free shipping on select items!
                                    </p>
                                    <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                                    Browse Products
                                    </a>
                                </div>
                                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                                    <img src="https://via.placeholder.com/500x300" alt="Hero Image" className="rounded-md shadow-md"/>
                                </div>
                                </div>
                            </section>

                            <section id="products" className="container mx-auto px-6 py-20">
                                <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img src="https://via.placeholder.com/300x200" alt="Product 1" className="w-full h-48 object-cover"/>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
                                            <p className="text-gray-600 mt-2">$99.99</p>
                                            <a href="#" className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src="https://via.placeholder.com/300x200" alt="Product 2" className="w-full h-48 object-cover"/>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
                                        <p className="text-gray-600 mt-2">$79.99</p>
                                        <a href="#" className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src="https://via.placeholder.com/300x200" alt="Product 3" className="w-full h-48 object-cover"/>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
                                        <p className="text-gray-600 mt-2">$59.99</p>
                                        <a href="#" className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-blue-600 text-white py-20">
                                <div className="container mx-auto px-6 text-center">
                                <h2 className="text-3xl font-bold mb-4">Subscribe for Exclusive Offers</h2>
                                <p className="mb-6">Sign up for our newsletter and receive special discounts and updates directly in your inbox.</p>
                                <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"/>
                                    <button className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100">
                                    Subscribe
                                    </button>
                                </form>
                                </div>
                            </section>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            {appName} v{appVersion}
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
