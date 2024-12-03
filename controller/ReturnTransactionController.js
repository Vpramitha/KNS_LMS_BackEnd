import { ReturnTransactionModal } from "../Module/ReturnTransactionModule.js"; 

// Controller for handling return transactions
const ReturnTransactionController = (req, res) => {
    const { AdminId, TransactionId, CurrentDate } = req.body;
    console.log(AdminId, TransactionId, CurrentDate);

    // Callback function to handle the response from the ReturnTransactionModal function
    const callback = (error, result) => {
        if (error) {
            // Handle error
            console.error("Error return book:", error);
            res.status(200).json({ message: "Book return fail" }); // Respond with a failure message
        } else {
            // Book returned successfully
            console.log("Book returned successfully:", result);
            res.status(200).json({ message: "Book returned successfully" }); // Respond with success message
        }
    };

    // Call the ReturnTransactionModal function with the callback
    ReturnTransactionModal(AdminId, TransactionId, CurrentDate, callback);
};

export default ReturnTransactionController;
