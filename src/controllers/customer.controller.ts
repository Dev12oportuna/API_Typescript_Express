import { Request, Response } from "express";
import prismaDB2 from "../config/db2.config";

//get
export const usuarios_config = async (req: Request, res: Response) => {
    const id: string = req.query.id as string;

    try {
        const usuarioConfig = await prismaDB2.usuarios_config.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (usuarioConfig) {
            res.json(usuarioConfig);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


//get
export const getHistory = async (req: Request, res: Response) => {
    try {
        const iduser: string = req.params.id as string;

        const history = await prismaDB2.registro.findMany({
            where: {
                OR: [
                    { vendedor: iduser },
                    { cliente: iduser }
                ]
            },
            orderBy: {
                unique_id: "desc"
            }
        });

        if (history.length === 0) {
            res.status(404).json({ success: false, error: "No records found" });
        } else {
            res.status(200).json(history);
        }
    } catch (error) {
        console.error("Error querying the database:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};


export const get_categorias = async (req: Request, res: Response) => {
    try {
      const memberIdApp = req.body.memberId;
  
      const rowdep = await prismaDB2.clientes_web.findFirst({
        where: {
          MemberId: memberIdApp,
        },
      });
  
      if (rowdep) {
        const rowali = await prismaDB2.empresa_dependencia.findFirst({
          where: {
            id_dependencia: rowdep.id_clientes,
          },
        });
  
        if (rowali) {
          const categories = await prismaDB2.producto.findMany({
            where: {
              id_empresa: rowali.id_empresa,
              id_dependencia: rowdep.id_clientes,
            },
          });
  
          if (categories.length > 0) {
            const categoryData: any[] = [];
  
            for (const row of categories) {
              // Realiza lógica similar para construir categoryData
            }
  
            res.json(categoryData);
          } else {
            res.json({ error: 'Sin categorías creadas' });
          }
        } else {
          res.json({ error: 'Dependencia no asignada a la empresa' });
        }
      } else {
        res.json({ error: 'No tienes una tienda creada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });





