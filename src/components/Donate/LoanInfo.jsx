export function LoanInfo(){
    return (
        <table className="w-full text-left table-auto min-w-max">
        <tbody>
            <tr className="hover:bg-slate-50">
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Purchase price
                    </p>
                </td>
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        $750,000
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Down payment
                    </p>
                </td>
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        $330,000
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Mortgage
                    </p>
                </td>
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        $420,000
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Karza Hasana
                    </p>
                </td>
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Total : $150,000
                    </p>
                    <p className="block text-sm text-slate-800">
                        Paid : $190,000
                    </p>
                    <p className="block text-sm text-slate-800">
                        Remaining : $131,000
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Total Loan
                    </p>
                </td>
                <td className="p-1 border border-slate-200">
                    <p className="block text-sm text-slate-800">
                        $570,000
                    </p>
                </td>
            </tr>

        </tbody>
        </table>
    )
}