/* import {PrismaClient} from "@prisma/client"
import { Customer } from "./types";

const prisma = new PrismaClient()
const prisma3 = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL3
        }
    }
})


export class CustomerController {

    constructor() {
        
        this.getLogin
    }

    async getLogin(sql: TemplateStringsArray): Promise<any> {
        try {
            const result = await prisma.$queryRaw(sql);
            return result;
        } catch (error) {
            throw error;
        }
    }

     async createCustomer(newCustomer: Customer): Promise<any> {
        try {
            const createdCustomer = await prisma.customer.create({
                data: newCustomer
            });
    
            return createdCustomer;
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }; 
    
 */    
    
    
    
    
    
    
    

//}


