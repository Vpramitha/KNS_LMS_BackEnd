import { LoadDamageBooksModal } from "../Module/LoadDamageBooksModule.js";

// Controller for handling the retrieval of damaged books
const LoadDamageBooksController = (req, res) => {

  // Callback function to handle the response from the LoadDamageBooksModal function
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Damaged books loaded successfully
      console.log("The Damaged books loaded successfully", result);
      res.status(200).json(result); // Respond with the results
    }
  };

  // Call the LoadDamageBooksModal function with the callback
  LoadDamageBooksModal(callback);
};

export default LoadDamageBooksController;
