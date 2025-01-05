import { useState } from "react";

const SertifikatForm = ({ onCheck, statusMessage }) => {
    const [certificateNumber, setCertificateNumber] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await onCheck(certificateNumber);
        setResult(data);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nomor Sertifikat"
                    required
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Cek Sertifikat
                </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
                <div className="mt-4 text-center text-gray-600">{statusMessage}</div>
            )}

            {/* Result Display */}
            {result && (
                <div className="mt-6 space-y-2">
                    <p><strong>Nomor Sertifikat:</strong> {result.nomorSertifikat}</p>
                    <p><strong>Nama Perusahaan:</strong> {result.namaPerusahaan}</p>
                    <p><strong>Judul Training:</strong> {result.judulTraining}</p>
                    <p><strong>Tanggal Upload:</strong> {result.tanggalUpload}</p>
                </div>
            )}
        </div>
    );
};

export default SertifikatForm;
