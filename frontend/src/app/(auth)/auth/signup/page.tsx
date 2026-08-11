'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { signupSchema, type SignupInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignUpPage() {
  const router = useRouter()
  const { user, loading, signUpWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  })

  useEffect(() => {
    if (!loading && !isSubmitting && user) {
      router.replace('/dashboard')
    }
  }, [loading, isSubmitting, user, router])

  if (loading) return <FullPageSpinner />

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/dashboard')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  const onSubmit = async (data: SignupInput) => {
    try {
      await signUpWithEmail(data.email, data.password, data.displayName)
      router.push('/auth/signin?verification=sent')
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        toast.error('An account with this email already exists')
      } else {
        toast.error('Failed to create account. Please try again.')
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1 text-center">
<<<<<<< HEAD
        <h1 className="text-2xl font-semibold tracking-tight text-[#E7EEF5]">Create account</h1>
        <p className="text-sm text-[#8697A8]">Get access to your team&apos;s risk dashboard</p>
=======
        <h1 className="text-2xl font-bold tracking-tight">Create account</h1>
        <p className="text-sm text-zinc-500">Get started for free</p>
>>>>>>> team/main
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
<<<<<<< HEAD
        className="flex w-full items-center justify-center gap-3 rounded-md border border-[#1C2836] bg-[#121A26] px-4 py-2.5 text-sm font-medium text-[#E7EEF5] transition-colors hover:bg-[#17202C]"
=======
        className="flex w-full items-center justify-center gap-3 rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
>>>>>>> team/main
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
<<<<<<< HEAD
          <span className="w-full border-t border-[#1C2836]" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#0D131C] px-2 font-mono tracking-widest text-[#4B5768]">or</span>
=======
          <span className="w-full border-t border-zinc-200 dark:border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-zinc-50 px-2 text-zinc-400 dark:bg-zinc-950">or</span>
>>>>>>> team/main
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
<<<<<<< HEAD
          <label
            htmlFor="displayName"
            className="font-mono text-[11px] tracking-widest text-[#6B7A8D] uppercase"
          >
=======
          <label htmlFor="displayName" className="text-sm font-medium">
>>>>>>> team/main
            Name
          </label>
          <input
            id="displayName"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.displayName}
            aria-describedby={errors.displayName ? 'display-name-error' : undefined}
<<<<<<< HEAD
            className="w-full rounded-md border border-[#1C2836] bg-[#0B0F16] px-3 py-2 text-sm text-[#E7EEF5] placeholder:text-[#4B5768] focus:border-[#4FD1C5]/60 focus:ring-2 focus:ring-[#4FD1C5]/30 focus:outline-none aria-invalid:border-[#F2555B]"
=======
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
>>>>>>> team/main
            placeholder="Your full name"
            {...register('displayName')}
          />
          {errors.displayName && (
<<<<<<< HEAD
            <p id="display-name-error" className="text-xs text-[#F2555B]" role="alert">
=======
            <p id="display-name-error" className="text-xs text-red-500" role="alert">
>>>>>>> team/main
              {errors.displayName.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
<<<<<<< HEAD
          <label
            htmlFor="email"
            className="font-mono text-[11px] tracking-widest text-[#6B7A8D] uppercase"
          >
=======
          <label htmlFor="email" className="text-sm font-medium">
>>>>>>> team/main
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
<<<<<<< HEAD
            className="w-full rounded-md border border-[#1C2836] bg-[#0B0F16] px-3 py-2 text-sm text-[#E7EEF5] placeholder:text-[#4B5768] focus:border-[#4FD1C5]/60 focus:ring-2 focus:ring-[#4FD1C5]/30 focus:outline-none aria-invalid:border-[#F2555B]"
=======
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
>>>>>>> team/main
            placeholder="you@example.com"
            {...register('email')}
          />
          {errors.email && (
<<<<<<< HEAD
            <p id="email-error" className="text-xs text-[#F2555B]" role="alert">
=======
            <p id="email-error" className="text-xs text-red-500" role="alert">
>>>>>>> team/main
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
<<<<<<< HEAD
          <label
            htmlFor="password"
            className="font-mono text-[11px] tracking-widest text-[#6B7A8D] uppercase"
          >
=======
          <label htmlFor="password" className="text-sm font-medium">
>>>>>>> team/main
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
<<<<<<< HEAD
            className="w-full rounded-md border border-[#1C2836] bg-[#0B0F16] px-3 py-2 text-sm text-[#E7EEF5] placeholder:text-[#4B5768] focus:border-[#4FD1C5]/60 focus:ring-2 focus:ring-[#4FD1C5]/30 focus:outline-none aria-invalid:border-[#F2555B]"
=======
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
>>>>>>> team/main
            placeholder="Min. 8 characters, 1 uppercase, 1 number"
            {...register('password')}
          />
          {errors.password && (
<<<<<<< HEAD
            <p id="password-error" className="text-xs text-[#F2555B]" role="alert">
=======
            <p id="password-error" className="text-xs text-red-500" role="alert">
>>>>>>> team/main
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
<<<<<<< HEAD
          <label
            htmlFor="confirmPassword"
            className="font-mono text-[11px] tracking-widest text-[#6B7A8D] uppercase"
          >
=======
          <label htmlFor="confirmPassword" className="text-sm font-medium">
>>>>>>> team/main
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
<<<<<<< HEAD
            className="w-full rounded-md border border-[#1C2836] bg-[#0B0F16] px-3 py-2 text-sm text-[#E7EEF5] placeholder:text-[#4B5768] focus:border-[#4FD1C5]/60 focus:ring-2 focus:ring-[#4FD1C5]/30 focus:outline-none aria-invalid:border-[#F2555B]"
=======
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-900"
>>>>>>> team/main
            placeholder="••••••••"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
<<<<<<< HEAD
            <p id="confirm-password-error" className="text-xs text-[#F2555B]" role="alert">
=======
            <p id="confirm-password-error" className="text-xs text-red-500" role="alert">
>>>>>>> team/main
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
<<<<<<< HEAD
          className="w-full rounded-md bg-[#4FD1C5] px-4 py-2.5 text-sm font-semibold text-[#06111A] transition-colors hover:bg-[#6EE0D6] disabled:cursor-not-allowed disabled:opacity-50"
=======
          className="w-full rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
>>>>>>> team/main
        >
          {isSubmitting ? 'Creating account…' : 'Create account'}
        </button>
      </form>

<<<<<<< HEAD
      <p className="text-center text-sm text-[#8697A8]">
        Already have an account?{' '}
        <Link href="/auth/signin" className="font-medium text-[#4FD1C5] hover:underline">
=======
      <p className="text-center text-sm text-zinc-500">
        Already have an account?{' '}
        <Link
          href="/auth/signin"
          className="font-medium text-zinc-900 hover:underline dark:text-white"
        >
>>>>>>> team/main
          Sign in
        </Link>
      </p>
    </div>
  )
}
