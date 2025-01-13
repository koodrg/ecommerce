import GuestLayout from "@/Layouts/GuestLayout";

const AboutUs = () => {
    return (
        <GuestLayout>
            <div className="bg-gray-50 min-h-screen p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Learn more about our mission, values, and the story behind our eCommerce platform.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to provide the best online shopping experience by offering high-quality
                            products at affordable prices while ensuring exceptional customer service.
                        </p>
                    </section>

                    {/* Values Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                        <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
                            <li>Customer-centric approach</li>
                            <li>Commitment to quality</li>
                            <li>Innovative and sustainable practices</li>
                            <li>Building trust and long-term relationships</li>
                        </ul>
                    </section>

                    {/* Team Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Team Member 1 */}
                            <div className="text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMxLW5LbeJApiOdKAWdx7973rVC1iEUPtXg&s"
                                    alt="Team Member"
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-lg font-medium text-gray-800">John Doe</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                            </div>
                            {/* Team Member 2 */}
                            <div className="text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMxLW5LbeJApiOdKAWdx7973rVC1iEUPtXg&s"
                                    alt="Team Member"
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-lg font-medium text-gray-800">Jane Smith</h3>
                                <p className="text-gray-600">Head of Marketing</p>
                            </div>
                            {/* Add more team members as needed */}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Have questions or need help? Reach out to us at{' '}
                            <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
                                support@example.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
};

export default AboutUs;
