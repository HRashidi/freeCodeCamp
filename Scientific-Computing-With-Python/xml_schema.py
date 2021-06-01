import xml.etree.ElementTree as ET

data = '''<person>
	<name>Chunk</name>
	<phone type="intl">
		+1 734 303 4456
	</phone>
	<email hide="yes" />
</person>'''

tree = ET.fromstring(data)
print('Name: ', tree.find('name').text)
print('Attr: ', tree.find('email').get('hide'))

stuff = '''<stuff>
	<users>
		<user x="2">
			<id>007</id>
			<name>Hossein</name>
		</user>
		<user x="3">
			<id>009</id>
			<name>Maohammad</name>
		</user>
	</users>
</stuff>'''

tree = ET.fromstring(stuff)
lst = tree.findall('users/user')
print("User Count: ", len(lst))
for user in lst:
	print("ID: ",  user.find("id").text)
	print("Name: ", user.find("name").text)
	print("Attr: ", user.get("x"))