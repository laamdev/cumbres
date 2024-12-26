export interface AddPeakResponse {
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

export interface CreateSummitFormData {
  summitDate: string | Date;
  peakSlug: string;
}

export interface UpdateSummitFormData {
  summitDate: string | Date;
  peakSlug: string;
}

export interface DeleteSummitFormData {
  peakSlug: string;
}

export interface CreateSummitActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof CreateSummitFormData]?: string[];
  };
}

export interface UpdateSummitActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof UpdateSummitFormData]?: string[];
  };
}

export interface DeleteSummitActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof DeleteSummitFormData]?: string[];
  };
}
