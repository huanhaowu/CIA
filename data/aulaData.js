const generateAulaData = (count) => {
  const examples = [];

  for (let i = 100; i < count; i++) {
    const aula = {
      aula_clave: `A${i}`,
      capacidad: Math.floor(Math.random() * 40) + 1,
      fecha_reg: new Date(),
      fecha_mod: null,
      fecha_des: null,
      deshabilitado: false,
      secciones: [],
    };

    examples.push(aula);
  }

  return examples;
};

// Usage example
const numberOfExamples = 10; // Change this to generate a different number of examples
const aulaData = generateAulaData(numberOfExamples);

console.log(aulaData);
