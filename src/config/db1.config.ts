import { PrismaClient  } from '@prisma/client';

const prismaDB1 = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL1
        }
    }
});

export default prismaDB1;