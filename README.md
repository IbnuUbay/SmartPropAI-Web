# SmartPropAI

> Aplikasi web untuk membantu Anda menemukan properti sewa berikutnya.
## Fitur

Berikut beberapa fitur yang dimiliki SmartPropAI:

- [x] Autentikasi pengguna dengan Google & Next Auth
- [x] Otorisasi pengguna
- [x] Perlindungan rute
- [x] Profil pengguna dengan daftar properti pengguna
- [x] CRUD Daftar Properti
- [x] Unggah gambar properti (Multiple)
- [x] Pencarian properti
- [x] Pesan internal dengan notifikasi 'belum dibaca'
- [x] Galeri gambar Photoswipe
- [x] Peta Mapbox
- [x] Notifikasi Toast
- [x] Penandaan properti / properti yang disimpan
- [x] Berbagi properti ke media sosial
- [x] Pemintal loading
- [x] Desain responsif (Tailwind)
- [x] Halaman 404 khusus

SmartPropAI menggunakan teknologi berikut:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Photoswipe](https://photoswipe.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React Geocode](https://www.npmjs.com/package/react-geocode)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://www.npmjs.com/package/react-share)

## Memulai

### Prasyarat

- Node.js versi 18 atau lebih tinggi
- Akun MongoDB Atlas dan kluster. Daftar dan buat kluster di [MongoDB](https://www.mongodb.com/)
- Akun Cloudinary. Daftar di [Cloudinary](https://cloudinary.com/)
- Akun Google console. Daftar di [Google Cloud](https://console.cloud.google.com/)
- Akun Mapbox. Daftar di [Mapbox](https://www.mapbox.com/)

### File `.env`

Ganti nama file `env.example` menjadi `.env` dan isi variabel lingkungan berikut:

- Dapatkan string koneksi MongoDB Anda dari kluster MongoDB Atlas Anda dan tambahkan ke `MONGODB_URI`.
- Dapatkan ID klien Google dan rahasia dari akun Google console Anda dan tambahkan ke `GOOGLE_CLIENT_ID` dan `GOOGLE_CLIENT_SECRET`.
- Tambahkan rahasia ke `NEXTAUTH_SECRET`. Anda dapat menghasilkan dengan perintah berikut:
  ```bash
  openssl rand -base64 32
