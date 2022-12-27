export interface IVersion {
  version: string;
  major: string;
  majorName: string | null;
  release: string | null;
  planned?: string;
}

export interface IGame {
  tag: string;
  name: string;
  description: string;
  officialRelease: string | null;
  editions: string[];
  status: string;
}

export interface IEffect {
  tag: string | null; 
  name: string;
  mcId: number;
  description: {
    short: string;
    long: string;
  };
  type: string;
  causes: ICauseEffect[];
}

export interface ICauseEffect {
  tag: string | null;
  description: string | null;
  potency: string | null;
  length: string | null;
  note: string | null;
}

export interface IDimension {
  tag: DimensionType;
  name: string;
  coordinateScale: number;
  ambientLight: number;
  ultrawarm: boolean;
  fixedTime: null;
  altitude: {
    totalHeight: number;
    logicalHeight: number;
    minY: number;
    maxY: number;
  };
  has: {
    ceiling?: boolean;
    raids?: boolean;
    skylight?: boolean;
    workingRespawnAnchor?: boolean;
    workingBed?: boolean;
    safePiglins?: boolean;
  };
  biomes?: BiomesType[];
}

export type BiomesType =
  'badlands' |
  'bamboo_jungle' |
  'beach' |
  'birch_forest' |
  'cold_ocean' |
  'dark_forest' |
  'deep_cold_ocean' |
  'deep_frozen_ocean' |
  'deep_lukewarm_ocean' |
  'deep_ocean' |
  'desert' |
  'dripstone_caves' |
  'eroded_badlands' |
  'flower_forest' |
  'forest' |
  'frozen_ocean' |
  'frozen_peaks' |
  'frozen_river' |
  'grove' |
  'ice_spikes' |
  'jagged_peaks' |
  'jungle' |
  'lukewarm_ocean' |
  'lush_caves' |
  'meadow' |
  'mushroom_fields' |
  'ocean' |
  'old_growth_birch_forest' |
  'old_growth_pine_taiga' |
  'old_growth_spruce_taiga' |
  'plains' |
  'river' |
  'savanna' |
  'savanna_plateau' |
  'snowy_beach' |
  'snowy_plains' |
  'snowy_slopes' |
  'snowy_taiga' |
  'sparse_jungle' |
  'stony_peaks' |
  'stony_shore' |
  'sunflower_plains' |
  'swamp' |
  'taiga' |
  'the_void' |
  'warm_ocean' |
  'windswept_forest' |
  'windswept_gravelly_hills' |
  'windswept_hills' |
  'windswept_savanna' |
  'wooded_badlands' |
  'nether_wastes' |
  'crimson_forest' |
  'warped_forest' |
  'soul_sand_valley' |
  'basalt_deltas' |
  'the_end' |
  'small_end_islands' |
  'end_highlands' |
  'end_midlands' | 
  'end_barrens';

export type DimensionType =
  | 'overworld'
  | 'overworld_caves'
  | 'the_nether'
  | 'the_end';

export interface IColor {
  name: string;
  tag: string;
  chatCode: string;
  motdCode: string;
  hexCode: string;
}

export interface IBiome {
  tag: BiomesType;
  name: string;
  category: string;
  rain: number;
  precipitation: string;
  temperature: number;
  dimension: DimensionType;
  rarity: string;
  structures: StructureType[];
}

export type StructureType =
  | 'village'
  | 'pillager_outpost'
  | 'igloo'
  | 'ice_spike'
  | 'desert_temple'
  | 'desert_well'
  | 'fossil'
  | 'swamp_hut'
  | 'woodland_mansion'
  | 'jungle_temple'
  | 'mineshaft'
  | 'burried_treasure'
  | 'shipwreck'
  | 'underwater_ruins'
  | 'coral_reef'
  | 'ocean_monument'
  | 'bastion_remnants'
  | 'nether_fortress'
  | 'ruined_portal'
  | 'ancient_city'
  | 'end_city'
  | 'end_gateway';
