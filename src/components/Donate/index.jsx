import { useOnce } from "../../hooks/useOnce";
import { styles } from '../../styles';
import QrCodeImage from "../../assets/qrcode.png";
import { useEffect, useState } from "react";
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
						<div className="text-green-800 text-4xl/loose text-center " style={{ fontFamily: "KFGQPC" }}>مَنْ بَنَى مَسْجِدًا يَبْتَغِي بِهِ وَجْهَ اللَّهِ، بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ</div>
						<div>Whoever builds a mosque for Allah, Allah builds a house for him in Paradise (Jannah).</div>
						<div>[Sahih Al-Bukhari]</div>
					</div>
					<div className="flex flex-wrap justify-center gap-6">
						<ZeffyDonate />
						<PaypalDonate />
						<QrCode />
					</div>
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
function ZeffyDonate() {
	return <div className="w-64 h-64 rounded overflow-hidden shadow-lg p-5 text-sm flex items-center justify-center text-center">
		<a target="_blank" href="https://www.zeffy.com/en-US/donation-form/donate-to-noori-qudsi-academy" className=" rounded-md p-3 ">
		<img src={zeffyImage} alt="Zeffy" width={"102px"} height={"32px"} />
			<div>(No fee)</div>
		</a>
	</div>;
}
function QrCode() {
	return <div className="w-64 h-64 rounded overflow-hidden shadow-lg text-sm flex items-center justify-center text-center">
		<div>
			<img src={QrCodeImage} alt="QrCode" className="w-48 h-48" />
		</div>
	</div>;
}

