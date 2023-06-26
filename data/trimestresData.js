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
        fecha_inicio: trimestreStartDate,
        fecha_fin: trimestreEndDate,
        fecha_reg: new Date(),
      },
    });
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await seedTrimestres();
  },

  down: async (queryInterface, Sequelize) => {
    // No need to define a rollback for this seed migration
  },
};
