import { SpecialFamilyRate } from './specialFamilyRate.model';

export interface FamilyEmployer {
  id: string;
  name: string;
  hourlyRateBeforeBedTime: number;
  hourlyRateAfterBedTime: number;
  specialRate?: SpecialFamilyRate;
}
