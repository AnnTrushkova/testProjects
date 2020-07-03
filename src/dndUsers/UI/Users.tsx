import React from 'react'
import s from './users.module.css'
import MoveElement from "./MoveElement"
import {IUsers} from "../BLL/usersReducer"

const ADMINS = 'admins'
const USERS = 'users'

interface IProps {
    users: IUsers
    admins: IUsers
    userMoving: Function
    adminMoving: Function
}

let Users = (props: IProps) => {

    let {users, admins, userMoving, adminMoving} = props


    let onDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }
    let onDragStart = (e: any) => {
        e.dataTransfer.setData("userId", e.target.dataset.id)
    }
    let onDrop = (e: any) => {
        e.preventDefault()

        let userId: string= e.dataTransfer.getData("userId")

        switch (e.currentTarget.dataset.id) {
            case ADMINS:
                return userId in users && userMoving(userId)
            case USERS:
                return userId in admins && adminMoving(userId)
            default:
        }
    }

    return (
        <div className={s.container}>
            <MoveElement objects={users} dataId={USERS} onDrop={onDrop} onDragOver={onDragOver}
                         onDragStart={onDragStart}/>
            <MoveElement objects={admins} dataId={ADMINS} onDrop={onDrop} onDragOver={onDragOver}
                         onDragStart={onDragStart}/>
        </div>
    )
}

export default Users