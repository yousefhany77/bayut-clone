export interface AgencyResponse {
    hits: Hit[]
    nbHits: number
    page: number
    nbPages: number
    hitsPerPage: number
    exhaustiveNbHits: boolean
    exhaustiveTypo: boolean
    exhaustive: Exhaustive
    query: string
    params: string
    processingTimeMS: number
    processingTimingsMS: ProcessingTimingsMs
  }
  
  export interface Hit {
    id: number
    name: string
    name_l1: string
    name_l2: string
    agentsCount: number
    externalID: string
    product: string
    productScore: number
    location: string
    location_l1: string
    location_l2: string
    licenses: License[]
    logo: Logo
    slug: string
    slug_l1: string
    slug_l2: string
    locations: Location[]
    stats: Stats
    phoneNumber: PhoneNumber
    createdAt: string
    agents: Agent[]
    language_codes: string[]
    speciality_codes: string[]
    objectID: string
    _highlightResult: HighlightResult
  }
  
  export interface License {
    number: string
    authority: string
  }
  
  export interface Logo {
    id: number
    url: string
  }
  
  export interface Location {
    id: number
    objectID: number
    name: string
    name_l1: string
    name_l2: string
    externalID: string
    slug: string
    slug_l1: string
    slug_l2: string
    _geoloc: Geoloc
    geography: Geography
    level: number
    hierarchy: Hierarchy[]
    adCount: number
    aliases: any[]
    type: any
    hasBuilding: boolean
    trackID: string
    roles: any
    completionStatus: string
  }
  
  export interface Geoloc {
    lat: number
    lng: number
  }
  
  export interface Geography {
    lat: number
    lng: number
  }
  
  export interface Hierarchy {
    id: number
    level: number
    externalID: string
    name: string
    name_l1: string
    name_l2: string
    slug: string
    slug_l1: string
    slug_l2: string
  }
  
  export interface Stats {
    categoryTypes: string[]
    purposes: string[]
    serviceAreas: string[]
    locationsWithAds: number[]
    adsRentCount: number
    adsSaleCount: number
    adsCount: number
  }
  
  export interface PhoneNumber {
    phone: string
    proxyPhone: string
    phoneNumbers: string[]
  }
  
  export interface Agent {
    external_id: string
    id: number
    name: string
  }
  
  export interface HighlightResult {
    id: Id
    name: Name
    externalID: ExternalId
    stats: Stats2
    agents: Agent2[]
  }
  
  export interface Id {
    value: string
    matchLevel: string
    matchedWords: any[]
  }
  
  export interface Name {
    value: string
    matchLevel: string
    fullyHighlighted: boolean
    matchedWords: string[]
  }
  
  export interface ExternalId {
    value: string
    matchLevel: string
    matchedWords: any[]
  }
  
  export interface Stats2 {
    locationsWithAds: LocationsWithAd[]
  }
  
  export interface LocationsWithAd {
    value: string
    matchLevel: string
    matchedWords: any[]
  }
  
  export interface Agent2 {
    external_id: ExternalId2
    name: Name2
  }
  
  export interface ExternalId2 {
    value: string
    matchLevel: string
    matchedWords: any[]
  }
  
  export interface Name2 {
    value: string
    matchLevel: string
    matchedWords: any[]
  }
  
  export interface Exhaustive {
    nbHits: boolean
    typo: boolean
  }
  
  export interface ProcessingTimingsMs {
    afterFetch: AfterFetch
    fetch: Fetch
    getIdx: GetIdx
    total: number
  }
  
  export interface AfterFetch {
    format: Format
    total: number
  }
  
  export interface Format {
    highlighting: number
    total: number
  }
  
  export interface Fetch {
    total: number
  }
  
  export interface GetIdx {
    load: Load
    total: number
  }
  
  export interface Load {
    total: number
  }
  