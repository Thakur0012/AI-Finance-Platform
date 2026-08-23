"use client";

import { useState } from "react";
import {
  SquarePlus,
  SquarePen,
  Trash2,
  Save,
  CheckSquare,
  Clock,
} from "lucide-react";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // ➕ Add new note
  const addTodo = () => {
    if (!newTitle.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        title: newTitle.trim(),
        description: newDescription.trim(),
        isCompleted: false,
        createdAt: new Date(),
      },
    ]);
    setNewTitle("");
    setNewDescription("");
  };

  // ✅ Toggle status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  // 🗑️ Delete note instantly
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // ✏️ Start editing
  const startEditing = (id, title) => {
    setEditingId(id);
    setEditText(title);
  };

  // 💾 Save edited note
  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, title: editText.trim() } : t
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
          📝 My Todo Notes
        </h1>

        {/* ➕ Add new note */}
        <div className="flex flex-col gap-3 mb-8">
          <input
            type="text"
            placeholder="Title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <textarea
            rows="3"
            placeholder="Write a description (optional)..."
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
          />
          <button
            onClick={addTodo}
            className="self-start px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
          >
            <SquarePlus size={18} /> Add Note
          </button>
        </div>

        {/* 📋 Active Notes */}
        <Section
          title="Active Notes"
          icon={<Clock size={18} />}
          items={todos.filter((t) => !t.isCompleted)}
          emptyText="No active notes yet."
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          startEditing={startEditing}
          saveEdit={saveEdit}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        {/* ✅ Completed Notes */}
        <Section
          title="Completed Notes"
          icon={<CheckSquare size={18} />}
          items={todos.filter((t) => t.isCompleted)}
          emptyText="No completed notes yet."
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          startEditing={startEditing}
          saveEdit={saveEdit}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

// 🔹 Section Component
function Section({
  title,
  icon,
  items,
  emptyText,
  editingId,
  editText,
  setEditText,
  startEditing,
  saveEdit,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-gray-700 flex items-center gap-2">
        {icon} {title}
      </h2>
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">{emptyText}</p>
      ) : (
        <ul className="space-y-4">
          {items.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editingId={editingId}
              editText={editText}
              setEditText={setEditText}
              startEditing={startEditing}
              saveEdit={saveEdit}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

// 🔹 Individual Note
function TodoItem({
  todo,
  editingId,
  editText,
  setEditText,
  startEditing,
  saveEdit,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li
      className={`p-4 border rounded-xl shadow-sm transition-all duration-200 ${
        todo.isCompleted
          ? "bg-green-50 border-green-200"
          : "bg-white hover:bg-blue-50"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleTodo(todo.id)}
            className="h-5 w-5 accent-green-600"
          />
          <span
            className={`font-medium ${
              todo.isCompleted ? "text-green-700" : "text-gray-800"
            }`}
          >
            {todo.isCompleted ? "Completed" : "Pending"}
          </span>
        </label>

        <div className="flex gap-3">
          {editingId === todo.id ? (
            <button
              onClick={() => saveEdit(todo.id)}
              className="text-green-600 hover:text-green-800 flex items-center gap-1"
            >
              <Save size={16} /> Save
            </button>
          ) : (
            <button
              onClick={() => startEditing(todo.id, todo.title)}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <SquarePen size={16} /> Edit
            </button>
          )}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>

      {editingId === todo.id ? (
        <textarea
          rows="3"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 resize-none"
        />
      ) : (
        <p
          className={`whitespace-pre-wrap ${
            todo.isCompleted
              ? "line-through text-gray-500"
              : "text-gray-800"
          }`}
        >
          {todo.title}
        </p>
      )}

      {todo.description && (
        <p className="mt-1 text-sm text-gray-600 italic">
          {todo.description}
        </p>
      )}

      <p className="text-xs text-gray-400 mt-2">
        Created: {new Date(todo.createdAt).toLocaleString()}
      </p>
    </li>
  );
}
