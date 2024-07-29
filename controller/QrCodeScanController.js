import { QrCodeScanModal } from "../Module/QrCodeScanModule.js";

const QrCodeScanController = (req, res) => {
  const {ResourceId} = req.body;
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

  QrCodeScanModal(
    ResourceId, callback
  );
};  

export default QrCodeScanController;
