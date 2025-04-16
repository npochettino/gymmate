"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export type Member = {
  id?: string;
  name: string;
  email: string;
  membership: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (member: Member) => void;
  initialData?: Member | null;
};

export default function MemberModal({ open, onClose, onSave, initialData }: Props) {
  const [member, setMember] = useState<Member>({
    name: "",
    email: "",
    membership: "",
  });

  useEffect(() => {
    if (initialData) {
      setMember(initialData);
    } else {
      setMember({ name: "", email: "", membership: "" });
    }
  }, [initialData, open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(member);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {initialData ? "Edit Member" : "Add Member"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={member.name}
              onChange={(e) => setMember({ ...member, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={member.email}
              onChange={(e) => setMember({ ...member, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Membership</label>
            <select
              value={member.membership}
              onChange={(e) => setMember({ ...member, membership: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded"
              required
            >
              <option value="">Select a plan</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            {initialData ? "Update" : "Add"} Member
          </button>
        </form>
      </div>
    </div>
  );
}
