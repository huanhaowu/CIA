const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedModalidades = async () => {
  try {
    const modalidades = [
      { modalidad_id: 1, nombre: 'Presencial', fecha_reg: new Date() },
      { modalidad_id: 2, nombre: 'Virtual', fecha_reg: new Date() },
      { modalidad_id: 3, nombre: 'Hibrido', fecha_reg: new Date() },
    ];

    await prisma.modalidad.createMany({
      data: modalidades,
      skipDuplicates: true,
    });

    console.log('Modalidades seeded successfully.');
  } catch (error) {
    console.error('Error seeding modalidades:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seedModalidades();
