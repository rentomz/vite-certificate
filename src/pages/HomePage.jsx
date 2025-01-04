import CertificateForm from "../components/SertifikatForm";

const HomePage = () => {
	const checkCertificate = async (certificateNumber, companyName) => {
		try {
			// Construct the API URL with query parameters
			const response = await fetch(
				`http://localhost:8080/api/v1/csv/${certificateNumber}`,
				{
					method: "GET", // Request type
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			// Handle non-200 status codes
			if (!response.ok) {
				setStatusMessage("Error: Unable to fetch data");
				return;
			}

			const data = await response.json();
			if (data.certificateNumber !== null) {
				setStatusMessage(
					`Certificate Valid: ${data.certificateNumber} - ${data.companyName}`
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
