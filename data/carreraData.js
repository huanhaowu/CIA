'use server';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const generateCarreraData = () => {
  const carreras = [
    {
      carrera_id: 1,
      nombre: "Ingenieria Mecatronica",
      area_id: 1,
      fecha_reg: new Date(),
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
    },
    {
      carrera_id: 2,
      nombre: "Ingenieria de Software",
      area_id: 1,
      fecha_reg: new Date(),
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
    },
    {
      carrera_id: 3,
      nombre: "Ingenieria Industrial",
      area_id: 1,
      fecha_reg: new Date(),
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
    },
    {
      carrera_id: 4,
      nombre: "Medicina",
      area_id: 2,
      fecha_reg: new Date(),
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
    },
    {
      carrera_id: 5,
      nombre: "Psicologia",
      area_id: 3,
      fecha_reg: new Date(),
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
    },
  ];

  return carreras;
};

// Function to save carrera data into the database
const saveCarreraData = async (carreras) => {
  for (let carrera of carreras) {
    const savedCarrera = await prisma.carrera.create({
      data: carrera,
    });
    console.log(`Carrera creada: ${JSON.stringify(savedCarrera)}`);
  }
};

(async () => {
  const carreraData = generateCarreraData();
  await saveCarreraData(carreraData);
  await prisma.$disconnect();
})();
