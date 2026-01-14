'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'

type ContactFormData = {
  name: string
  subject: string
  email: string
  message: string
}

export default function ContactFormSection() {
  const [successMessage, setSuccessMessage] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData()

      formData.append('email', data.email)
      formData.append('message', `Name: ${data.name}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`)

      const res = await fetch('https://formspree.io/f/xlggddwg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (res.ok) {
        reset()
        setSuccessMessage(true)
        setTimeout(() => setSuccessMessage(false), 5000)
      } else {
        const error = await res.json()

        if (Object.hasOwn(error, 'errors') && Array.isArray(error['errors'])) {
          throw new Error(error["errors"].map(err => err["message"]).join(", "))
        } else {
          throw new Error("Oops! There was a problem submitting your form")
        }
      }

    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-12">
      <h2 className="pb-4 text-3xl font-bold">Contact</h2>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded text-green-500">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2">
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Subject"
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && (
          <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <Textarea
          id="message"
          rows={8}
          placeholder="Your message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
        />
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-transparent border border-gray-600 rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
