import react from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './TopMemu.module.css'

export const TopMenu = () => {

    var [url, setUrl] = useState('') //Объявление URL для отображения пользователю в меню

    if (url != document.URL.split('/')[3]) {
        setUrl(document.URL.split('/')[3])
    }

    let [style, setStyle] = useState({ //Динамическое изменение рамки input в зависимости от его value
        'border': '1px solid gray',
    })

    return (
        <div className={s.TopMenu}>
            <div className={s.TopMenuContainer}>
                <div className={s.PagesRef}>
                    <NavLink to="/"><div className={s.MenuItem} onClick={() => setUrl('')}>Книги{url == '' ? <div className={s.Podch}></div> : null}</div></NavLink>
                    <NavLink to="/AudioBooks"><div className={s.MenuItem} onClick={() => setUrl('AudioBooks')}>Аудиокниги {url == 'AudioBooks' ? <div className={s.Podch}></div> : null}</div></NavLink>
                    <NavLink to="/Magazines"><div className={s.MenuItem} onClick={() => setUrl('Magazines')}>Журналы {url == 'Magazines' ? <div className={s.Podch}></div> : null}</div></NavLink>
                </div>
                <div className={s.RightMenu}>
                    <input className={s.TopInput} placeholder="Поиск в электронной библиотеке" id="TopInput" onChange={(e) => {
                        if (!e.target.value) {
                            setStyle({
                                'border': '1px solid red',
                            })
                        } else {
                            setStyle({
                                'border': '1px solid blue',
                            })
                        }
                    }} onBlur={() => {
                        setTimeout(()=>document.getElementById('TopInput').value = '', 2000)
                        setStyle({
                            'border': '1px solid gray',
                        })
                    }} style={style}></input>
                    <div className={s.SearchButton} onClick={() => {
                        if (document.getElementById('TopInput').value) {
                            alert('Запрос отправился на сервер...')
                        }
                        else {
                            setStyle({
                                'border': '1px solid red',
                            })
                            setTimeout(() => setStyle({
                                'border': '1px solid gray',
                            }), 2000)
                        }
                    }}>&raquo;</div>
                </div>
            </div>
        </div>
    )
}