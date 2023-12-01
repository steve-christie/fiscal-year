
const validateFyStartMonth = (fiscalYearStartMonth: number) => {
    if (fiscalYearStartMonth < 0 || fiscalYearStartMonth > 11) {
        throw new Error(`FY Start Month (${fiscalYearStartMonth}) must be a number from 0 to 11`)
    }
}

export const getFiscalYearOfDate = (date: Date, fiscalYearStartMonth: number) => {

    validateFyStartMonth(fiscalYearStartMonth)

    let year;
    if (fiscalYearStartMonth === 0) {
        year = date.getFullYear()
    } else if (date.getMonth() < fiscalYearStartMonth) {
         year = date.getFullYear()
    } else  {
        year = date.getFullYear() + 1;
    }

    return year
}