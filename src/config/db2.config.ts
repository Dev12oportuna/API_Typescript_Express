import { PrismaClient } from '@prisma/client';

const prismaDB2 = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL2
        }
    }
});

export default prismaDB2;