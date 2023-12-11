# Fiscal Year

## Installation

### NPM

```shell
npm install @sambruca/fiscal-year
```

### YARN

```shell
yarn add @sambruca/fiscal-year
```

## Usage

```typescript
import { fyUtils } from "@sambruca/fiscal-year";
```

To fetch fiscal year of a given date:

```typescript
    const date = new Date()
    const fyStartMonth = 3;
    const fiscalYear=  fyUtils.getFiscalYearOfDate(date, fyStartMonth)
```

`fyStartMonth` must always be a number from 0 to 11, 0 being Jan and 11 being December.

To build a fiscal year object, with information about the year, run:

```typescript  
    const fyStartMonth = 3;
    const year = 2023;
    const fiscalYear: IFiscalYear = fyUtils.buildFiscalYear(fyStartMonth, year)
```

The shape of the resulting object can be found [here](src%2Ftypes.ts).
