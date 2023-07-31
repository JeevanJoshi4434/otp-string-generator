### otp-string-generator

Description:

The `otp-string-generator` module is a versatile utility for generating secure One-Time Passwords (OTPs) and random key strings in Node.js. It provides functions to create cryptographically secure random strings of specified lengths, with optional strict criteria and additional data. This module ensures high randomness and can be used for various use cases, such as generating authentication tokens, unique URLs, or any random data required in your Node.js applications.

Code:

```javascript
const Generate = require('otp-string-generator');

// Generate a 6-digit OTP
const otp = Generate.getOTP(6);
console.log(otp);
// Output: "237834" or any other randomly generated 6-digit number string

// Generate a random key string with parameters

/**
 * The function `getString` generates a random string of a specified length, with optional strict
 * criteria and additional data.
 * @param {number} Length - The length of the generated string. It specifies the number of characters the string should have.
 * @param {boolean} Strict - Determines whether the generated string should follow strict rules or not. If `true`, the generated string will have a specific pattern. If `false`, the generated string will be random.
 * @param {Object} more - An object that contains additional key-value pairs that you want to include in the generated string. These key-value pairs will be appended to the string in the format `key=value&`.
 * @returns {string} A random string.
 */
const ExampleKey1 = Generate.getString(10, false, { _id: "10", email: "user@mail.com" });
console.log(ExampleKey1);
// Output: {_id: "10", email: "user@mail.com",_id=10&email=user@mail.com&key=L*Rq@EUoVn}

// Generate another random key string
const ExampleKey2 = Generate.getString(10, false, { _id: "10", email: "user@mail.com" });
console.log(ExampleKey2);
// Output: {_id: "10", email: "user@mail.com",_id=10&email=user@mail.com&key=L*Rq@EUoVn}

// Generate a URL key string with parameters

/**
 * The function `getUrlString` generates a URL string with specified length, strictness, and additional parameters.
 * @param {number} Length - The length of the generated key string.
 * @param {boolean} Strict - Determines whether the generated URL string should follow strict rules or not. If `Strict` is set to `true`, the generated URL string will include both lowercase and uppercase letters, as well as Special Characters `!@#$%^*`. If `Strict` is set to `false`, the generated URL string will be random.
 * @param {Object} more - An object that contains additional key-value pairs to be included in the generated URL string. These key-value pairs will be appended to the URL as query parameters.
 * @param {string} url - The base URL for the generated URL string.
 * @param {boolean} https - A boolean value indicating whether the generated URL should use the "https" protocol or not.
 * @returns {string} The generated URL string.
 */
const ExampleKey3 = Generate.getUrlString(10, false, { _id: "10", email: "user@mail.com" }, "www.example.com/verify?", false);
console.log(ExampleKey3);
// Output: { _id: "10", email: "user@mail.com",string:http://www.example.com/verify??_id=10&email=user@mail.com&key=sLqTg@kGOS}

// Generate another URL key string with strictness and HTTPS

const ExampleKey4 = Generate.getUrlString(10, true, { _id: "10", email: "user@mail.com" }, "www.example.com/verify?", true);
console.log(ExampleKey4);
// Output: { _id: "10", email: "user@mail.com",string:http://www.example.com/verify??_id=10&email=user@mail.com&key=sLqTg@kGOS}
```

Other Points:

1. The `otp-string-generator` module provides a convenient way to generate secure random strings, reducing the risk of predictable or weak tokens.

2. The `getOTP` function is specifically designed to generate OTPs, which are commonly used for two-factor authentication and other security mechanisms.

3. The `getString` function can be used to generate random strings with optional additional data. When `Strict` is set to `false`, the generated string will be random; when `true`, the string follows a specific pattern.

4. The `getUrlString` function is tailored for generating URL keys, adding query parameters to the base URL. When `Strict` is set to `true`, the generated URL includes both lowercase and uppercase letters and special characters.

5. For increased security, the module relies on the `crypto` module in Node.js to generate cryptographically secure random numbers.

6. The generated strings can be used for a wide range of applications, such as token-based authentication, temporary URLs, and unique identifiers.

Overall, the `otp-string-generator` module simplifies the process of generating secure random strings and OTPs in Node.js, making it an excellent addition to any application requiring random data.
## Authors

- [@Jeevan Joshi](https://www.github.com/JeevanJoshi4434)

