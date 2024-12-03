import { LoadTransactionsModal } from "../Module/LoadTransactionsModule.js"; 

// Controller for handling the retrieval of transactions
const LoadTransactionsController = (req, res) => {
    
    // Callback function to handle the response from the LoadTransactionsModal function
    const callback = (error, result) => {
        if (error) {
            // Handle error case
            console.error("Error Loading Transactions:", error);
            res.status(200).json({ message: "Error Loading Transactions" }); // Respond with a failure message
        } else {
            // Transactions loaded successfully
            console.log("Loading Transactions successfully:", result);
            res.status(200).json(result); // Respond with the results
        }
    };  

    // Call the LoadTransactionsModal function with the callback
    LoadTransactionsModal(callback);
};

export default LoadTransactionsController;
