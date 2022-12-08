export default function ExpenditureDetailsPage ({expenditureData}: any) {
    return (
        <tr>
            <td> {expenditureData?.['expenditure_amount']} </td>
            <td> {expenditureData?.['expenditure_trasaction_date']} </td>
            <td> {expenditureData?.['expenditure_location']} </td>
            <td> {expenditureData?.['expenditure_type']} </td>
            <td> {expenditureData?.['status']} </td>
        </tr>
    )
}