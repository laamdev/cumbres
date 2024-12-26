export interface Badge {
  id: number;
  label: string;
  imageUrl: string;
  value?: string;
  filter?: number;
  peaks?: string[];
  peak?: string;
  county?: string;
  code?: string;
}

export interface Badges {
  general: Badge[];
  misc: Badge[];
  highestPointCountryAndPeninsula: Badge[];
  highestPointCounty: Badge[];
  allHighestPointsByCounty: Badge[];
}

export type BadgeCategory = keyof Badges;
