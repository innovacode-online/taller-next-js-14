import { CategoryList } from "@/modules/categories";
import { ProductList } from "@/modules/products";

export default function CartPage() {
    return (
        <>
            {/* LISTADO DE CATEGORIAS */}
            <CategoryList/>

            {/* MENU DE PRODUCTOS */}
            <ProductList/>

        </>
    );
}