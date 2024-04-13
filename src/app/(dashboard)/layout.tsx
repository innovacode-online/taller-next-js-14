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
                <div>
                    {/* PAGINA PRINCIPAL */}
                    <div>
                        {children}
                    </div>

                    {/* CARRITO */}
                </div>
            </main>
        </>
    );
}