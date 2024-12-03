import { LoadLostBooksModal } from "../Module/LoadLostBooksModule.js";

// Controller for handling the retrieval of lost books
const LoadLostBooksController = (req, res) => {

  // Callback function to handle the response from the LoadLostBooksModal function
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Lost books loaded successfully
      console.log("The Lost books loaded successfully", result);
      res.status(200).json(result); // Respond with the results
    }
  };

  // Call the LoadLostBooksModal function with the callback
  LoadLostBooksModal(callback);
};

export default LoadLostBooksController;
