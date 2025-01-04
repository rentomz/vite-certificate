import { useState } from "react";

const SertifikatForm = ({ onCheck }) => {
	const [certificateNumber, setCertificateNumber] = useState("");
	// const [companyName, setCompanyName] = useState("");
	// const [trainingTitle, setTrainingTitle] = useState("");
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
				{/* <input
					type="text"
					placeholder="Nama Perusahaan"
					required
					value={companyName}
					onChange={(e) => setCompanyName(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					type="text"
					placeholder="Judul Training"
					value={trainingTitle}
					onChange={(e) => setTrainingTitle(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/> */}
				<button
					type="submit"
					className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Cek Sertifikat
				</button>
			</form>

			{result && (
				<div className="mt-6">
					<p className="font-semibold text-lg">
						Status Sertifikat: {result.status}
					</p>
					{result.status === "Valid" && (
						<div className="space-y-2 mt-4">
							<p>Nomor Sertifikat: {result.nomorSertifikat}</p>
							<p>Nama Perusahaan: {result.nomorSertifikat}</p>
							<p>Judul Training: {result.nomorSertifikat}</p>
							<p>Tanggal Upload: {result.nomorSertifikat}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default SertifikatForm;
