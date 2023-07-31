/**
 * The genOTP function generates a random string of numbers with a specified length.
 * @param Length - The `Length` parameter is the desired length of the generated OTP (One-Time
 * Password).
 * @returns a randomly generated string of numbers with the specified length.
 */
function genOTP(Length){
    if(typeof Length !== 'number' || Length <= 0){
        throw new Error("TypeError: Length should be a 'Number' parameter and should be greater than '0'.");
    }
    let string = '';
    for (let i = 0; i < Length; i++) {
        string += getRandomNumber(0,9).toString();
    }
    return  string;
}
/**
 * The function `genString` generates a random string of a specified length, with optional strict
 * criteria and additional data.
 * @param Length - The `Length` parameter determines the length of the generated string. It specifies
 * the number of characters the string should have.
 * @param Strict - The `Strict` parameter is a boolean value that determines whether the generated
 * string should follow strict rules or not. If `Strict` is `true`, the generated string will have a
 * specific pattern. If `Strict` is `false`, the generated string will be random.
 * @param more - The `more` parameter is an object that contains additional key-value pairs that you
 * want to include in the generated string. These key-value pairs will be appended to the string in the
 * format `key=value&`.
 * @returns a Object.
 */
function genString(Length, Strict, more) {
    if(more.string){
        throw new Error(`TypeError: 'string' keyword cannot be used in more. It is Reserved as return type.`)
    }
    if(typeof Strict !== "boolean"){
        throw new Error("TypeError: Strict should be a 'Boolean' parameter.")
    }
    if(typeof more !== "object"){
        throw new Error("TypeError: more should be an Object.");
    }
    if(typeof Length !== "number" || Length <= 0){
        throw new Error("TypeError: Length should be a 'Number' parameter and should be greater than '0'.");
    }
    let string = '';
    let Data = data(Strict);
    let Args = [
    ]
    if (more.length !== 0) {
        Args.push(more);
        const objectWithId = Args[0]; // Access the first element of the array (index 0)
        const fieldNames = Object.keys(objectWithId); // Get an array of property names

        // Loop through the property names and access the corresponding values
        for (const fieldName of fieldNames) {
            const fieldValue = objectWithId[fieldName];
            string += fieldName;
            string += '=';
            string += fieldValue;
            string += '&';
        }
    }
    if (!Strict) {
        string += 'key=';
        for (let i = 0; i < Length; i++) {
            string += Data[getRandomNumber(0, Data.length - 1)];
        }
        return stringSplitter(string);
    } else {
        string += 'key=';
        for (let i = 0; i < Length/2; i++) {
            string += Data[getRandomNumber(0, Data.length - 1)];
            string += Data[getRandomNumber(62, Data.length -1)]
        }
        return stringSplitter(string);
    }
}
/**
 * The function `genUrlString` generates a URL string with specified length, strictness, and additional
 * parameters.
 * @param Length - The length of the generated key string.
 * @param Strict - The `Strict` parameter is a boolean value that determines whether the generated URL
 * string should follow strict rules or not. If `Strict` is set to `true`, the generated URL string
 * will include both lowercase and uppercase letters, as well as Special Character `!@#$%^*`. If `Strict` is set to
 * `false`,
 * @param more - The `more` parameter is an object that contains additional key-value pairs to be
 * included in the generated URL string. These key-value pairs will be appended to the URL as query
 * parameters.
 * @param url - The `url` parameter is a string that represents the base URL for the generated URL
 * string.
 * @param https - A boolean value indicating whether the generated URL should use the "https" protocol
 * or not.
 * @returns The function `genUrlString` returns a Object based on the provided parameters. The
 * returned URL string will have the format `http://url?queryString` or `https://url?queryString`
 * depending on the value of the `https` parameter.
 */
