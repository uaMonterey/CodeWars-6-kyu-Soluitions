// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  function decToHex(color) {
    if (color > 255) return 'FF'
    else if (color < 0) return '00'
    else return color.toString(16).padStart(2, '0').toUpperCase()
  }

  return decToHex(r) + decToHex(g) + decToHex(b)
}
