import {ConvertNumber} from "../interface/convertNumber";

export class Binary extends ConvertNumber {
    public convert(x: number): string {
        return x.toString(2);
    }
}