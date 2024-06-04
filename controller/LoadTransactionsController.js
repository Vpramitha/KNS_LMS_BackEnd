import { LoadTransactionsModal } from "../Module/LoadTransactionsModule.js"; 

const LoadTransactionsController = (req, res) => {
    
    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error Loading Transactions:", error);
        res.status(200).json({ message: "Error Loading Transactions" });
    } else {
        // Book added successfully
        console.log("Loading Transactions successfully:", result);
        res.status(200).json( result);
    }

};  

LoadTransactionsModal(callback);

};

export default LoadTransactionsController;