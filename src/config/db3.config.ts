import { PrismaClient } from '@prisma/client';

const prismaDB3 = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL3
        }
    }
});

export default prismaDB3;