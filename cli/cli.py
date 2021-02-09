from dotenv import dotenv_values

config = dotenv_values("../.env") 

import ccxt
# from variable id
exchange_id = 'coinbasepro'
exchange_class = getattr(ccxt, exchange_id)
exchange = exchange_class({
    'apiKey': config['CB_PRO_API_KEY'],
    'secret': config['CB_PRO_SECRET'],
    'password': config['CB_PRO_PASSWORD'],
    'timeout': 30000,
    'enableRateLimit': True,
})
print(dir(exchange))