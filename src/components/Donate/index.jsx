import { useOnce } from "../../hooks/useOnce";
import { styles } from '../../styles';
import QrCodeImage from "../../assets/qrcode.png";
import zeffyImage from "../../assets/zeffy-logo.png";

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
			onComplete: function () {
				// Your onComplete handler
			},
		}).render('#paypal-donate-button-container');
	})

	return (
		<section id="donate-root">
			<p className={styles.sectionSubText}>Support the Masjid</p>
			<h2 className={styles.sectionHeadText}>Donate</h2>
			<div className="mt-3 h-1 w-14 bg-yellow-400 rounded-full" />

			<div className="mt-6 flex flex-col items-center gap-6">
				<div className="w-full rounded-2xl bg-green-50 ring-1 ring-green-200 p-6 sm:p-8 flex flex-col gap-4 items-center text-center">
					<div className="text-gray-600">The Messenger of Allah ﷺ said,</div>
					<div className="text-green-800 text-2xl sm:text-4xl/relaxed text-center" style={{ fontFamily: "KFGQPC" }}>مَنْ بَنَى مَسْجِدًا يَبْتَغِي بِهِ وَجْهَ اللَّهِ، بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ</div>
					<div className="text-gray-700 font-medium">Whoever builds a mosque for Allah, Allah builds a house for him in Paradise (Jannah).</div>
					<div className="text-gray-400 text-sm">[Sahih Al-Bukhari]</div>
				</div>

				<div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
					<ZeffyDonate />
					<PaypalDonate />
					<QrCode />
				</div>
			</div>
		</section>);
}

function DonateCard({ label, children }) {
	return (
		<div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[220px]">
			<div className="flex flex-1 items-center justify-center">{children}</div>
			<p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</p>
		</div>
	);
}

function PaypalDonate() {
	return (
		<DonateCard label="PayPal">
			<div id="paypal-donate-button-container" />
		</DonateCard>
	);
}

function ZeffyDonate() {
	return (
		<DonateCard label="No fee">
			<a target="_blank" rel="noreferrer" href="https://www.zeffy.com/en-US/donation-form/donate-to-noori-qudsi-academy" className="flex flex-col items-center gap-1">
				<img src={zeffyImage} alt="Zeffy" width="102" height="32" />
			</a>
		</DonateCard>
	);
}

function QrCode() {
	return (
		<DonateCard label="Scan to donate">
			<img src={QrCodeImage} alt="Donation QR code" className="w-40 h-40" />
		</DonateCard>
	);
}
