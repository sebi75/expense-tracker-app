import { createContext, useState } from "react"

interface SideStateContextInterface {
    isConfirmModalOpen: boolean
    setIsConfirmModalOpen: (p: boolean) => void
    setTransactionToBeDeletedId: (p: string) => void
    transactionToBeDeletedId: string
}

export const SideStateContext = createContext<SideStateContextInterface>(
    {} as SideStateContextInterface
)

export const LayerProvider: React.FC = ({ children }) => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
    const [transactionToBeDeletedId, setTransactionToBeDeletedId] =
        useState<string>("")

    const SideStateContextSample: SideStateContextInterface = {
        setIsConfirmModalOpen,
        isConfirmModalOpen,
        setTransactionToBeDeletedId,
        transactionToBeDeletedId,
    }
    return (
        <SideStateContext.Provider value={SideStateContextSample}>
            {children}
        </SideStateContext.Provider>
    )
}
