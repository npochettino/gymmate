"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import MemberModal, { Member } from "../components/MemberModal";

const dummyMembers = [
  { id: "1", name: "John Doe", email: "john@example.com", membership: "Gold" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", membership: "Silver" },
  { id: "3", name: "Alex Johnson", email: "alex@example.com", membership: "Bronze" },
];

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState(dummyMembers);
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  
  const handleAdd = () => {
    setEditingMember(null);
    setShowModal(true);
  };
  
  const handleEdit = (member: Member) => {
    setEditingMember(member);
    setShowModal(true);
  };
  
  const handleSave = (member: Member) => {
    if (editingMember) {
      // update member
      setMembers((prev) =>
        prev.map((m) => (m.id === editingMember.id ? { ...m, ...member } : m))
      );
    } else {
      // add new member
      const newMember = { ...member, id: crypto.randomUUID() };
      setMembers((prev) => [...prev, newMember]);
    }
  };

  const filteredMembers = members.filter((member) =>
    `${member.name} ${member.email} ${member.membership}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <><div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h1 className="text-3xl font-bold">Members</h1>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                      <Search className="absolute top-2.5 left-3 text-gray-500 dark:text-gray-400" size={18} />
                      <input
                          type="text"
                          placeholder="Search members..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="pl-10 pr-4 py-2 rounded-md w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>

                  <button onClick={handleAdd} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition whitespace-nowrap">
                      <Plus size={18} /> Add Member
                  </button>
              </div>
          </div>

          <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white dark:bg-gray-800">
                  <thead>
                      <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Membership</th>
                          <th className="px-4 py-3">Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {filteredMembers.length === 0 ? (
                          <tr>
                              <td colSpan={4} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                                  No members found.
                              </td>
                          </tr>
                      ) : (
                          filteredMembers.map((member) => (
                              <tr key={member.id} className="border-t border-gray-300 dark:border-gray-600">
                                  <td className="px-4 py-3">{member.name}</td>
                                  <td className="px-4 py-3">{member.email}</td>
                                  <td className="px-4 py-3">{member.membership}</td>
                                  <td className="px-4 py-3 flex gap-2">
                                      <button onClick={() => handleEdit(member)} className="text-blue-500 hover:text-blue-700">
                                          <Pencil size={18} />
                                      </button>
                                      <button className="text-red-500 hover:text-red-700">
                                          <Trash2 size={18} />
                                      </button>
                                  </td>
                              </tr>
                          ))
                      )}
                  </tbody>
              </table>
          </div>
          </div>
            <MemberModal
              open={showModal}
              onClose={() => setShowModal(false)}
              onSave={handleSave}
              initialData={editingMember} /></>
  );
}
