const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const retrieveSeccionesByProfId = async (profId) => {
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
retrieveSeccionesByProfId(profId)
  .then((secciones) => {
    console.log(secciones);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
