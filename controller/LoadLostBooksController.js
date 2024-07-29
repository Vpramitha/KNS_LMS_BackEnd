import { LoadLostBooksModal } from "../Module/LoadLostBooksModule.js";

const LoadLostBooksController = (req, res) => {
  
  

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Notice added successfully
      console.log("The Lost books loaded successfully", result);
      res.status(200).json(result);
    }
  };

  LoadLostBooksModal(
    callback
  );
};  

export default LoadLostBooksController;