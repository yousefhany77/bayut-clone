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
  externalID?: string;
  location?: string;
  propertyType?: "rent" | "sale";
  residential?: number;
  price?: {
    min: number;
    max: number;
  };
  area?: {
    min: number;
    max: number;
  };
  rooms?: {
    min: number;
    max: number;
  };
  baths?: {
    min: number;
    max: number;
  };
  furnished?: boolean;
  rentFrequency?: "monthly" | "yearly" | "weekly" | "daily";
}

