
import React from 'react'

type GlobalContextType = {
    expressionArray: Array<string | number>,
    setExpressionArray: React.Dispatch<React.SetStateAction<Array<string | number>>>,
    cursorPos: CursorType,
    setCursorPos: React.Dispatch<React.SetStateAction<CursorType>>,
}

type CursorType = number


const GlobalContext = React.createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
};

export const GlobalProvider = ({children}) => {

    const [expressionArray, setExpressionArray] = React.useState<Array<string | number>>([]);
    const [cursorPos, setCursorPos] = React.useState<CursorType>(0);

    return (
        <GlobalContext.Provider value={{
                                    expressionArray, setExpressionArray,
                                    cursorPos, setCursorPos
                                }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
