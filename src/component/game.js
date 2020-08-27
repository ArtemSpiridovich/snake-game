import React from 'react'

class Game extends React.Component {
  componentDidMount () {
    this.updateCanvas()
  }

  state = {
    currentSide: [this.props.snake[0][0] + 16, this.props.snake[0][1]],
    side: 'right',
    start: 0,
    c: 0
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.snake !== this.props.snake) {
      switch (this.state.side) {
        case 'right': {
          this.setState({
            currentSide: [this.props.snake[0][0] + 16, this.props.snake[0][1]]
          })
          break
        }
        case 'left': {
          this.setState({
            currentSide: [this.props.snake[0][0] - 16, this.props.snake[0][1]]
          })
          break
        }
        case 'top': {
          this.setState({
            currentSide: [this.props.snake[0][0], this.props.snake[0][1] - 16]
          })
          break
        }
        case 'bottom': {
          this.setState({
            currentSide: [this.props.snake[0][0], this.props.snake[0][1] + 16]
          })
          break
        }
      }
    }
  }

  createApple = (min, max) => {
    let i = Math.floor(Math.random() * (max - min) + min)
    return Math.round(i / this.props.cellSize) * this.props.cellSize
  }

  updateCanvas = () => {
    const ctx = this.refs.game.getContext('2d')
    let game = this.refs.game
    game.tabIndex = 1000
    game.width = 24 * this.props.cellSize
    game.height = 24 * this.props.cellSize
    let cellSize = this.props.cellSize
    let setSnake = this.props.setSnake

    //появление яблока
    if (this.state.start === 0 )
    {ctx.fillStyle = 'Red'
    let appleX = this.createApple(0, 23 * cellSize)
    let appleY = this.createApple(0, 23 * cellSize)
    this.props.setApple([appleX, appleY])
    ctx.arc(
      appleX + cellSize / 2,
      appleY + cellSize / 2,
      cellSize / 2,
      0,
      Math.PI * 2
    )
    ctx.closePath()
    ctx.fill()
    this.setState({
      start: 1
    })
  }

    let stopGame = setInterval(() => {
    game.focus()
      const snakeCopy = [...this.props.snake]
      snakeCopy.unshift(this.state.currentSide)
      setSnake(snakeCopy)
      this.setState({ 
        c: 0
      })
      //столкновение змейки с самой собой
      let i = 0
      snakeCopy.forEach(element => {
        if (i != 0) {
          if (
            this.props.snake[0][0] === element[0] &&
            this.props.snake[0][1] === element[1]
          ) {
            clearInterval(stopGame)
            alert('Game over')
          }
        } else {
          i = 1
        }
      })

      //Если змейка сьела яблоко
      if (
        snakeCopy[0][0] === this.props.apple[0] &&
        snakeCopy[0][1] === this.props.apple[1]
      ) {
        ctx.clearRect(this.props.apple[0], this.props.apple[1], cellSize, cellSize);
        let appleX = this.createApple(0, 23 * cellSize)
        let appleY = this.createApple(0, 23 * cellSize)
        snakeCopy.map(el => {
          if(appleX === el[0] && appleY === el[1]) {
            let appleX = this.createApple(0, 23 * cellSize)
            let appleY = this.createApple(0, 23 * cellSize)
            this.props.setApple([appleX, appleY])
          } else {
            this.props.setApple([appleX, appleY])
          }
        })
        ctx.fillStyle = 'Red'
        ctx.beginPath()
        ctx.arc(
          this.props.apple[0] + cellSize / 2,
          this.props.apple[1] + cellSize / 2,
          cellSize / 2 - 1,
          0,
          Math.PI * 2
        )
        ctx.closePath()
        ctx.fill()
      } else {
        let elem = snakeCopy.pop()
        ctx.clearRect(elem[0], elem[1], cellSize, cellSize)
      }

      //Отрисовка змейки
      for (let j = 0; j < snakeCopy.length; j++) {
        if (
          this.props.snake[0][0] === 24 * cellSize ||
          this.props.snake[0][1] === 24 * cellSize ||
          this.props.snake[0][0] === 0 - 16 ||
          this.props.snake[0][1] === 0 - 16
        ) {
          clearInterval(stopGame)
          alert('Game over')
          break
        } else {
          let positionX = snakeCopy[j][0]
          let positionY = snakeCopy[j][1]
          ctx.fillStyle = 'Green'
          ctx.fillRect(positionX, positionY, cellSize - 1, cellSize - 1)
        }
      }
    }, 200)
  }

  //как избавиться от столкновения при быстром нажатии клавиштзь?????

  pressKey = e => {
    if (this.state.c === 0){
    if (e.keyCode === 37 && this.state.side !== 'right') {
     this.setState({
        side: 'left',
        c: 1
      })
    } else if (e.keyCode === 38 && this.state.side !== 'bottom') {
      this.setState({
        side: 'top',
        c: 1
      })
    } else if (e.keyCode === 39 && this.state.side !== 'left') {
      this.setState({
        side: 'right',
        c: 1
      })
    } else if (e.keyCode === 40 && this.state.side !== 'top') {
      this.setState({
        side: 'bottom',
        c: 1
      })
    } }
  }

  render (props) {
    return (
      <canvas
        ref='game'
        class='game'
        onKeyDown={this.pressKey}
        style={{outline: 'none'}}
      ></canvas>
    )
  }
}

export default Game
