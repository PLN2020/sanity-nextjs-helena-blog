import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="sticky flex justify-between items-center top-0 h-[10vh] bg-gray-100 px-10 z-10">
            <div>
                <Link href='/'>Helena's Blog</Link>
            </div>
            
            <div className="flex justify-center items-center">
                <div className="flex space-x-4 mr-10">
                    <Link href='/about'>About</Link>
                    <Link href='/portfolio'>Portfolio</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/contact'>Contact</Link>  
                </div>

                <div className="border-l-2 border-gray-600 h-8" />

                <div className="flex space-x-4 ml-10">
                    <Link href="https://www.twitter.com" target="_blank">
                        <FaTwitter />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank">
                        <FaYoutube />
                    </Link>
                </div>
            </div>
        </nav>
    )
}