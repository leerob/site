const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function ensureDotEnvLocal() {
    const dotEnvLocalPath = path.resolve(process.cwd(), '.env.local');
    let contents;
    try {
        contents = fs.readFileSync(dotEnvLocalPath);
    } catch (err) {
        console.warn(`WARNING: Couldn't read ${dotEnvLocalPath}. Did you copy it from .env.example?`)
        return;
    }
    const envVariables = dotenv.parse(contents);
    
    let blankKeys = []
    for (const [key, value] of Object.entries(envVariables)) {
        if (value === ""){
            blankKeys.push(key)
        }
    }
    if (blankKeys.length) {
        console.warn(`WARNING: The following values in ${dotEnvLocalPath} are empty: ${blankKeys}`)
    }
}

ensureDotEnvLocal()



