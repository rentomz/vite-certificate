import CertificateForm from "../components/SertifikatForm";

const HomePage = () => {
	const checkCertificate = async (certificateNumber, companyName) => {
		const certificates = [
			{
				certificateNumber: "12345",
				companyName: "Company A",
				trainingTitle: "React Training",
				uploadDate: "2024-01-01",
			},
			{
				certificateNumber: "67890",
				companyName: "Company B",
				trainingTitle: "Node.js Training",
				uploadDate: "2024-01-02",
			},
		];

		const found = certificates.find(
			(cert) =>
				cert.certificateNumber === certificateNumber &&
				cert.companyName === companyName
		);

		if (found) {
			return { status: "Valid", ...found };
		} else {
			return { status: "Tidak Ditemukan" };
		}
	};

	return (
		<div >
			<h2 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-8">
					Halaman Utama
				</h2>
			<CertificateForm onCheck={checkCertificate} />
		</div>
	);
};

export default HomePage;
