import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold mb-4">About</h3>
                        <p>Your one-stop shop for urban trends and amazing bargains.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">{/* Add social media icons here */}</div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 UrbanBazaar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

