import { CategoryList, getCategories } from "@/modules/categories";
import { ProductList } from "@/modules/products";

export default async function CartPage() {

    const categories = await getCategories();



    return (
        <>
            {/* LISTADO DE CATEGORIAS */}
            <CategoryList
                categories={ categories! }
            />

            {/* MENU DE PRODUCTOS */}
            <ProductList/>

        </>
    );
}