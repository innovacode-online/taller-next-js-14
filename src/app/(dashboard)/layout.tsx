import { SideMenuCart } from "@/modules/cart";
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="relative min-h-screen w-full">
                <Toaster
                    position='top-right'
                    richColors
                    closeButton
                    style={{ position: 'absolute', margin: 0 }}
                />
                <div className="grid grid-cols-12">
                    {/* PAGINA PRINCIPAL */}
                    <div className="col-span-9 h-screen overflow-y-scroll overflow-hidden">
                        {children}
                    </div>

                    {/* CARRITO */}
                    <SideMenuCart/>
                </div>
            </main>
        </>
    );
}