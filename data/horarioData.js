const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const generateHorarioData = (count) => {
  const days = ["L", "M", "X", "J", "V", "S"];
  const examples = [];

  const startHour = 7; // Start hour (7 am)
  const endHour = 9; // End hour (9 am)

  for (let i = 0; i < count; i++) {
    const horario = {
      horario_id: i + 1,
      dia: days[i % days.length], // Assign days cyclically
      hora_inicio: new Date().setHours(startHour, 0, 0, 0), // Set start hour
      hora_fin: new Date().setHours(endHour, 0, 0, 0), // Set end hour
      fecha_reg: new Date(),
    };

    examples.push(horario);
  }

  return examples.map(example => ({
    ...example,
    hora_inicio: new Date(example.hora_inicio),
    hora_fin: new Date(example.hora_fin),
    fecha_reg: new Date(example.fecha_reg),
  }));
};


const seedHorarios = async (horarioData) => {
  try {
    for (const horario of horarioData) {
      await prisma.horario.create({
        data: horario,
      });
    }
    console.log('Horarios seeded successfully.');
  } catch (error) {
    console.error('Error seeding horarios:', error);
  }
};

const run = async () => {
  try {
    const numberOfExamples = 5; // Change this to generate a different number of examples
    const horarioData = generateHorarioData(numberOfExamples);

    await seedHorarios(horarioData);
  } catch (error) {
    console.error('Error seeding data')
  }
}

run();

