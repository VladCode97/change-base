import {Converter} from "./converter/converter";
import {Octal} from "./convertes/Octal";

(function () {
    const converter = new Converter(new Octal());
    console.log(converter.converter(23434343454))
})()