import { LoadDamageBooksModal } from "../Module/LoadDamageBooksModule.js";

const LoadDamageBooksController = (req, res) => {
  
  

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Notice added successfully
      console.log("The Damaged books loaded successfully", result);
      res.status(200).json(result);
    }
  };

  LoadDamageBooksModal(
    callback
  );
};  

export default LoadDamageBooksController;