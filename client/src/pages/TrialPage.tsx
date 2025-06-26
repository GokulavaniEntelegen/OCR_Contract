import React, { useEffect } from "react";
import ExamplePop from "../components/ExamplePop/ExamplePop";
import ChatBotPop from "../components/ChatBotPop/ChatBotPop";
import { useContractContext } from "../context/AuthContext";

const Trialpage = () => {

    const {contractTypes, contractSelected, setContractSelected} = useContractContext();
    useEffect(() => {
//   console.log({ contractSelected });
  (contractSelected !== null) ? (console.log(contractTypes[contractSelected])) : console.log("No element")
}, [contractSelected]);

    return(
        <>
        <ExamplePop/>
        <ChatBotPop/>
        {(contractSelected !== null ) ? (
        <p>{contractTypes[contractSelected]}</p>
        ): (<p>No element</p>)}
        </>
    );
}

export default Trialpage;