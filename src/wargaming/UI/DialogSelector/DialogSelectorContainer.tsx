import React from 'react'
import DialogSelector from "./DialogSelector"
import {connect} from "react-redux"
import {
    openCloseDialogSelector,
    setFilter,
    setSearch, setSelectElements,
} from "../../BLL/mainPageReducer"
import {elementsSelector, filterSelector, searchSelector, selectElementsSelector} from "./dialogSelectors"

interface IProps {
    selectElements: any,
    items: string[],
    search: any,
    filter: any,
    setSelectElements: Function,
    setSearch: Function,
    setFilter: Function,
    openCloseDialogSelector: any,
}

class DialogSelectorContainer extends React.Component<IProps> {

    state: any = {}

    constructor(props: any) {
        super(props)
        this.state = {
            selectElements: this.props.selectElements,
        }
    }

    setSelectElement = (selectElementId: any) => {
        let newSelectElements = {...this.state.selectElements}
        newSelectElements[selectElementId] = this.props.items[selectElementId]
        this.setState({selectElements: newSelectElements})
    }

    setUnSelectElement = (id: any) => {
        let newSelectElements = {...this.state.selectElements}
        delete newSelectElements[id]
        this.setState({selectElements: newSelectElements})
    }

    onSaveSelectElements = () => {
        this.props.setSelectElements(this.state.selectElements)
    }


    render() {
        return <DialogSelector selectElements={this.state.selectElements}
                               closeDialogSelector={this.props.openCloseDialogSelector}
                               items={this.props.items}
                               setSelectElement={this.setSelectElement}
                               setUnSelectElement={this.setUnSelectElement}
                               onSaveSelectElements={this.onSaveSelectElements}
                               search={this.props.search}
                               filter={this.props.filter}
                               setChangeSearch={this.props.setSearch}
                               setChangeFilter={this.props.setFilter}
        />
    }
}

let mapStateToProps = (state: any) => {
    return {
        selectElements: selectElementsSelector(state),
        items: elementsSelector(state),
        search: searchSelector(state),
        filter: filterSelector(state),
    }
}


export default connect(mapStateToProps, {
    openCloseDialogSelector,
    setSelectElements,
    setSearch,
    setFilter
})(DialogSelectorContainer)

