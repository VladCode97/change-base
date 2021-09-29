import {ConvertNumber} from "../interface/convertNumber";

export class Hexadecimal extends ConvertNumber {
    public convert(x: number): string {
        return x.toString(16);
    }

}