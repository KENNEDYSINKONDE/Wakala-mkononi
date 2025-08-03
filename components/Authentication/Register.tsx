'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/authService';
import { setToken } from '@/utils/token';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    tin_number: '',
    nida: '',
    phone: '',
    location: '',
    role: 'agent',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await register(form);
      setToken(res.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        {[
          { name: 'name', label: 'Full Name' },
          { name: 'tin_number', label: 'TIN Number' },
          { name: 'nida', label: 'NIDA' },
          { name: 'phone', label: 'Phone' },
          { name: 'location', label: 'Location' },
          { name: 'password', label: 'Password', type: 'password' },
          { name: 'password_confirmation', label: 'Confirm Password', type: 'password' },
        ].map(({ name, label, type = 'text' }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={label}
            value={(form as any)[name]}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        ))}

        {/* Role Input (can be dynamic in the future) */}
        <input
          name="role"
          type="hidden"
          value="agent"
        />

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
