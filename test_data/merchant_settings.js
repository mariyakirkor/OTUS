const data = {
    invalidProjectId: {
        "invalid-params": [
            {
                "name": "PublisherAccountContext.PAProjectID",
                "reason": "PAProjectID must be a valid numeric value"
            }
        ],
        "status": 400,
        "title": "Your request parameters didn't validate.",
        "type": "validation-error"
    },
    invalidMerchantId: {
        "invalid-params": [
            {
                "name": "PublisherAccountContext.PAMerchantID",
                "reason": "PAMerchantID must be a valid numeric value"
            }
        ],
        "status": 400,
        "title": "Your request parameters didn't validate.",
        "type": "validation-error"
    },
    notFoundMerchant: {
        "status": 422,
        "title": "Merchant not found",
        "type": "merchant-not-found"
    },
    unauthorized: {
        "status": 401,
        "title": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
        "type": "unauthorized"
    }
}

export default data;