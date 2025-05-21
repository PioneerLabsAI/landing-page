import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-transparent bg-clip-text">Pioneer Labs AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a>
          <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a2b4e] absolute top-full left-0 right-0 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors py-2">Products</a>
            <a href="#technology" className="text-gray-300 hover:text-white transition-colors py-2">Technology</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors py-2">Benefits</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2">Contact</a>
            <button className="bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
