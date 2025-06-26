import React, { useEffect } from 'react';
import ExamplePop from '../components/ExamplePop/ExamplePop';
import ChatBotPop from '../components/ChatBotPop/ChatBotPop';
import { useContractContext } from '../context/AuthContext';

const Trialpage = () => {
    //     const {contractTypes, contractSelected, setContractSelected} = useContractContext();
    //     useEffect(() => {
    // //   console.log({ contractSelected });
    //   (contractSelected !== null) ? (console.log(contractTypes[contractSelected])) : console.log("No element")
    // }, [contractSelected]);

    const { jsonData } = useContractContext();

    return (
        <>
            <ExamplePop />
            <ChatBotPop />
            {/* {(contractSelected !== null ) ? (
        <p>{contractTypes[contractSelected]}</p>
        ): (<p>No element</p>)} */}
            <p>{jsonData.processdata['contract-type']}</p>
            {jsonData.processdata.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </>
    );
};

export default Trialpage;
