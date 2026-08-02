module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { phoneNumber, amount, invoiceId } = req.body || {};
    return res.status(200).json({
      success: true,
      message: "تم إرسال طلب الدفع لمحفظتك بنجاح",
      invoiceId: invoiceId || "123"
    });
  }
  
  return res.status(200).json({ 
    status: "Server is running successfully" 
  });
};
