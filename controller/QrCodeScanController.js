import { QrCodeScanModal } from "../Module/QrCodeScanModule.js";

// Controller for handling QR code scans
const QrCodeScanController = (req, res) => {
  const { ResourceId } = req.body;
  console.log(ResourceId);

  // Callback function to handle the response from the QrCodeScanModal function
  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with a failure message
    } else {
      // QR code scanned successfully
      console.log(result);
      res.status(200).json(result); // Respond with the results
    }
  };

  // Call the QrCodeScanModal function with the callback
  QrCodeScanModal(
    ResourceId, callback
  );
};  

export default QrCodeScanController;
