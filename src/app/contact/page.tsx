"use client";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-blue-200 shadow-lg rounded-lg p-8 border-2 ">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
                
                <div className="text-center mb-8">
                    <p className="text-gray-600">
                        We do love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
                    </p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">Or reach us at:</p>
                    <p className="text-blue-500 mt-2">support@myblog.com</p>
                </div>
            </div>
        </div>
    );
}
