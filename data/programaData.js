const generateProgramaData = () => {
    const programas = [
      {
        programa_id: 1,
        nombre: "IDS 2020",
        creditos: 279,
        fecha_reg: new Date(),
        estudiantes: [],
      },
      {
        programa_id: 2,
        nombre: "MED 2020",
        creditos: 350,
        fecha_reg: new Date(),
        estudiantes: [],
      },
      {
        programa_id: 3,
        nombre: "IMC 2020",
        creditos: 280,
        fecha_reg: new Date(),
        estudiantes: [],
      },
      {
        programa_id: 4,
        nombre: "IND 2020",
        creditos: 230,
        fecha_reg: new Date(),
        estudiantes: [],
      },
      {
        programa_id: 5,
        nombre: "PSI 2020",
        creditos: 210,
        fecha_reg: new Date(),
        estudiantes: [],
      },
    ];
  
    return programas;
  };
  
  // Usage example
  const programaData = generateProgramaData();
  
  console.log(programaData);
  