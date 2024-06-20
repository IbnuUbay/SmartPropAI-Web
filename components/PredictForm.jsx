'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { FaCamera } from 'react-icons/fa';

const PredictForm = () => {
  const [bed, setBed] = useState(0);
  const [bath, setBath] = useState(0);
  const [sqft, setSqft] = useState(0);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('bed', bed);
    formData.append('bath', bath);
    formData.append('sqft', sqft);
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict-house-price', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setPredictedPrice(response.data.predicted_price);
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Gagal mengirim data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kamar Tidur
          </label>
          <input
            type="number"
            value={bed}
            onChange={(e) => setBed(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kamar Mandi
          </label>
          <input
            type="number"
            value={bath}
            onChange={(e) => setBath(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Luas Area (Meter Persegi)
          </label>
          <input
            type="number"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gambar
          </label>
          <div className="flex items-center justify-center">
            <FaCamera
              className="text-gray-500 text-3xl cursor-pointer"
              onClick={handleIconClick}
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {fileName && (
            <p className="text-gray-600 text-sm mt-2 text-center">{fileName}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Mengirim...' : 'Prediksi Harga'}
          </button>
        </div>
      </form>
      {predictedPrice && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Estimasi Harga Rumah:</strong>
          <span className="block sm:inline"> {predictedPrice}</span>
        </div>
      )}
    </div>
  );
};

export default PredictForm;
