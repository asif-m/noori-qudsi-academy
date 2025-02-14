import { useOnce } from "../../hooks/useOnce";
import { styles } from '../../styles';
import QrCodeImage from "../../assets/qrcode.png";
export default function Donate() {
	useOnce(() => {
		PayPal.Donation.Button({
			env: 'production',
			hosted_button_id: '5A56DUVD2FHW4',
			image: {
				src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
				title: 'PayPal - The safer, easier way to pay online!',
				alt: 'Donate with PayPal button'
			},
			onComplete: function (params) {
				// Your onComplete handler
			},
		}).render('#paypal-donate-button-container');
	})

	return (
		<div className="py-12" id={"donate-root"}>
			<h2 className={`${styles.sectionHeadText}`}>Donate</h2>
			<div>
				<div className="sm:text-xl flex flex-col gap-4 items-center">
					<div className="rounded shadow-lg sm:text-xl flex flex-col gap-4 items-center bg-green-200 p-5 w-full">
						<div>The Messenger of Allah ﷺ said,</div>
						<div className="text-green-800">مَنْ بَنَى مَسْجِدًا يَبْتَغِي بِهِ وَجْهَ اللَّهِ، بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ</div>
						<div>Whoever builds a mosque for Allah, Allah builds a house for him in Paradise (Jannah).</div>
						<div>[Sahih Al-Bukhari]</div>
					</div>
					<div className="flex flex-wrap justify-center gap-6">
						<BankDetails />
						<PaypalDonate />
						<QrCode />
					</div>
					<div className="text-sm">EIN (Taxpayer Id) : 87-1825550</div>
					<div>
						{/* <LoanInfo></LoanInfo> */}
					</div>
				</div>
			</div>
		</div>);
}

function PaypalDonate() {
	return <div className="w-64 h-64 rounded overflow-hidden shadow-lg p-5 text-sm flex items-center justify-center text-center">
		<div id="paypal-donate-button-container">
		</div>
	</div>;
}

function QrCode() {
	return <div className="w-64 h-64 rounded overflow-hidden shadow-lg text-sm flex items-center justify-center text-center">
		<div>
			<img src={QrCodeImage} alt="QrCode" className="w-48 h-48" />
		</div>
	</div>;
}

function BankDetails() {
	const routingNumber = "071025661";
	const accountNumber = "68321678";
	async function copyTextToClipboard() {
		const textToCopy = `
		Routing #: ${routingNumber} 
		Account #: ${accountNumber}
		`
		try {
		  await navigator.clipboard.writeText(textToCopy);
		} catch (err) {
		}
	  }

	return <div className="w-64 h-64 rounded overflow-hidden shadow-lg p-5 text-sm flex items-center justify-center text-center">
		<div>
			<div>Routing #: {routingNumber} </div>
			<div>Account #: {accountNumber}</div>
			<div className="py-3">
				<button onClick={copyTextToClipboard}>
					<svg viewBox="0 0 24 24" style={{ height: "32px", width: "32px" }}><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg>
				</button>
			</div>
		</div>
	</div>;
}

