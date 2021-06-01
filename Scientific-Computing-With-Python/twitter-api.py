import urllib.request, urllib.parse, urllib.error
import twurl
import oauth
import json

def augment(url, parameters):
	secrets = {'consumer_key': '', 'consumer_secret': '', 'token_key': '', 'token_secret': ''}
	consumer = oauth.OAutConsumer(secrets['consumer_key', secrets['consumer_secret']])
	token = oauth.OAuthToken(secrets['token_key', secrets['token_secret']])
	oauth_request = oauth.OAuthRequest.from_consumer_and_token(consumer, token= token, http_method='GET', http_url=url, parameters=parameters)
	oauth_request.sign_request(oauth.OAuthSignatureMethod_HMAC_SHA1(), consumer, token)
	return oauth_request.to_url()

serviceUrl = 'https://api.twitter.com/1.1/friends/list.json'

while True:
	print('')
	acct = input('Enter Twitter Account:')
	if len(acct) < 1: break

	url = twurl.augment(serviceUrl, {'screen_name': acct, 'count': 5})

	print('Retrieving ', url)
	connection = urllib.request.urlopen(url)
	data = connection.read().decode()
	headers = dict(connection.getheaders())
	print('Remaining', headers['x-rate-limit-remaining'])
	js = json.loads(data)
	print(json.dumps(js, indent = 4))

	for u in js['users']:
		print(u['screen_name'])
		s = u['status']['text']
		print('	', s[:50])	
	
