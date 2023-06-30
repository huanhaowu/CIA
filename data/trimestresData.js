const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedTrimestres = async () => {
  const startDate = new Date('2022-01-31');
  const trimestreDurationWeeks = 11;
  const restWeeks = 1;

  for (let i = 0; i < 8; i++) {
    const trimestreStartDate = new Date(startDate);
    trimestreStartDate.setDate(startDate.getDate() + (i * (trimestreDurationWeeks + restWeeks)));

    const trimestreEndDate = new Date(trimestreStartDate);
    trimestreEndDate.setDate(trimestreStartDate.getDate() + trimestreDurationWeeks);

    await prisma.trimestre.create({
      data: {
        trimestre_id: i,
        fecha_inicio: trimestreStartDate,
        fecha_fin: trimestreEndDate,
        fecha_reg: new Date(),
      },
    });
  }
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
