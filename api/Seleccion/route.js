'use server'
const prisma = require('../../api/api.js')

const generarVolante = async (req, res) => {
    const { year, period, id } = req.body;
  
    const getMonthStart = (period) => {
        if (period === 1) return '02-01';
        if (period === 2) return '05-01';
        if (period === 3) return '08-01';
        if (period === 4) return '11-01';
        return '';
      };
    
      
      const trimestre = await prisma.trimestre.findFirst({
        where: {
          fecha_inicio: {
            gte: new Date(`${year}-${getMonthStart(period)}`)
          }
        },
        orderBy: {
          fecha_inicio: 'asc'
        }
      });
    
      if (trimestre) {
        const secciones = await prisma.seccion.findMany({
          where: {
            trimestre_id: trimestre.trimestre_id,
            estudiantes_secciones: {
              some: {
                estudiante: {
                  est_id: id
                }
              }
            }
          }
        });
      
    
  
        const data = secciones.map((item) => {
            return{
              CLAVE: item.asignatura_clave,
              SEC: item.numero.toString().padStart(2, '0'),
              AULA: item.aula_clave,
              CRED: 4, // Add the credit value here
              ASIGNATURA: 'DISEÑO DE SOFTWARE', // Add the subject name here
              DOCENTE: 'Bernardo Batista', // Add the professor name here
              Lun: '00/00',
              Mar: '00/00',
              Mier: '00/00',
              Jue: '00/00',
              Vie: '00/00',
              Sab: '00/00'
            };
          });
  
    res.status(200).json({ data });
  };
};

export default generarVolante;