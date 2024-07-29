import { DamageBookModal } from "../Module/DamageBookModule.js";

const DamageBookController = (req, res) => {
  const {ResourceId,Damage,AdminId,Date} = req.body;
  console.log(ResourceId);

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Notice added successfully
      console.log(result);
      res.status(200).json(result);
    }
  };

  DamageBookModal(
    ResourceId,Damage,AdminId,Date,callback
  );
};  

export default DamageBookController;
