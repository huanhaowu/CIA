// Assuming you have a Prisma Client instance named "prisma" initialized
'use client'
const prisma = require('@/api/api.js')

export async function disableEntity(entityName, entityId) {
    try {
      const entity = await prisma[entityName].findUnique({ where: { id: entityId } });
      if (!entity) {
        throw new Error(`${entityName} with id ${entityId} not found.`);
      }
  
      const updatedEntity = await prisma[entityName].update({
        where: { id: entityId },
        data: { deshabilitado: true },
      });
  
      console.log(`${entityName} with id ${entityId} has been disabled.`);
      console.log("Updated Entity:", updatedEntity);
    } catch (error) {
      console.error("Error disabling entity:", error);
    }
  }
  
  
  