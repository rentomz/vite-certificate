import CertificateForm from "../components/SertifikatForm";

const HomePage = () => {
	const checkCertificate = async (certificateNumber) => {
		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/sertifikat?nomorSertifikat=${encodeURIComponent(certificateNumber)}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				setStatusMessage("Error: Unable to fetch data");
				return;
			}

			const data = await response.json();
			if (data.nomorSertifikat !== null) {
				setStatusMessage(
					`Certificate Valid: ${data.nomorSertifikat} - ${data.nomorSertifikat}`
				);
			} else {
				setStatusMessage("Certificate Not Found");
			}
		} catch (error) {
			setStatusMessage("An error occurred while fetching the data");
			console.error("Error fetching certificate:", error);
		}
	};

	return (
		<div>
			<h2 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-8">
				Halaman Utama
			</h2>
			<CertificateForm onCheck={checkCertificate} />
		</div>
	);
};

export default HomePage;
