# phone-validator

Official JavaScript SDK for [GenderAPI.io](https://www.genderapi.io) — validate and format international phone numbers in your apps.

Get Free API Key: [https://app.genderapi.io](https://app.genderapi.io)

---

## 🚀 Installation

### NPM

Install via NPM:

```bash
npm install phone-validator
```

---

## 📦 CDN Usage (jsDelivr)

Don’t want to install packages? Just include the SDK from a CDN in your HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/phone-validator@1.0.3/dist/phone-validator.umd.js"></script>
<script>
  const api = new PhoneValidator('YOUR_API_KEY');
  api.validate({ number: '+12025550123' })
    .then(result => console.log(result))
    .catch(err => console.error(err));
</script>
```

Replace `"YOUR_API_KEY"` with your real API key.

---

## 🔥 Usage in Node.js, React, Vue, Vanilla JS

You can import the SDK in either **ES Modules** or **CommonJS** style.

### ES Modules (e.g. Vite, Next.js, Vue 3, etc.)

```js
import PhoneValidator from 'phone-validator';

const api = new PhoneValidator('YOUR_API_KEY');
api.validate({ number: '+12025550123' })
  .then(result => console.log(result));
```

### CommonJS (e.g. Node.js, older projects)

```js
const PhoneValidator = require('phone-validator');

const api = new PhoneValidator('YOUR_API_KEY');
api.validate({ number: '+12025550123' })
  .then(result => console.log(result));
```

---

## 📲 Phone Number Validation & Formatter API

The `phone-validator` library uses the official [GenderAPI Phone Number Validation & Formatter API](https://www.genderapi.io/docs-phone-validation-formatter-api) to validate and format phone numbers from over 240 countries.

Whether your users enter phone numbers in various formats (e.g., `12128675309`, `+1 212 867 5309`, `001-212-867-5309`), this library will intelligently detect, validate, and convert the input into a standardized E.164 format (e.g., `+12128675309`).

### ✅ Features:
- Converts phone numbers to E.164 format
- Validates if number is real and structurally possible
- Detects number type: mobile, landline, VoIP, etc.
- Identifies region/city based on area code
- Includes country-level metadata (e.g. ISO code)

---

## 🔢 Input Parameters

### `validate({ number, address? })`

| Parameter | Type   | Required | Description |
|----------|--------|----------|-------------|
| `number` | String | ✅ Yes    | Phone number in any format |
| `address` | String | Optional | ISO country code (e.g., `US`), full country name (`Turkey`), or city name (`Berlin`). Helps resolve local numbers. |

**Example:**

```js
api.validate({ number: '2128675309', address: 'US' });
```

> For more details on the `address` parameter, see the [official documentation](https://www.genderapi.io/docs-phone-validation-formatter-api#address-parameter)

---

## 🟢 API Response

```json
{
  "status": true,
  "remaining_credits": 15709,
  "expires": 0,
  "duration": "18ms",
  "regionCode": "US",
  "countryCode": 1,
  "country": "United States",
  "national": "(212) 867-5309",
  "international": "+1 212-867-5309",
  "e164": "+12128675309",
  "isValid": true,
  "isPossible": true,
  "numberType": "FIXED_LINE_OR_MOBILE",
  "nationalSignificantNumber": "2128675309",
  "rawInput": "+1 212 867 5309",
  "isGeographical": true,
  "areaCode": "212",
  "location": "New York City (Manhattan)"
}
```

### 📄 Response Field Reference

| Field | Type | Description |
|-------|------|-------------|
| `status` | Boolean | Was the request successful |
| `remaining_credits` | Integer | Remaining credits |
| `regionCode` | String | ISO region code (e.g., US) |
| `country` | String | Country name |
| `e164` | String | Internationally formatted number |
| `isValid` | Boolean | Number is valid according to numbering rules |
| `isPossible` | Boolean | Number structure is possible |
| `numberType` | String | e.g., `MOBILE`, `FIXED_LINE`, etc. |
| `areaCode` | String | Extracted area code |
| `location` | String | City/region matched from area code |

> For full API fields, refer to the [official docs](https://www.genderapi.io/docs-phone-validation-formatter-api#response-fields)

---

## 🏷 Number Type Values

| Value | Description |
|-------|-------------|
| `FIXED_LINE` | Landline |
| `MOBILE` | Mobile phone |
| `FIXED_LINE_OR_MOBILE` | Ambiguous, could be both |
| `TOLL_FREE` | e.g., 800 numbers |
| `PREMIUM_RATE` | Expensive premium numbers |
| `SHARED_COST` | Cost shared between parties |
| `VOIP` | Internet-based phone |
| `PERSONAL_NUMBER` | Forwarding number |
| `PAGER` | Obsolete pager number |
| `VOICEMAIL` | Voicemail access |
| `UNKNOWN` | Cannot be determined |

---

## 📚 More Information

- Supports 242 countries
- Detects mobile vs landline
- Useful for signup forms, CRMs, messaging tools, and more
- More info: [https://www.genderapi.io/docs-phone-validation-formatter-api](https://www.genderapi.io/docs-phone-validation-formatter-api)

---

## 📄 License

MIT License

