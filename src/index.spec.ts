import { fyUtils } from "./index";
import { expect } from "chai";

describe("buildFiscalYear Tests", () => {
	it("When start month passed in is less than 0, error is thrown", () => {
		expect(() => fyUtils.buildFiscalYear(-1, 2023)).to.throw("FY Start Month (-1) must be a number from 0 to 11");
	});

	it("When start month passed in is greater than 11, error is thrown", () => {
		expect(() => fyUtils.buildFiscalYear(12, 2023)).to.throw("FY Start Month (12) must be a number from 0 to 11");
	});

	it("When 2023 and start month of Apr is passed in, fiscal year obj is build", () => {
		const result = fyUtils.buildFiscalYear(3, 2023);
		expect(result.firstMonthOfFyYear).to.eq(3);
		expect(result.lastMonthOfFiscalYear).to.eq(2);
		expect(result.months).length(12);
		expect(result.year).to.eq(2023);
		expect(result.calendarYears).to.eqls([2022, 2023]);
	});
});

describe("getFiscalYearOfDate Tests", () => {
	it("When start month passed in is less than 0, error is thrown", () => {
		expect(() => fyUtils.getFiscalYearOfDate(new Date("2023-05-01"), -1)).to.throw(
			"FY Start Month (-1) must be a number from 0 to 11"
		);
	});

	it("When start month passed in is greater than 11, error is thrown", () => {
		expect(() => fyUtils.getFiscalYearOfDate(new Date("2023-05-01"), 12)).to.throw(
			"FY Start Month (12) must be a number from 0 to 11"
		);
	});

	describe("When fy start month is Apr", () => {
		it("And date passed in is 01/05/2023, then FY Year should be 2024", () => {
			const result = fyUtils.getFiscalYearOfDate(new Date("2023-05-01"), 3);
			expect(result).to.eq(2024);
		});

		it("And date passed in is 01/04/2023, then FY Year should be 2024", () => {
			const result = fyUtils.getFiscalYearOfDate(new Date("2023-04-01"), 3);
			expect(result).to.eq(2024);
		});

		it("And date passed in is 01/04/2023, then FY Year should be 2024", () => {
			const result = fyUtils.getFiscalYearOfDate(new Date("2023-04-01"), 3);
			expect(result).to.eq(2024);
		});
	});

	describe("When fy start month is Jan", () => {
		it("And date passed in is 01/01/2023, then FY Year should be 2023", () => {
			const result = fyUtils.getFiscalYearOfDate(new Date("2023-01-01"), 0);
			expect(result).to.eq(2023);
		});

		it("And date passed in is 01/12/2022 then FY Year should be 2022", () => {
			const result = fyUtils.getFiscalYearOfDate(new Date("2022-12-01"), 0);
			expect(result).to.eq(2022);
		});
	});
});
