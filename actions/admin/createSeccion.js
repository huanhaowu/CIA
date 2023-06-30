'use server'
const prisma = require('@/api/api.js')

const getNextSeccionId = async () => {
  const maxSeccionId = await prisma.seccion.findFirst({
    select: {
      seccion_id: true
    },
    orderBy: {
      seccion_id: 'desc'
    }
  });

  if (maxSeccionId) {
    return maxSeccionId.seccion_id + 1;
  } else {
    return 1;
  }
}


export async function addSeccion(data) {
  const nextSeccionId = await getNextSeccionId();
  const seccion_id = nextSeccionId;
  const asignatura_clave = data.get("CLAVE ASIG.");
  const numero = Number(data.get("NUMERO"));
  const trimestre_id = Number(data.get("TRIMESTRE ID"));
  const prof_id = Number(data.get("DOCENTE ID"));
  const modalidad_id = Number(data.get("MODALIDAD ID"));
  const aula_clave = data.get("AULA");
  const deshabilitado = false;

  const newSeccion = await prisma.seccion.create({
    data: {
      seccion_id: seccion_id,
      asignatura_clave: asignatura_clave,
      numero: numero,
      trimestre_id : trimestre_id,
      prof_id: prof_id,
      modalidad_id: modalidad_id,
      aula_clave: aula_clave,
      deshabilitado: deshabilitado,
    },
  });

  // addHorarioSeccion(data, nextSeccionId);

  const horarios = [];
  
    for (let i = 1; i <=3; i++) {
      const horario_id = Number(data.get(`HORARIO DIA ${i}`));
  
      if (horario_id) {
        const newHorarioSeccion = await prisma.horario_seccion.create({
          data: {
            seccion_id: seccion_id,
            horario_id: horario_id,
          },
        });
  
        horarios.push(newHorarioSeccion);
       
      }
      console.log(horario_id);

    }
  
  return newSeccion;
}

  