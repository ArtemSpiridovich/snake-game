import React from 'react'

class Field extends React.Component {

  componentDidMount () {
    this.updateCanvas()
  }

  updateCanvas () {
    const ctx = this.refs.map.getContext('2d')
    let map = this.refs.map
    map.width = 30 * this.props.cellSize
    map.height = 30 * this.props.cellSize
    ctx.fillStyle = '#ccc'
    ctx.fillRect(0, 0, map.width, map.height)
    ctx.fillStyle = '#000'
    ctx.fillRect(
      2 * this.props.cellSize,
      2 * this.props.cellSize,
      26 * this.props.cellSize,
      26 * this.props.cellSize
    )

    let cellSize = this.props.cellSize

    function DrawBrick (x, y) {
      // Отрисовка основного цвета кирпича
      ctx.fillStyle = '#FFA500'
      ctx.fillRect(x, y, cellSize, cellSize)
      // Отрисовка теней
      ctx.fillStyle = '#CD8500'
      ctx.fillRect(x, y, cellSize, cellSize / 8)
      ctx.fillRect(x, y + cellSize / 2, cellSize, cellSize / 8)
      ctx.fillRect(x + cellSize / 2, y, cellSize / 8, cellSize / 2)
      ctx.fillRect(
        x + cellSize / 8,
        y + cellSize / 2,
        cellSize / 8,
        cellSize / 2
      )
      // Отрисовка раствора между кирпичами
      ctx.fillStyle = '#D3D3D3'
      ctx.fillRect(
        x,
        y + cellSize / 2 - cellSize / 8,
        cellSize,
        cellSize / 8
      )
      ctx.fillRect(
        x,
        y + cellSize - cellSize / 8,
        cellSize,
        cellSize / 8
      )
      ctx.fillRect(
        x + cellSize / 2 - cellSize / 8,
        y,
        cellSize / 8,
        cellSize / 2
      )
      ctx.fillRect(
        x,
        y + cellSize / 2 - cellSize / 8,
        cellSize / 8,
        cellSize / 2
      )
    }

    for (let j = 0; j < 26; j++)
      for (let i = 0; i < 26; i++) {
        switch (this.props.state.field[j][i]) {
          case 1:
            DrawBrick(
              (i * this.props.cellSize) + this.props.cellSize * 2,
              (j * this.props.cellSize) + this.props.cellSize * 2
            )
            break;
        }
      }
  }

  render () {
    return <canvas ref='map' class='map'></canvas>
  }
}

export default Field
