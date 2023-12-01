import { IFiscalYear } from "./types";
import { buildMonths } from "./Month";

const validateFyStartMonth = (fiscalYearStartMonth: number) => {
	if (fiscalYearStartMonth < 0 || fiscalYearStartMonth > 11) {
		throw new Error(`FY Start Month (${fiscalYearStartMonth}) must be a number from 0 to 11`);
	}
};

const getFiscalYearOfDate = (date: Date, fiscalYearStartMonth: number) => {
	validateFyStartMonth(fiscalYearStartMonth);

	let year;
	if (fiscalYearStartMonth === 0) {
		year = date.getFullYear();
	} else if (date.getMonth() < fiscalYearStartMonth) {
		year = date.getFullYear();
	} else {
		year = date.getFullYear() + 1;
	}

	return year;
};

const buildFiscalYear = (startMonth: number, year: number): IFiscalYear => {
	validateFyStartMonth(startMonth);

	const { months, quarters } = buildMonths(startMonth, year);

	const firstMonthOfFyYear = months.find((m) => m.isFirstMonthOfFiscalYear);
	const lastMonthOfFiscalYear = months.find((m) => m.isLastMonthOfFiscalYear);
	const calendarYears = [...new Set(months.map((m) => m.calendarYear))];

	return {
		year,
		calendarYears,
		months,
		quarters,
		firstMonthOfFyYear: firstMonthOfFyYear.calendarMonth,
		lastMonthOfFiscalYear: lastMonthOfFiscalYear.calendarMonth
	};
};

export * from "./types";
export const fyUtils = {
	getFiscalYearOfDate,
	buildFiscalYear
};
