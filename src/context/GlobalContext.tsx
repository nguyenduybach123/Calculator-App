
import React from 'react'

type GlobalContextType = {
    expressionString: string,
    setExpressionString: React.Dispatch<React.SetStateAction<string>>,
    resultExpression: number,
    setResultExpression: React.Dispatch<React.SetStateAction<number>>,
    historyExpression: Array<string>, 
    setHistoryExpression: React.Dispatch<React.SetStateAction<Array<string>>>,
    isOpenHistory: boolean,
    setIsOpenHistory: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = React.createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
};

export const GlobalProvider = ({children}) => {
    const [expressionString, setExpressionString] = React.useState<string>("");
    const [resultExpression, setResultExpression] = React.useState<number>(NaN);
    const [historyExpression, setHistoryExpression] = React.useState<Array<string>>([]);
    const [isOpenHistory, setIsOpenHistory] = React.useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{
                                    expressionString, setExpressionString,
                                    resultExpression, setResultExpression,
                                    historyExpression, setHistoryExpression,
                                    isOpenHistory, setIsOpenHistory
                                }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default useGlobalContext;