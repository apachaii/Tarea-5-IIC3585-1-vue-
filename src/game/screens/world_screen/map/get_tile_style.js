function get_tile_style(tile) {
  if (tile === undefined || !tile.background) {
    return {}
  }
  return {
    background : tile.background.background,
  }
}

export default get_tile_style