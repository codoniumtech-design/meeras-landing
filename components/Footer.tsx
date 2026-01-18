import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-beige-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <div className="h-8 w-1 bg-beige-100"></div>
                <div className="h-6 w-1 bg-beige-100"></div>
                <div className="h-10 w-1 bg-beige-100"></div>
              </div>
              <span className="text-xl font-semibold tracking-wide">
                MERAAS
              </span>
            </div>
            <p className="text-beige-300 text-sm">
              Premium real estate developments designed for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-beige-300 hover:text-beige-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="text-beige-300 hover:text-beige-100 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-beige-300 hover:text-beige-100 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-beige-300">
              <li>Email: info@premiumproperty.com</li>
              <li>Phone: +971 4 XXX XXXX</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-8 pt-8 text-center text-sm text-beige-400">
          <p>
            © {new Date().getFullYear()} Premium Property Real Estate. All
            rights reserved.
          </p>
          <p className="mt-2 text-xs">
            We treat your personal information as confidential and in accordance
            with our privacy policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
