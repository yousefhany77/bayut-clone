export interface Autocomplete {
  hits: Hit[];
}

export interface Hit {
  id: number;
  name: string;
  name_l1: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  _geoloc: Geo;
  geography: Geo;
  level: number;
  hierarchy: HitHierarchy[];
  adCount: number;
  aliases: string[];
  type: null | string;
  hasBuilding: boolean;
  trackID: string;
  roles: null;
  completionStatus: string;
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  name: ExternalID;
  externalID: ExternalID;
  hierarchy: HighlightResultHierarchy[];
  aliases?: ExternalID[];
}

export interface ExternalID {
  value: string;
  matchLevel: MatchLevel;
  fullyHighlighted?: boolean;
  matchedWords: string[];
}

export enum MatchLevel {
  Full = "full",
  None = "none",
}

export interface HighlightResultHierarchy {
  externalID: ExternalID;
  slug: ExternalID;
}

export interface HitHierarchy {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
  type?: string;
}

export interface Filters {
  locationExternalIDs?: string;
  location?: string;
  purpose?: "for-rent" | "for-sale";
  categoryExternalID?: number;
  price?: {
    Min: number;
    Max: number;
  };
  area?: {
    Min: number;
    Max: number;
  };
  rooms?: {
    Min: number;
    Max: number;
  };
  baths?: {
    Min: number;
    Max: number;
  };
  furnished?: boolean;
  rentFrequency?: "monthly" | "yearly" | "weekly" | "daily";
  page?: number;
  hitsPerPage?: number;
}
export interface PropertiesListingResponse {
  hits: PropertiesListing[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustive: Exhaustive;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface Exhaustive {
  nbHits: boolean;
}

export interface PropertiesListing {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc: Geo;
  geography: Geo;
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber: string;
  projectNumber: null;
  title: string;
  title_l1: string;
  title_l2: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  location: Category[];
  category: Category[];
  createdAt: number;
  updatedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  score_l2: number;
  coverPhoto: CoverPhoto;
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: HitAgency;
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: Verification;
  verifiedScore: number;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  floorPlanID: null;
  furnishingStatus: string;
  extraFields: ExtraFields;
  type: string;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  locationPurposeTier: number;
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  referenceNumber: ExternalID;
  title: ExternalID;
  externalID: ExternalID;
  agency: HighlightResultAgency;
  keywords: ExternalID[];
}

export interface HighlightResultAgency {
  name: ExternalID;
}

export interface ExternalID {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: any[];
}

export enum MatchLevel {
  None = "none",
}

export interface HitAgency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  name_l2: string;
  externalID: string;
  product: string;
  productScore: number;
  licenses: License[];
  logo: Logo;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  tr: number;
  tier: number;
  roles: any[];
  active: boolean;
  createdAt: Date;
  commercialNumber: null;
  shortNumber: null;
}

export interface License {
  number: string;
  authority: string;
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
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  nameSingular?: string;
  nameSingular_l1?: string;
  nameSingular_l2?: string;
  type?: string;
}

export interface CoverPhoto {
  id: number;
  externalID: string;
  title: null;
  orderIndex: number;
  nimaScore: number;
  url: string;
  main: boolean;
}

export interface PhoneNumber {
  mobile: string;
  phone: string;
  whatsapp: string;
  proxyMobile: string;
  phoneNumbers: string[];
  mobileNumbers: string[];
}

export interface Verification {
  updatedAt: number;
  eligible: boolean;
  status: string;
  verifiedAt: number;
}

export interface ProcessingTimingsMS {
  fetch: Fetch;
  getIdx: GetIdx;
  total: number;
}

export interface Fetch {
  scanning: number;
  total: number;
}

export interface GetIdx {
  load: Load;
  total: number;
}

export interface Load {
  total: number;
}
