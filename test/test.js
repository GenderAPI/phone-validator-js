// test/test.js

import PhoneValidator from '../src/phone-validator.js'; // or require(...) if CJS

const api = new PhoneValidator('test_key');

api.validate({ number: '+14155552671' })
    .then(res => {
        console.log('✅ PhoneValidator test passed');
        console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
        console.error('❌ PhoneValidator test failed');
        console.error(err);
        process.exit(1);
    });
