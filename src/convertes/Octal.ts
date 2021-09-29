import {ConvertNumber} from "../interface/convertNumber";

export class Octal extends ConvertNumber {
    public convert(x: number): string {
        return x.toString(8);
    }
}