import React, { createContext, useState, useContext, ReactNode } from 'react';
import data from '../../data/data.json';

// interface ContractContextType {
//   contractSelected: number | null;
//   setContractSelected: (index: number | null) => void;
//   contractTypes: string[];
// }

interface Ifield {
    label: string;
    value: string;
    aiflag: boolean;
}

interface TableRow {
  fields: Ifield[];
}

interface jsonDataType {
    processdata: {
        'contract-type': string;
        tags: string[];
    };
    formsections: Ifield[];
    tablerows : TableRow[];
}

interface ContractContextType {
    jsonData: jsonDataType;
    setJsonData: React.Dispatch<React.SetStateAction<jsonDataType>>;
}

const ContractContext = createContext<ContractContextType | undefined>(undefined);
interface ContractProviderProps {
    children: ReactNode;
}

// ✅ JSX.Element works if @types/react is installed and tsconfig is set up
export const ContractProvider = ({ children }: ContractProviderProps): React.JSX.Element => {
    const [jsonData, setJsonData] = useState<jsonDataType>(data);

    return (
        <ContractContext.Provider value={{ jsonData, setJsonData }}>
            {children}
        </ContractContext.Provider>
    );
};

export const useContractContext = () => {
    const context = useContext(ContractContext);
    if (!context) throw new Error('useContractContext must be used within a ContractProvider');
    return context;
};
