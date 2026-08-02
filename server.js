const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/pay-vodafone', (req, res) => {
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

// تظبيط الخروج ليتوافق مع نظام Vercel
module.exports = app;
