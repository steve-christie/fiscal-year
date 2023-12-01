import { IMonth } from "./types";

export const buildMonths = (
	fyStartMonth: number,
	fiscalYear: number
): {
	months: IMonth[];
	quarters: Record<string, IMonth[]>;
} => {
	const months: IMonth[] = [];
	const quarters: Record<string, IMonth[]> = { "1": [], "2": [], "3": [], "4": [] };
	let start = fyStartMonth;

	let quarterIterations = 0;
	let quarter = 1;

	let calendarYear = fiscalYear;

	if (fyStartMonth !== 0) {
		calendarYear = fiscalYear - 1;
	}

	for (let month = 0; month < 12; month++) {
		if (start === 12) {
			start = 0;
			calendarYear = calendarYear + 1;
		}

		let isFirstMonthOfQuarter: boolean;
		let isLastMonthOfQuarter: boolean;
		let isFirstMonthOfFiscalYear: boolean;
		let isLastMonthOfFiscalYear: boolean;

		if (month === 0) {
			isFirstMonthOfFiscalYear = true;
			isLastMonthOfFiscalYear = false;
		} else if (month === 11) {
			isLastMonthOfFiscalYear = true;
			isFirstMonthOfFiscalYear = false;
		} else {
			isFirstMonthOfFiscalYear = false;
			isLastMonthOfFiscalYear = false;
		}

		if (quarterIterations === 3) {
			quarter++;
			quarterIterations = 0;
			isLastMonthOfQuarter = false;
			isFirstMonthOfQuarter = true;
		} else if (quarterIterations === 2) {
			isLastMonthOfQuarter = true;
			isFirstMonthOfQuarter = false;
		} else if (quarterIterations === 1) {
			isLastMonthOfQuarter = false;
			isFirstMonthOfQuarter = false;
		} else if (quarterIterations === 0) {
			isLastMonthOfQuarter = false;
			isFirstMonthOfQuarter = true;
		}

		const m: IMonth = {
			fiscalMonth: month,
			fiscalQuarter: quarter,
			fiscalYear,
			calendarMonth: start,
			calendarYear: calendarYear,
			isFirstMonthOfFiscalYear,
			isLastMonthOfFiscalYear,
			isLastMonthOfQuarter,
			isFirstMonthOfQuarter
		};
		quarters[quarter].push(m);

		months.push(m);

		start++;
		quarterIterations++;
	}

	return { months, quarters };
};
