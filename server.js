const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/pay-vodafone', async (req, res) => {
    const { phoneNumber, amount, invoiceId } = req.body;
    res.status(200).json({
        success: true,
        message: "تم إرسال طلب الدفع لمحفظتك",
        invoiceId: invoiceId
    });
});

app.post('/api/payment-webhook', (req, res) => {
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
