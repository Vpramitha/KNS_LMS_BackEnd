
import { ReturnTransactionModal } from "../Module/ReturnTransactionModule.js"; 

const ReturnTransactionController = (req, res) => {
    const { AdminId, TransactionId, CurrentDate, } = req.body;
    console.log(AdminId, TransactionId, CurrentDate,);

    
    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error return book:", error);
        res.status(200).json({ message: "Book return fail" });
    } else {
        // Book added successfully
        console.log("Book returned successfully:", result);
        res.status(200).json({ message: "Book returned successfully" });
    }

};


ReturnTransactionModal(AdminId, TransactionId, CurrentDate, callback);

};

export default ReturnTransactionController; 