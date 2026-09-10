const express = require('express');
const path = require('path');
const app = express();

// Menyediakan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk Halaman Admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Route Utama (Undangan)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});