function genUrlString(Length, Strict, more,url,https) {
    if(more.string){
        throw new Error(`TypeError: 'string' keyword cannot be used in more. It is Reserved as return type.`)
    }
    if(typeof Strict !== "boolean"){
        throw new Error("TypeError: Strict should be a 'Boolean' parameter.")
    }
    if(typeof more !== "object"){
        throw new Error("TypeError: more should be an Object.");
    }
    if(typeof Length !== "number" || Length <= 0){
        throw new Error("TypeError: Length should be a 'Number' parameter and should be greater than '0'.");
    }
    if(typeof https !== 'boolean'){
        throw new Error("TypeError: https should be a 'Boolean' parameter.");
    }
    if(typeof (url) !== 'string' || url.length === 0){
        throw new Error(`TypeError: url must be a String and length should be greater than '0'.`)
    }

    let string = '';
    let Data = data(Strict);
    let Args = [
    ]
    if (more.length !== 0) {
        Args.push(more);
        const objectWithId = Args[0]; // Access the first element of the array (index 0)
        const fieldNames = Object.keys(objectWithId); // Get an array of property names

        // Loop through the property names and access the corresponding values
        for (const fieldName of fieldNames) {
            const fieldValue = objectWithId[fieldName];
            string += fieldName;
            string += '=';
            string += fieldValue;
            string += '&';
        }
    }
    if (!Strict) {
        string += 'key=';
        for (let i = 0; i < Length; i++) {
            string += Data[getRandomNumber(0, Data.length - 1)];
        }
        return urlStringSplitter((https ? 'https://' : 'http://') + url + '?' + string);
    } else {
        string += 'key=';
        for (let i = 0; i < Length/2; i++) {
            string += Data[getRandomNumber(0, Data.length - 1)];
            string += Data[getRandomNumber(62, Data.length -1)]
        }
        return urlStringSplitter((https ? 'https://' : 'http://') + url + '?' + string);
    }
}

/**
 * The function returns an array containing lowercase letters, uppercase letters, numbers, and special
 * characters.
 * @param Strict - The "Strict" parameter is a boolean value that determines whether the generated
 * character array should only contain lowercase letters, or if it should also include uppercase
 * letters, numbers, and special characters. If "Strict" is set to true, the character array will only
 * contain lowercase letters. If "Strict" is
 * @returns The function `data` returns an array containing lowercase letters, uppercase letters,
 * numbers, and special characters.
 */
const data = function (Strict) {
    const characters = [...Array(26)].map((_, i) => String.fromCharCode(i + 65).toLowerCase());
    const numbers = [...Array(10)].map((_, i) => i.toString());
    const specialCharacters = '!@#$%^*';
    const characterArray = characters.concat(characters.map(c => c.toUpperCase()), numbers, specialCharacters.split(''));
    return characterArray;
}
/**
 * The getRandomNumber function generates a random number within a specified range.
 * @param from - The starting number of the range for generating a random number.
 * @param to - The "to" parameter represents the upper limit of the range from which the random number
 * will be generated.
 * @returns The function getRandomNumber is returning a random number within the specified range (from
 * and to).
 */
const getRandomNumber = function (from, to) { // for random number
    if (from >= to) {
        throw new Error('Invalid range: "from" must be less than "to"');
    }
    const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
    return randomNumber;
}

function stringSplitter(string){
    const keyValuePairs = string.split('&');
    const obj = {};
    keyValuePairs.forEach(keyValuePairs =>{
        const [key,value] = keyValuePairs.split('=');
        obj[key] = isNaN(value) ? value : Number(value);
    });
    let str = 'string';
    obj[str] = string; 
    return obj;
}
function urlStringSplitter(newString){
    const splitString = newString.split('?');
    let valueAfterQuestionMark;
    if(splitString.length > 1){
        valueAfterQuestionMark = splitString[1];
    }else{
        valueAfterQuestionMark = null;
    }
    if(valueAfterQuestionMark === null){
        throw new Error('TypeError: Provide a valid url. url not contains anything after ?');
    }
    string = valueAfterQuestionMark;
    const keyValuePairs = string.split('&');
    const obj = {};
    keyValuePairs.forEach(keyValuePairs =>{
        const [key,value] = keyValuePairs.split('=');
        obj[key] = isNaN(value) ? value : Number(value);
    });
    let str = 'string';
    obj[str] = newString; 
    return obj;
}


module.exports = {
    getString:genString,
    getUrlString:genUrlString,
    getOTP:genOTP
}