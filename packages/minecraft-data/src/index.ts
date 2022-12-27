import * as versionsCollection from './data/versions.json';
import * as gamesCollection from './data/games.json';
import * as effectsCollection from './data/effects.json';
import * as dimensionsCollection from './data/dimensions.json';
import * as colorsCollection from './data/colors.json';
import * as biomesCollection from './data/biomes.json';
import type { IBiome, IColor, IDimension, IEffect, IGame, IVersion } from './types/global';

export const versions: IVersion[] = versionsCollection.data as IVersion[];
export const games: IGame[] = gamesCollection.data as IGame[];
export const effects: IEffect[] = effectsCollection.data as IEffect[];
export const dimensions: IDimension[] = dimensionsCollection.data as IDimension[];
export const colors: IColor[] = colorsCollection.data as IColor[];
export const biomes: IBiome[] = biomesCollection.data as IBiome[];

export { IBiome, IColor, IDimension, IEffect, IGame, IVersion };
