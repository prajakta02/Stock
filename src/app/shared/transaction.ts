export class Transaction {
    company: string;
    noOfStocks: number;
    transcType: string;
    constructor(company: string, noOfStocks: number, transcType: string) {
        this.company = company;
        this.noOfStocks = noOfStocks;
        this.transcType = transcType;
    }
}
