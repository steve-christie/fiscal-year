export interface IFiscalYear {
	year: number;
	calendarYears: number[];
	months: IMonth[];
	quarters: Record<string, IMonth[]>;
	firstMonthOfFyYear: number;
	lastMonthOfFiscalYear: number;
}

export interface IMonth {
	calendarMonth: number;
	calendarYear: number;
	fiscalMonth: number;
	fiscalQuarter: number;
	fiscalYear: number;
	isFirstMonthOfQuarter: boolean;
	isLastMonthOfQuarter: boolean;
	isFirstMonthOfFiscalYear: boolean;
	isLastMonthOfFiscalYear: boolean;
}
