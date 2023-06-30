'use server';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const generateAreaData = () => {
  const areas = [
    {
      area_id: 1,
      nombre: "Ingenieria",
      fecha_reg: new Date(),
      fecha_des: null,
      fecha_mod: null,
      deshabilitado: false,
    },
    {
      area_id: 2,
      nombre: "Ciencias de la Salud",
      fecha_reg: new Date(),
      fecha_des: null,
      fecha_mod: null,
      deshabilitado: false,
    },
    {
      area_id: 3,
      nombre: "Ciencias Sociales y Humanidades",
      fecha_reg: new Date(),
      fecha_des: null,
      fecha_mod: null,
      deshabilitado: false,
    },
  ];

  return areas;
};

// Function to save area data into the database
const saveAreaData = async (areas) => {
  for (let area of areas) {
    const savedArea = await prisma.area.create({
      data: area,
    });
    console.log(`Area creada: ${JSON.stringify(savedArea)}`);
  }
};

(async () => {
  const areaData = generateAreaData();
  await saveAreaData(areaData);
  await prisma.$disconnect();
})();
