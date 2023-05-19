import MobileFooter from "../footer/MobileFooter"
import DesktopSidebar from "./DesktopSidebar"

async function Sidebar({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full">
            <DesktopSidebar />
            <MobileFooter />
            <main className="lg:pl-20 h-full bg-darkerBlue">
                {children}
            </main>
        </div>
    )
}

export default Sidebar