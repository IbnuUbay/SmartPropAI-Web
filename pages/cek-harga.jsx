'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PredictForm from '../components/PredictForm';
import '../assets/styles/globals.css'; // Asumsi menggunakan styling yang sama

const CekHarga = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 mb-10 p-4">
        <h1 className="text-xl font-bold text-center mb-4">Cek Harga Properti</h1>
        <div className="flex justify-center">
          <PredictForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CekHarga;
