import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-16">
      <div className="container mx-auto text-center">
        <p className="mb-2">📧 Email: <a href="mailto:your-email@example.com" className="text-blue-950 font-semibold">your-email@example.com</a></p>
        <p className="mb-4">About My Blog</p>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
        </div>
        <p className="mt-6 text-sm">© 2024 Your Blog Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
