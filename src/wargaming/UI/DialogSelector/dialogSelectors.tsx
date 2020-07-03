export const selectElementsSelector = (state: any): any => state.mainPage.selectElements
export const searchSelector = (state: any): any => state.mainPage.search
export const filterSelector = (state: any): any => state.mainPage.filter
export const elementsSelector = (state: any): any => {
    let newElements = { ...state.mainPage.items }
    let elements: any = {}
    if (state.mainPage.search) {
        Object.keys(newElements).map(key => {
            if (newElements[Number(key)].item.indexOf(state.mainPage.search) > -1) {
                elements[key] = newElements[key]
            }
        })
        newElements = elements
    }

    if (state.mainPage.filter) {
        Object.keys(newElements).map(key => {
            if (Number(key) > state.mainPage.filter) {
                elements[Number(key)] = newElements[key]
            }
        })
        newElements = elements
        debugger
    }

    return newElements
}