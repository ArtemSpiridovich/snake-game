import React, {useState} from 'react'
import s from './menu.module.sass'

export const Menu = () => {

    const [borderOn, ToggleBorderOn] = useState(true)
    const [borderItemOn, ToggleBorderItemOn] = useState(false)

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
            <div className={s.border}>
                {
                    borderOn &&
                    (
                        <>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </>
                    )
                }
                <ul className={s.menu__items}>
                    <li className={`${s.item} ${s.border_snake}`}>PLAY</li>
                    <li className={`${s.item} ${s.border_snake}`}>LEVELS</li>
                    <li className={`${s.item} ${s.border_snake}`}>SETTING</li>
                    <li className={`${s.item} ${s.border_snake}`}>ABOUT</li>
                    {
                        borderItemOn &&
                        (
                            <>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                            </>
                        )
                    }
                </ul>
            </div>
            <footer className={s.menu__footer}>
                Created by A.Spirydovich
            </footer>
        </div>
    )
}
