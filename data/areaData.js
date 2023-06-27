const generateAreaData = () => {
    const areas = [
      {
        area_id: 1,
        nombre: "Ingenieria",
        fecha_reg: new Date(),
        fecha_des: null,
        fecha_mod: null,
        deshabilitado: false,
        carreras: [],
      },
      {
        area_id: 2,
        nombre: "Ciencias de la Salud",
        fecha_reg: new Date(),
        fecha_des: null,
        fecha_mod: null,
        deshabilitado: false,
        carreras: [],
      },
      {
        area_id: 3,
        nombre: "Ciencias Sociales y Humanidades",
        fecha_reg: new Date(),
        fecha_des: null,
        fecha_mod: null,
        deshabilitado: false,
        carreras: [],
      },
    ];
  
    return areas;
  };
  
  // Usage example
  const areaData = generateAreaData();
  
  console.log(areaData);
  