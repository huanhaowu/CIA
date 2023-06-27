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
        area: null,
      },
      {
        carrera_id: 2,
        nombre: "Ingenieria de Software",
        area_id: 1,
        fecha_reg: new Date(),
        fecha_mod: null,
        fecha_des: null,
        deshabilitado: false,
        area: null,
      },
      {
        carrera_id: 3,
        nombre: "Ingenieria Industrial",
        area_id: 1,
        fecha_reg: new Date(),
        fecha_mod: null,
        fecha_des: null,
        deshabilitado: false,
        area: null,
      },
      {
        carrera_id: 4,
        nombre: "Medicina",
        area_id: 2,
        fecha_reg: new Date(),
        fecha_mod: null,
        fecha_des: null,
        deshabilitado: false,
        area: null,
      },
      {
        carrera_id: 5,
        nombre: "Psicologia",
        area_id: 3,
        fecha_reg: new Date(),
        fecha_mod: null,
        fecha_des: null,
        deshabilitado: false,
        area: null,
      },
    ];
  
    return carreras;
  };
  
  // Usage example
  const carreraData = generateCarreraData();
  
  console.log(carreraData);
  