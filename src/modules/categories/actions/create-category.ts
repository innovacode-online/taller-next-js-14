"use server"

import { prisma } from "@/utils"
import { revalidatePath } from "next/cache";



export const createCategory = async ( formData: FormData ) => {

    const name = formData.get('name') as string;
    const image = formData.get('image');

    try {

        const response = await prisma.category.create({
            data: {
                name,
                image: 'Hola mundo'
            }
        });

        revalidatePath('/cart')

    } catch (error) {
        console.log(error);

    }
}


