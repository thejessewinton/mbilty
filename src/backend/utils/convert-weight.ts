import { WeightUnit } from '@prisma/client';

export const convertWeight = (weight: number, unit: WeightUnit) => {
  if (unit === WeightUnit.KG) {
    return weight * 2.20462;
  }
  return weight;
};
