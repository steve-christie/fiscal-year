

import {fiscalYear} from "./index"
import {expect} from "chai";

describe("Fiscal Year Tests",  () => {


    it ("When requested, the FY Start month can be returned", () => {
        const fy = fiscalYear(2023, 3)
        expect(fy.getStartMonthIndex()).to.eq(3)
    })
});