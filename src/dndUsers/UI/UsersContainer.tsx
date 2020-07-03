import {connect} from "react-redux"
import Users from "./Users"
import {userMoving, adminMoving, IState} from "../BLL/usersReducer"
import {adminsSelector, usersSelector} from "../BLL/selectors"



let mapStateToProps = (state: IState) => {
    return ({
        users: usersSelector(state),
        admins: adminsSelector(state),
    })
}

export default connect(mapStateToProps, {userMoving, adminMoving})(Users)