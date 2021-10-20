import React from "react"
import Box from "../../components/Box/Box";
import "./style.scss"

const Scheduler = () => {
    return (
        <Box>
            <div className="table table-lessons">
                <div className="table__row">
                    <div className="table__col"/>
                    <div className="table__col"><b>Звонок</b></div>
                    <div className="table__col"><b>Понедельник</b></div>
                    <div className="table__col"><b>Вторник</b></div>
                    <div className="table__col"><b>Среда</b></div>
                    <div className="table__col"><b>Четверг</b></div>
                    <div className="table__col"><b>Пятница</b></div>
                </div>
                <div className="table__row">
                    <div className="table__col">1</div>
                    <div className="table__col">8:30-9:15</div>
                    <div className="table__col">Литература</div>
                    <div className="table__col">Математика</div>
                    <div className="table__col">Русский язык</div>
                    <div className="table__col">Род. язык</div>
                    <div className="table__col">Математика</div>
                </div>
                <div className="table__row">
                    <div className="table__col">2</div>
                    <div className="table__col">9:25-10:10</div>
                    <div className="table__col">Русский язык</div>
                    <div className="table__col">Русский язык</div>
                    <div className="table__col">Математика</div>
                    <div className="table__col">Математика</div>
                    <div className="table__col">Физ-ра</div>
                </div>
                <div className="table__row">
                    <div className="table__col">3</div>
                    <div className="table__col">10:25-11:10</div>
                    <div className="table__col">Окр. мир</div>
                    <div className="table__col">Литература</div>
                    <div className="table__col">Литература</div>
                    <div className="table__col">Музыка</div>
                    <div className="table__col">Русский язык</div>
                </div>
                <div className="table__row">
                    <div className="table__col">4</div>
                    <div className="table__col">11:30-12:15</div>
                    <div className="table__col">Англ. яз.</div>
                    <div className="table__col">Физ-ра</div>
                    <div className="table__col">Ритмика</div>
                    <div className="table__col">Окр. мир</div>
                    <div className="table__col">Литература</div>
                </div>
                <div className="table__row">
                    <div className="table__col">5</div>
                    <div className="table__col">12:30-13:15</div>
                    <div className="table__col">Технология</div>
                    <div className="table__col"/>
                    <div className="table__col">ИЗО</div>
                    <div className="table__col">Англ.яз</div>
                    <div className="table__col"/>
                </div>
                <div className="table__row">
                    <div className="table__col">6</div>
                    <div className="table__col">Внеурочная деятельность</div>
                    <div className="table__col">Умники и умницы<br/>13:40-14:30</div>
                    <div className="table__col">Школа разв-ия речи<br/>12:40-14:00</div>
                    <div className="table__col">Познай себя<br/>13:40-14:30</div>
                    <div className="table__col">Подвижные игры<br/>13:40-14:30</div>
                    <div className="table__col">Край родной (экскурсии)</div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="table table-dinner">
                <div className="table__row">
                    <div className="table__col"/>
                    <div className="table__col"><b>4 урока</b></div>
                    <div className="table__col"><b>5 уроков</b></div>
                </div>
                <div className="table__row">
                    <div className="table__col"><b>завтрак</b></div>
                    <div className="table__col">9:15-9:25</div>
                    <div className="table__col">9:15-9:25</div>
                </div>
                <div className="table__row">
                    <div className="table__col"><b>обед</b></div>
                    <div className="table__col">12:15-12:35</div>
                    <div className="table__col">13:15-13:35</div>
                </div>
            </div>
        </Box>
    )
}

export default Scheduler