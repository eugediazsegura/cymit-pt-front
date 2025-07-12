import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = {
    children: React.ReactNode
}
export default function MainLayout({ children }: Props) {
    return (
        <div className="font-gabarito w-full flex flex-col min-h-screen bg-main-100">
            <Header />
            <main className="flex-grow mx-0 px-5 py-6">
                {children}
            </main>
            <Footer />
        </div>)
}