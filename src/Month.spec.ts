import { buildMonths } from "./Month";
import { expect } from "chai";

describe("Month Tests", () => {
	describe("When fy start is Jan", () => {
		const { months, quarters } = buildMonths(0, 2023);

		it("Jan should have correct values", () => {
			const january = months.find((m) => m.calendarMonth === 0);
			expect(january.isFirstMonthOfQuarter).to.be.true;
			expect(january.isLastMonthOfQuarter).to.be.false;
			expect(january.isFirstMonthOfFiscalYear).to.be.true;
			expect(january.isLastMonthOfFiscalYear).to.be.false;
			expect(january.calendarYear).to.eq(2023);
			expect(january.fiscalYear).to.eq(2023);
			expect(january.fiscalQuarter).to.eq(1);
			expect(january.fiscalMonth).to.eq(0);
		});

		it("Feb should have correct values", () => {
			const february = months.find((m) => m.calendarMonth === 1);
			expect(february.isFirstMonthOfQuarter).to.be.false;
			expect(february.isLastMonthOfQuarter).to.be.false;
			expect(february.isFirstMonthOfFiscalYear).to.be.false;
			expect(february.isLastMonthOfFiscalYear).to.be.false;
			expect(february.calendarYear).to.eq(2023);
			expect(february.fiscalYear).to.eq(2023);
			expect(february.fiscalQuarter).to.eq(1);
			expect(february.fiscalMonth).to.eq(1);
		});

		it("Dec should have correct values", () => {
			const december = months.find((m) => m.calendarMonth === 11);
			expect(december.isFirstMonthOfQuarter).to.be.false;
			expect(december.isLastMonthOfQuarter).to.be.true;
			expect(december.isFirstMonthOfFiscalYear).to.be.false;
			expect(december.isLastMonthOfFiscalYear).to.be.true;
			expect(december.calendarYear).to.eq(2023);
			expect(december.fiscalYear).to.eq(2023);
			expect(december.fiscalQuarter).to.eq(4);
			expect(december.fiscalMonth).to.eq(11);
		});

		it("Months are added to each quarter", () => {
			expect(quarters["1"]).length(3);
			expect(quarters["2"]).length(3);
			expect(quarters["3"]).length(3);
			expect(quarters["4"]).length(3);
		});
	});

	describe("When fy start is Apr", () => {
		const { months } = buildMonths(3, 2023);

		it("Apr should have correct values", () => {
			const april = months.find((m) => m.calendarMonth === 3);
			expect(april.isFirstMonthOfQuarter).to.be.true;
			expect(april.isLastMonthOfQuarter).to.be.false;
			expect(april.isFirstMonthOfFiscalYear).to.be.true;
			expect(april.isLastMonthOfFiscalYear).to.be.false;
			expect(april.calendarYear).to.eq(2022);
			expect(april.fiscalYear).to.eq(2023);
			expect(april.fiscalQuarter).to.eq(1);
			expect(april.fiscalMonth).to.eq(0);
		});

		it("May should have correct values", () => {
			const may = months.find((m) => m.calendarMonth === 4);
			expect(may.isFirstMonthOfQuarter).to.be.false;
			expect(may.isLastMonthOfQuarter).to.be.false;
			expect(may.isFirstMonthOfFiscalYear).to.be.false;
			expect(may.isLastMonthOfFiscalYear).to.be.false;
			expect(may.calendarYear).to.eq(2022);
			expect(may.fiscalYear).to.eq(2023);
			expect(may.fiscalQuarter).to.eq(1);
			expect(may.fiscalMonth).to.eq(1);
		});

		it("Dec should have correct values", () => {
			const december = months.find((m) => m.calendarMonth === 11);
			expect(december.isFirstMonthOfQuarter).to.be.false;
			expect(december.isLastMonthOfQuarter).to.be.true;
			expect(december.isFirstMonthOfFiscalYear).to.be.false;
			expect(december.isLastMonthOfFiscalYear).to.be.false;
			expect(december.calendarYear).to.eq(2022);
			expect(december.fiscalYear).to.eq(2023);
			expect(december.fiscalQuarter).to.eq(3);
			expect(december.fiscalMonth).to.eq(8);
		});

		it("Jan should have correct values", () => {
			const january = months.find((m) => m.calendarMonth === 0);
			expect(january.isFirstMonthOfQuarter).to.be.true;
			expect(january.isLastMonthOfQuarter).to.be.false;
			expect(january.isFirstMonthOfFiscalYear).to.be.false;
			expect(january.isLastMonthOfFiscalYear).to.be.false;
			expect(january.calendarYear).to.eq(2023);
			expect(january.fiscalYear).to.eq(2023);
			expect(january.fiscalQuarter).to.eq(4);
			expect(january.fiscalMonth).to.eq(9);
		});
	});

	describe("When fy start is May", () => {
		const { months } = buildMonths(4, 2023);

		it("May should have correct values", () => {
			const may = months.find((m) => m.calendarMonth === 4);
			expect(may.isFirstMonthOfQuarter).to.be.true;
			expect(may.isLastMonthOfQuarter).to.be.false;
			expect(may.isFirstMonthOfFiscalYear).to.be.true;
			expect(may.isLastMonthOfFiscalYear).to.be.false;
			expect(may.calendarYear).to.eq(2022);
			expect(may.fiscalYear).to.eq(2023);
			expect(may.fiscalQuarter).to.eq(1);
			expect(may.fiscalMonth).to.eq(0);
		});

		it("Dec should have correct values", () => {
			const december = months.find((m) => m.calendarMonth === 11);
			expect(december.isFirstMonthOfQuarter).to.be.false;
			expect(december.isLastMonthOfQuarter).to.be.false;
			expect(december.isFirstMonthOfFiscalYear).to.be.false;
			expect(december.isLastMonthOfFiscalYear).to.be.false;
			expect(december.calendarYear).to.eq(2022);
			expect(december.fiscalYear).to.eq(2023);
			expect(december.fiscalQuarter).to.eq(3);
			expect(december.fiscalMonth).to.eq(7);
		});

		it("Jan should have correct values", () => {
			const january = months.find((m) => m.calendarMonth === 0);
			expect(january.isFirstMonthOfQuarter).to.be.false;
			expect(january.isLastMonthOfQuarter).to.be.true;
			expect(january.isFirstMonthOfFiscalYear).to.be.false;
			expect(january.isLastMonthOfFiscalYear).to.be.false;
			expect(january.calendarYear).to.eq(2023);
			expect(january.fiscalYear).to.eq(2023);
			expect(january.fiscalQuarter).to.eq(3);
			expect(january.fiscalMonth).to.eq(8);
		});

		it("Apr should have correct values", () => {
			const april = months.find((m) => m.calendarMonth === 3);
			expect(april.isFirstMonthOfQuarter).to.be.false;
			expect(april.isLastMonthOfQuarter).to.be.true;
			expect(april.isFirstMonthOfFiscalYear).to.be.false;
			expect(april.isLastMonthOfFiscalYear).to.be.true;
			expect(april.calendarYear).to.eq(2023);
			expect(april.fiscalYear).to.eq(2023);
			expect(april.fiscalQuarter).to.eq(4);
			expect(april.fiscalMonth).to.eq(11);
		});
	});

	describe("When fy start is Dec", () => {
		const { months } = buildMonths(11, 2023);

		it("Dec should have correct values", () => {
			const december = months.find((m) => m.calendarMonth === 11);
			expect(december.isFirstMonthOfQuarter).to.be.true;
			expect(december.isLastMonthOfQuarter).to.be.false;
			expect(december.isFirstMonthOfFiscalYear).to.be.true;
			expect(december.isLastMonthOfFiscalYear).to.be.false;
			expect(december.calendarYear).to.eq(2022);
			expect(december.fiscalYear).to.eq(2023);
			expect(december.fiscalQuarter).to.eq(1);
			expect(december.fiscalMonth).to.eq(0);
		});

		it("Jan should have correct values", () => {
			const january = months.find((m) => m.calendarMonth === 0);
			expect(january.isFirstMonthOfQuarter).to.be.false;
			expect(january.isLastMonthOfQuarter).to.be.false;
			expect(january.isFirstMonthOfFiscalYear).to.be.false;
			expect(january.isLastMonthOfFiscalYear).to.be.false;
			expect(january.calendarYear).to.eq(2023);
			expect(january.fiscalYear).to.eq(2023);
			expect(january.fiscalQuarter).to.eq(1);
			expect(january.fiscalMonth).to.eq(1);
		});

		it("Feb should have correct values", () => {
			const february = months.find((m) => m.calendarMonth === 1);
			expect(february.isFirstMonthOfQuarter).to.be.false;
			expect(february.isLastMonthOfQuarter).to.be.true;
			expect(february.isFirstMonthOfFiscalYear).to.be.false;
			expect(february.isLastMonthOfFiscalYear).to.be.false;
			expect(february.calendarYear).to.eq(2023);
			expect(february.fiscalYear).to.eq(2023);
			expect(february.fiscalQuarter).to.eq(1);
			expect(february.fiscalMonth).to.eq(2);
		});

		it("March should have correct values", () => {
			const march = months.find((m) => m.calendarMonth === 2);
			expect(march.isFirstMonthOfQuarter).to.be.true;
			expect(march.isLastMonthOfQuarter).to.be.false;
			expect(march.isFirstMonthOfFiscalYear).to.be.false;
			expect(march.isLastMonthOfFiscalYear).to.be.false;
			expect(march.calendarYear).to.eq(2023);
			expect(march.fiscalYear).to.eq(2023);
			expect(march.fiscalQuarter).to.eq(2);
			expect(march.fiscalMonth).to.eq(3);
		});

		it("April should have correct values", () => {
			const april = months.find((m) => m.calendarMonth === 3);
			expect(april.isFirstMonthOfQuarter).to.be.false;
			expect(april.isLastMonthOfQuarter).to.be.false;
			expect(april.isFirstMonthOfFiscalYear).to.be.false;
			expect(april.isLastMonthOfFiscalYear).to.be.false;
			expect(april.calendarYear).to.eq(2023);
			expect(april.fiscalYear).to.eq(2023);
			expect(april.fiscalQuarter).to.eq(2);
			expect(april.fiscalMonth).to.eq(4);
		});
	});
});
