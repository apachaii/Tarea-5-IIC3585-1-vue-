export const REGULAR_SPEED = 10;

export const MAP_SCREEN_WIDTH = 800;
export const MAP_SCREEN_HEIGHT = 520;

export const PLAYER_HEIGHT = 40;
export const PLAYER_HEIGHT_WIDTH_RATIO = 1.6;
export const PLAYER_WIDTH = PLAYER_HEIGHT*PLAYER_HEIGHT_WIDTH_RATIO;

export const TILE_SIZE = PLAYER_HEIGHT;
export const SCROLL_DISTANCE = 0.3;

export const EVENTS_TYPES={
  ENEMY: "enemy",
  UPGRADE: "upgrade",
  NEXT_LEVEL: "next_level",
}
export const UPGRADE_TYPES = {
  CHASIS: "chasis",
  WHEELS: "wheels",
}