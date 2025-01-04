import { useContext, useState } from "react";
import { AdminContext } from "../context/adminContext";
import LoginPage from "./LoginPage";
import Cookies from "js-cookie";

const AdminPage = () => {
	const { isAdmin, login } = useContext(AdminContext);
	const [certificates, setCertificates] = useState([]);
	const [loginError, setLoginError] = useState(false);
	const [file, setFile] = useState(null);

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
	};

	const handleAddCertificate = (e) => {
		e.preventDefault();
		const form = e.target;
		const certificate = {
			certificateNumber: form.certificateNumber.value,
			companyName: form.companyName.value,
			trainingTitle: form.trainingTitle.value,
			uploadDate: form.uploadDate.value,
		};
		setCertificates([...certificates, certificate]);
	};

	const handleDeleteCertificate = (index) => {
		const newCertificates = certificates.filter((_, i) => i !== index);
		setCertificates(newCertificates);
	};

	const handleLogin = (e, username, password) => {
		e.preventDefault();
		if (username === "admin" && password === "password123") {
			setLoginError(false);
			login();
		} else {
			setLoginError(true);
		}
	};

	return isAdmin ? (
		<div className="p-4 space-y-6">
			<h1 className="text-2xl font-bold">Admin Page</h1>

			<h2 className="text-xl font-semibold">Upload Sertifikat</h2>
			<input
				type="file"
				onChange={handleFileUpload}
				className="block mb-4 text-sm text-gray-500 border border-gray-300 rounded-md"
			/>

			<form onSubmit={handleAddCertificate} className="space-y-4">
				<input
					type="text"
					name="certificateNumber"
					placeholder="Nomor Sertifikat"
					required
					className="w-full p-2 text-gray-700 border border-gray-300 rounded-md"
				/>
				<input
					type="text"
					name="companyName"
					placeholder="Nama Perusahaan"
					required
					className="w-full p-2 text-gray-700 border border-gray-300 rounded-md"
				/>
				<input
					type="text"
					name="trainingTitle"
					placeholder="Judul Training"
					className="w-full p-2 text-gray-700 border border-gray-300 rounded-md"
				/>
				<input
					type="date"
					name="uploadDate"
					required
					className="w-full p-2 text-gray-700 border border-gray-300 rounded-md"
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
				>
					Tambah Sertifikat
				</button>
			</form>

			<h2 className="text-xl font-semibold">Data Sertifikat</h2>
			<table className="w-full table-auto border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						<th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
							Nomor Sertifikat
						</th>
						<th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
							Nama Perusahaan
						</th>
						<th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
							Judul Training
						</th>
						<th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
							Tanggal Upload
						</th>
						<th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{certificates.map((cert, index) => (
						<tr key={index} className="border-b border-gray-200">
							<td className="py-2 px-4 text-sm text-gray-700">
								{cert.certificateNumber}
							</td>
							<td className="py-2 px-4 text-sm text-gray-700">
								{cert.companyName}
							</td>
							<td className="py-2 px-4 text-sm text-gray-700">
								{cert.trainingTitle}
							</td>
							<td className="py-2 px-4 text-sm text-gray-700">
								{cert.uploadDate}
							</td>
							<td className="py-2 px-4 text-sm">
								<button
									onClick={() => handleDeleteCertificate(index)}
									className="text-red-500 hover:text-red-700 focus:outline-none"
								>
									Hapus
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	) : (
		<LoginPage handleLogin={handleLogin} loginError={loginError} />
	);
};

export default AdminPage;
