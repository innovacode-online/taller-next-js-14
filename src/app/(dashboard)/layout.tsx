
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>
                {/* PAGINA PRINCIPAL */}
                <div>
                    { children }
                </div>

                {/* CARRITO */}
            </main>
        </>
    );
}