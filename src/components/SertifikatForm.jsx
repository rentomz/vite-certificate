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
			{results.length > 0 && (
				<div className="mt-6">
					<h3 className="text-lg font-bold text-gray-800 mb-4">
						Daftar Sertifikat:
					</h3>
					<ul className="space-y-4">
						{results.map((cert, index) => (
							<li
								key={index}
								className="p-4 border border-gray-300 rounded-md bg-gray-50"
							>
								<p>
									<strong>Nomor Sertifikat:</strong> {cert.nomorSertifikat}
								</p>
								<p>
									<strong>Nama Perusahaan:</strong> {cert.namaPerusahaan}
								</p>
								<p>
									<strong>Judul Training:</strong> {cert.judulTraining}
								</p>
								<p>
									<strong>Tanggal Upload:</strong> {cert.tanggalUpload}
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SertifikatForm;
