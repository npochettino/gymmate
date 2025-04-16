import Link from "next/link";

export default function Home() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 dark:bg-blue-700 dark:text-white transition-colors duration-300">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-red-500">GymMate</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Manage memberships, classes, and trainers with ease.
        </p>
        <Link href="/login">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
    
  );
}