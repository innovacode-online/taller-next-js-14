"use server"

import { prisma } from "@/utils"
import { ICategory } from "../interfaces/category";


export const getCategories = async () => {

    try {
        
        const categories = await prisma.category.findMany();

        if( !categories ){
            return [];
        }

        return categories! as ICategory[];
    
    } catch (error) {
        console.log(error);
    }

}