import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4 sm:space-y-5">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-green-900"> 404 </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-900"> Page Not Found </h2>
        <Link href="/" className="inline-block mt-4 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg bg-green-900 text-white rounded-lg hover:bg-green-800 transition" > Go Home </Link>
      </div>
    </div>
  )
}