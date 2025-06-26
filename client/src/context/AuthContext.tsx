import React, { createContext, useState, useContext, ReactNode } from "react";

interface ContractContextType {
  contractSelected: number | null;
  setContractSelected: (index: number | null) => void;
  contractTypes: string[];
}

const ContractContext = createContext<ContractContextType | undefined>(undefined);

interface ContractProviderProps {
  children: ReactNode;
}

// ✅ JSX.Element works if @types/react is installed and tsconfig is set up
export const ContractProvider = ({ children }: ContractProviderProps): React.JSX.Element => {
  const [contractSelected, setContractSelected] = useState<number | null>(null);
  const contractTypes = ["Vendor & Sales Contracts", "Lease Contracts", "NDAs", "Employment Contracts"];
  

  return (
    <ContractContext.Provider value={{ contractSelected, setContractSelected, contractTypes }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => {
  const context = useContext(ContractContext);
  if (!context) throw new Error("useContractContext must be used within a ContractProvider");
  return context;
};
