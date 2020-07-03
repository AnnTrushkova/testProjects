import React from 'react'
import WarGaming from "./WarGaming"
import { connect } from "react-redux"
import { dialogSelectorShowSelector } from "./warGamingSelector"
import { elementsCreate } from "../BLL/mainPageReducer"


interface IProps {
    dialogSelectorShow: any,
    elementsCreate: Function,
}


class WarGamingContainer extends React.Component<IProps> {

    componentDidMount() {
        this.props.elementsCreate()
    }

    render() {
        return <WarGaming dialogSelectorShowHide={this.props.dialogSelectorShow} />
    }
}
let mapSateToProps = (state: any) => {
    return {
        dialogSelectorShow: dialogSelectorShowSelector(state),
    }
}


export default connect(mapSateToProps, { elementsCreate })(WarGamingContainer)