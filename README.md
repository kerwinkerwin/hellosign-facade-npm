# Hellosign npm Documentation
For usage with Hellosign prototype

**IMPORTANT FOR NPM TO WORK**
This Npm uses [dotenv](https://www.npmjs.com/package/dotenv) and [fs](https://nodejs.org/api/fs.html) for handling credentials for hellosign authentication.
Create a .env file and set the following
* HELLOSIGN_KEY= Hellosign key

Initialize dot env
```
require('dotenv').load();
```

Then initialize hellosign;

```
var credentials = {
  apiKey: process.env.HELLOSIGN_KEY;
};
var relate = require('../index.js')(credentials);

```

One initialized the following functions are available to be used:

## signTemplate function

```
function signTemplate(type, student, callback)

```

###Arguments

####type:  
  * "welcome" - Sends welcome letter
  * null , sends the terms and conditions

####student:
  Structure as below:
  ```
    {
      name: example student name,
      email: example student email
    }
