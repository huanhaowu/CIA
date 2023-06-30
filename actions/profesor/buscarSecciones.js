'use server'
const prisma = require('@/api/api.js')

const getSeccionesByProfId = async (profId) => {
  const secciones = await prisma.seccion.findMany({
    where: {
      deshabilitado: false,
      prof_id: profId,
    },
  });

  return secciones;
};

// Usage example
const profId = 1; // Replace with the desired prof_id
getSeccionesByProfId(profId)
  .then((secciones) => {
    console.log(secciones);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = {
  getSeccionesByProfId,
};