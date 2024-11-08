import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer className="py-6 mt-auto text-white bg-gradient-to-r from-blue-600 to-yellow-400">
      <div className="container px-4 mx-auto text-center">
        <p className="text-lg font-medium">&copy; 2023 MyWebsite. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors hover:text-yellow-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}