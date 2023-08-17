import { Request, Response}  from "express";

 export async function indexWelcome(req: Request, res: Response): Promise<Response> {
    return await res.json('Welcome to my API')
}