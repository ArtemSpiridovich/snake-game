import React from 'react'
import s from './menu.module.sass'

export const Menu = () => {
  
  return (
    <div className={s.menu}>
      <h1 className={s.menu__title}>
        <span style={{'--i': 1}} className={s.title__symbol}>S</span>
        <span style={{'--i': 2}} className={s.title__symbol}>N</span>
        <span style={{'--i': 3}} className={s.title__symbol}>A</span>
        <span style={{'--i': 4}} className={s.title__symbol}>K</span>
        <span style={{'--i': 5}} className={s.title__symbol}>E</span>
        <span className={s.title__space}>{' '}</span>
        <span style={{'--i': 6}} className={s.title__symbol}>G</span>
        <span style={{'--i': 7}} className={s.title__symbol}>A</span>
        <span style={{'--i': 8}} className={s.title__symbol}>M</span>
        <span style={{'--i': 9}} className={s.title__symbol}>E</span>
      </h1>
      <ul className={`${s.menu__items} ${s.border__snake}`}>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <div className={s.menu__items_hover}>
          <li className={s.item}>PLAY</li>
          <li className={s.item}>LEVELS</li>
          <li className={s.item}>SETTING</li>
          <li className={s.item}>ABOUT</li>
        </div>
      </ul>
      <caption className={s.menu__footer}>
        Created by A.Spirydovich
      </caption>
    </div>
  )
}
