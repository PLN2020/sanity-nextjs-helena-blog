import Navbar from "../../components/Navbar"
import "../../styles/globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body>
                <Navbar />
                <div className="max-w-7xl mx-auto">{children}</div>
            </body>
        </html>
    )
}
