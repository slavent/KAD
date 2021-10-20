import React from "react"
import "./style.scss"

const CopyRights = () =>
    <div className="copy">
        Учитель начальных классов<br/>
        Корлотяну Алла Дмитриевна. { new Date().getFullYear() }<br/>
        При копировании ссылка на источник обязательна.
    </div>

export default CopyRights