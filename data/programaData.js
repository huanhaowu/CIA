'use server';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const generateProgramaData = () => {
  const programas = [
    {
      programa_id: 1,
      nombre: "IDS 2020",
      creditos: 279,
      fecha_reg: new Date(),
    },
    {
      programa_id: 2,
      nombre: "MED 2020",
      creditos: 350,
      fecha_reg: new Date(),
    },
    {
      programa_id: 3,
      nombre: "IMC 2020",
      creditos: 280,
      fecha_reg: new Date(),
    },
    {
      programa_id: 4,
      nombre: "IND 2020",
      creditos: 230,
      fecha_reg: new Date(),
    },
    {
      programa_id: 5,
      nombre: "PSI 2020",
      creditos: 210,
      fecha_reg: new Date(),
    },
  ];

  return programas;
};

// Function to save programa data into the database
const saveProgramaData = async (programas) => {
  for (let programa of programas) {
    const savedPrograma = await prisma.programa.create({
      data: programa,
    });
    console.log(`Programa creado: ${JSON.stringify(savedPrograma)}`);
  }
};

(async () => {
  const programaData = generateProgramaData();
  await saveProgramaData(programaData);
  await prisma.$disconnect();
})();
