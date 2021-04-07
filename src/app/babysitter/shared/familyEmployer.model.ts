import { SpecialFamilyRate } from './specialFamilyRate.model';

export interface FamilyEmployer {
  id: number;
  name: string;
  bedTime: string;
  hourlyRateBeforeBedTime: number;
  hourlyRateAfterBedTime: number;
  specialRate?: SpecialFamilyRate;
}
