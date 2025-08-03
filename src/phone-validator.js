class phoneValidator {
    constructor(apiKey, baseUrl = "https://api.genderapi.io") {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async validate({number, address = ""}) {
        if(typeof number !== "string" || !number.trim()) {
            return {status:false,errno: 91, errmsg: "Missing number parameter on your request."};
        }

        return await this._postRequest("/api/phone", {
            number,
            address
        });
    }
    async _postRequest(endpoint, payload) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Authorization": `Bearer ${this.apiKey}`,
            "Content-Type": "application/json"
        };

        const body = JSON.stringify(
            Object.fromEntries(
                Object.entries(payload).filter(([_, v]) => v !== null)
            )
        );

        const response = await fetch(url, {
            method: "POST",
            headers,
            body
        });

        if (response.status === 500 || response.status === 502 || response.status === 503 || response.status === 504 || response.status === 408) {
            throw new Error(`Server Error: ${response.statusText}`);
        }

        try {
            return await response.json()
        }catch (e) {
            throw new Error(`API Error ${response.status}: ${JSON.stringify(e)}`);
        }

    }


}

// ESM Export
export default phoneValidator;

// CommonJS Export
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = phoneValidator;
}
