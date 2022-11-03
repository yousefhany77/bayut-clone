export interface PropertyDetails {
  id: number;
  objectID?: number;
  ownerID?: number;
  userExternalID?: string;
  sourceID?: number;
  state?: string;
  geography: Geography;
  purpose: string;
  price: number;
  product?: string;
  productLabel?: string;
  rentFrequency?: null;
  referenceNumber?: string;
  permitNumber?: string;
  title?: string;
  title_l1?: string;
  description: string;
  description_l1?: string;
  externalID?: string;
  slug?: string;
  slug_l1?: string;
  location: Category[];
  category: Category[];
  createdAt?: number;
  approvedAt?: number;
  updatedAt?: number;
  touchedAt?: number;
  reactivatedAt?: number;
  rooms?: number;
  baths?: number;
  area?: number;
  score?: number;
  score_l1?: number;
  coverPhoto?: Photo;
  photoCount?: number;
  videoCount?: number;
  panoramaCount?: number;
  photos: Photo[];
  floorPlans?: any[];
  videos?: any[];
  panoramas?: any[];
  amenities?: any[];
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: Agency;
  active?: boolean;
  hasExactGeography?: boolean;
  verification?: Verification;
  isVerified?: boolean;
  completionStatus?: string;
  randBoostScore?: number;
  randBoostScore_l1?: number;
  furnishingStatus?: null;
  extraFields?: null;
  type?: string;
  cityLevelScore?: number;
  indyScore?: number;
  indyScore_l1?: number;
  hasMatchingFloorPlans?: boolean;
}

export interface Agency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  externalID: string;
  product: string;
  productScore: number;
  licenses?: License[];
  logo: Logo;
  slug: string;
  slug_l1?: string;
  tier?: number;
}

export interface License {
  number?: string;
  authority?: string;
}

export interface Logo {
  id: number;
  url: string;
}

export interface Category {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1?: string;
  slug: string;
  slug_l1?: string;
  nameSingular?: string;
  nameSingular_l1?: string;
}

export interface Photo {
  id: number;
  externalID: string;
  title: string;
  url: string;
  orderIndex: number;
  nimaScore: number;
  main: boolean;
}

export interface Geography {
  lat: number;
  lng: number;
}

export interface PhoneNumber {
  mobile: string;
  phone: string;
  whatsapp: string;
  proxyMobile?: string;
  phoneNumbers: string[];
  mobileNumbers: string[];
}

export interface Verification {
  status?: string;
  type?: null;
  eligible?: boolean;
  comment?: null;
  updatedAt?: number;
  verifiedAt?: null;
  visitedAt?: null;
}








