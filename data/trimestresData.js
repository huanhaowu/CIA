const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedTrimestres = async () => {
 

    await prisma.trimestre.create({
      data: {
        trimestre_id: 1,
        fecha_inicio: new Date('2023-02-01'),
        fecha_fin: new Date('2023-04-22'),
        fecha_reg: new Date(),
      },
      data: {
        trimestre_id: 2,
        fecha_inicio: new Date('2023-05-1'),
        fecha_fin: new Date('2023-07-14'),
        fecha_reg: new Date(),
      },
      
    });
  
};

const run = async () => {
  try {
    await seedTrimestres();
    console.log('Trimestres seeded successfully.');
  } catch (error) {
    console.error('Error seeding trimestres:', error);
  } finally {
    await prisma.$disconnect();
  }
};

run();
