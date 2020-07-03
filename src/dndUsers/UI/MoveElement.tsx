import React, {DragEvent} from 'react'
import s from "./users.module.css"
import {IUsers} from "../BLL/usersReducer"

interface IProps {
    objects: IUsers
    dataId: string
    onDragOver: (e: DragEvent<HTMLDivElement>) => void
    onDragStart: (e: DragEvent<HTMLDivElement>) => void
    onDrop: (e: DragEvent<HTMLDivElement>) => void
}

let MoveElement = ({objects, dataId, onDrop, onDragStart, onDragOver}: IProps) => {

    return <div data-id={dataId} className={s[dataId]} onDrop={onDrop} onDragOver={onDragOver}>
        <h2>{dataId.toUpperCase()}</h2>
        {Object.keys(objects).map((obj: string) =>
            <span draggable onDragStart={onDragStart} data-id={objects[obj].userId}
                  key={objects[obj].userId}>{objects[obj].fullName}</span>)}
    </div>
}

export default MoveElement