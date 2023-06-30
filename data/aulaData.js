const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const generateAulaData = async (count) => {
  const examples = [];

  for (let i = 100; i < count+100; i++) {
    const aula = {
      aula_clave: `A${i}`,
      capacidad: 40,
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
      secciones: []
    };

    examples.push(aula);
  }

  return examples;
};

const uploadAulaData = async () => {
  const numberOfExamples = 1; // Change this to generate a different number of examples
  const aulaData = await generateAulaData(numberOfExamples);

  try {
    for (const aula of aulaData) {
      await prisma.aula.create({ data: aula });
    }

    console.log('Aula data uploaded successfully!');
  } catch (error) {
    console.error('Error uploading aula data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

uploadAulaData();
