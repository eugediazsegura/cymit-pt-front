import MainLayout from "./components/layout/MainLayout"
import { AppRoutes } from "./routes/AppRoutes";
import "./styles/tailwind.css"


export default function CymitApp() {
    return (
        <>
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </>
    )
}