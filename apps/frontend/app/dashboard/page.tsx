"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function DashboardPage() {
    const { user, logout, loading } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!loading && !user) {
        router.push("/login");
      }
    }, [user, loading]);
  
    if (loading || !user) return <div className="p-8">Loading...</div>;
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          <ThemeToggle />
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🏋️ Members</h2>
            <p className="text-gray-600">View and manage gym members</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">📆 Classes</h2>
            <p className="text-gray-600">Create and assign fitness classes</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">💼 Trainers</h2>
            <p className="text-gray-600">Manage your staff and their schedules</p>
          </div>
        </div>
    </div>
  );
}
