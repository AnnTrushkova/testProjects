import React from "react"
import {connect} from "react-redux"
import {delResult, setResult} from "../BLL/calcReducer"
import Calc from "./Calc"


interface IProps {
    setResult: Function
    delResult: Function
    resultAll: number[]
    elementsButton: string[]
}

interface IState {
    resultText: string
    result: string
}

class CalcContainer extends React.Component<IProps, IState> {

    state = {
        resultText: '',
        result: '',
    }


    onClickButton = (value: string) => {
        if (value === '=') {
            if (this.state.result !== '') {
                this.setState({result: JSON.stringify(eval(this.state.resultText + this.state.result))})
                this.setState({resultText: ''})
            }
        } else if (Number(value) || value === '.') {
            this.setState({result: this.state.result + value})
        } else {
            this.setState({resultText: this.state.resultText + this.state.result + value})
            this.setState({result: ''})
        }
    }

    a = 2
    b = 3
    c = '+'

    render() {
        return <Calc {...this.props}
                     onClickButton={this.onClickButton}
                     resultText={this.state.resultText}
                     result={this.state.result}
        />
    }
}

let mapStateToProps = (state: any) => {
    return {
        resultAll: state.calc.resultAll,
        elementsButton: state.calc.elementsButton,
    }
}

export default connect(mapStateToProps, {setResult, delResult})(CalcContainer)