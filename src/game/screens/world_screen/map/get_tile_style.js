function get_tile_style(tile) {
  if (tile === undefined || !tile.background) {
    return {}
  }
  return {
    background : tile.background.background,
    opacity: tile.background.opacity,
  }
}

export default get_tile_style