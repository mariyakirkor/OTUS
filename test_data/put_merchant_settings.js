const data = {
    request: {
        requiredFiels: {
            "fee_fx": {
                "payer": "customer"
            },
            "fee_msb": {
                "payer": "customer"
            },
            "fee_transaction": {
                "payer": "merchant"
            },
            "fee_xsolla": {
                "payer": "customer"
            },
            "secret": "Vx7$5t52c",
            "services": [
            ]
        },

        allFields: {
            "fee_merchant": "0.12",
            "fee_transaction": {
                "value": "0.02",
                "payer": "merchant"
            },
            "fee_xsolla": {
                "value": "0.05",
                "payer": "merchant"
            },
            "fee_msb": {
                "value": "0.05",
                "payer": "merchant"
            },
            "fee_fx": {
                "value": "0.01",
                "payer": "merchant"
            },
            "secret": "Bz3&W!GcUzTKmM#onGNFSr@clxW7ZK*V7FIA",
            "webhook_url": "https://test.com",
            "services": [
                { "id": "c2f22ce2-1b2f-4182-9ffa-1d1a91339a46", "enabled": true }
            ]
        },

        shortSecret: {
            "fee_fx": {
                "payer": "customer"
            },
            "fee_msb": {
                "payer": "customer"
            },
            "fee_transaction": {
                "payer": "merchant"
            },
            "fee_xsolla": {
                "payer": "customer"
            },
            "secret": "1234567",
            "services": [
            ]
        },

        notOneOfPayer: {
            "fee_fx": {
                "payer": "qwerty"
            },
            "fee_msb": {
                "payer": "customer"
            },
            "fee_transaction": {
                "payer": "merchant"
            },
            "fee_xsolla": {
                "payer": "customer"
            },
            "secret": "Vx7$5t52c",
            "services": [
            ]
        }
    },
    response: {
        shortSecret: {
            "invalid-params": [
                {
                    "name": "UpdateMerchantForPublisherAccountRequest.Secret",
                    "reason": "Secret must be at least 8 characters in length"
                }
            ],
            "status": 400,
            "title": "Your request parameters didn't validate.",
            "type": "validation-error"
        },

        notOneOfPayer: {
            "invalid-params": [
                {
                    "name": "UpdateMerchantForPublisherAccountRequest.FeeFx.Payer",
                    "reason": "Key: 'UpdateMerchantForPublisherAccountRequest.FeeFx.Payer' Error:Field validation for 'Payer' failed on the 'fee_payer' tag",
                }
            ],
            "status": 400,
            "title": "Your request parameters didn't validate.",
            "type": "validation-error"
        }
    }
}

export default data;