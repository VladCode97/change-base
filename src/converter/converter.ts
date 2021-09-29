import {ConvertNumber} from "../interface/convertNumber";

export class Converter {

    constructor(private readonly convertInject: ConvertNumber) {
    }

    public converter(x: number): string {
        return this.convertInject.convert(x);
    }

}