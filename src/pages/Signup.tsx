import React, { useState } from 'react'
import { useUserSignup } from '../hooks/Users/useUserSignup'
import { Section } from '../components/Section/Section'
import { useNavigate } from 'react-router-dom'
import { useNotification } from '../context/NotificationContext'

const Signup: React.FC = () => {
  const [name, setName] = useState<string | undefined>(undefined)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { showNotification } = useNotification()

  const handleSignup = async () => {
    const data = await useUserSignup({ email, password, name })
    if (data.success) {
      navigate('/login')
      showNotification('Account created successfully, please login', 'success')
    } else {
      setError(data.message)
    }
  }

  return (
    <Section
      title="Sign Up"
      titleClassName="text-4xl font-serif my-8 mt-12"
      shortHeight
    >
      <div className="flex flex-col items-center w-full">
        <input
          type="text"
          placeholder="Name"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
          className="p-2 mb-4 w-96 border border-black placeholder:text-xs"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-4 w-96 border border-black placeholder:text-xs"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 w-96 border border-black placeholder:text-xs"
        />
        <button
          onClick={handleSignup}
          className="bg-black text-white font-serif py-2 px-4"
        >
          Sign Up
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </Section>
  )
}

export default Signup
