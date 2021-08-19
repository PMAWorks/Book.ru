import { react } from "react"
import s from './Menu.module.css'
import Zag from '../../Assets/Zag.png'
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const CatMenu = () => {

    let [CheckMenuItem, setCheckMenuItem] = useState(0) //Переменная, обозначающая какой раздел открыт в данный момент

    return (
        <div className={s.CatMenu}>
            <div className={s.MenuItem}>
                <NavLink to="/Cat">
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Новинки</div>
                    </div>
                </NavLink>
            </div>
            <div className={s.MenuItem}>
                <div className={s.MenuInsideItem} onClick={() => CheckMenuItem === 1 ? setCheckMenuItem(0) : setCheckMenuItem(1)}>
                    <img src={Zag} className={s.ZagImg}></img>
                    <div>Базовая коллекция</div>
                    <div className={s.Arrow} style={CheckMenuItem === 1 ? { 'transform': 'rotate(270deg)', 'top': '30px', 'left': '-13px' } : { 'transform': 'rotate(90deg)' }}>&gt;</div>
                </div>
                {CheckMenuItem === 1 ? <div>
                    <NavLink to="/Cat/499">
                        <div className={s.MenuInsideItem}>
                            <img src={Zag} className={s.ZagImg}></img>
                            <div>Кнорус</div>
                            <div className={s.Arrow}></div>
                        </div>
                    </NavLink>
                    <NavLink to="/Cat/617">
                        <div className={s.MenuInsideItem}>
                            <img src={Zag} className={s.ZagImg}></img>
                            <div>Юстиция</div>
                            <div className={s.Arrow}></div>
                        </div>
                    </NavLink>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                </div> : null}
            </div>
            <div className={s.MenuItem}>
                <div className={s.MenuInsideItem} onClick={() => CheckMenuItem === 2 ? setCheckMenuItem(0) : setCheckMenuItem(2)}>
                    <img src={Zag} className={s.ZagImg}></img>
                    <div>Школьные учебники</div>
                    <div className={s.Arrow} style={CheckMenuItem === 2 ? { 'transform': 'rotate(270deg)', 'top': '30px', 'left': '-13px' } : { 'transform': 'rotate(90deg)' }}>&gt;</div>
                </div>
                {CheckMenuItem === 2 ? <div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                </div> : null}
            </div>
            <div className={s.MenuItem}>
                <div className={s.MenuInsideItem} onClick={() => CheckMenuItem === 3 ? setCheckMenuItem(0) : setCheckMenuItem(3)}>
                    <img src={Zag} className={s.ZagImg}></img>
                    <div>Тематические коллекции</div>
                    <div className={s.Arrow} style={CheckMenuItem === 3 ? { 'transform': 'rotate(270deg)', 'top': '30px', 'left': '-13px' } : { 'transform': 'rotate(90deg)' }}>&gt;</div>
                </div>
                {CheckMenuItem === 3 ? <div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                </div> : null}
            </div>
            <div className={s.MenuItem}>
                <div className={s.MenuInsideItem} onClick={() => CheckMenuItem === 4 ? setCheckMenuItem(0) : setCheckMenuItem(4)}>
                    <img src={Zag} className={s.ZagImg}></img>
                    <div>Коллекции партнёров</div>
                    <div className={s.Arrow} style={CheckMenuItem === 4 ? { 'transform': 'rotate(270deg)', 'top': '30px', 'left': '-13px' } : { 'transform': 'rotate(90deg)' }}>&gt;</div>
                </div>
                {CheckMenuItem === 4 ? <div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                </div> : null}
            </div>
            <div className={s.MenuItem}>
                <div className={s.MenuInsideItem} onClick={() => CheckMenuItem === 5 ? setCheckMenuItem(0) : setCheckMenuItem(5)}>
                    <img src={Zag} className={s.ZagImg}></img>
                    <div>Читать бесплатно</div>
                    <div className={s.Arrow} style={CheckMenuItem === 1 ? { 'transform': 'rotate(270deg)', 'top': '30px', 'left': '-13px' } : { 'transform': 'rotate(90deg)' }}>&gt;</div>
                </div>
                {CheckMenuItem === 5 ? <div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                    <div className={s.MenuInsideItem}>
                        <img src={Zag} className={s.ZagImg}></img>
                        <div>Раздел не сделан</div>
                        <div className={s.Arrow}></div>
                    </div>
                </div> : null}
            </div>
        </div>
    )
}