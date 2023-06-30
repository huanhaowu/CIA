const generateHorarioData = (count) => {
    const days = ["L", "M", "X", "J", "V", "S"];
    const examples = [];
  
    const startHour = 14; // Start hour (7 am)
    const endHour = 16; // End hour (9 am)
  
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
  
    return examples;
  };
  
  // Usage example
  const numberOfExamples = 5; // Change this to generate a different number of examples
  const horarioData = generateHorarioData(numberOfExamples);
  
  console.log(horarioData);
  