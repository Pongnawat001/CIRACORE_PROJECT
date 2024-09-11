import pygsheets
import datetime

# Authorize and open the Google Sheet
gc = pygsheets.authorize(service_file='cirasheet002.json')
sheet = gc.open_by_key("1dqQ7B9-h4A2LkxntL7rjmdetHUOLDTPmEA4iWWR_sLE")
worksheet = sheet[0]

# Get all the existing data in the worksheet
cells = worksheet.get_all_values(include_tailing_empty_rows=False, include_tailing_empty=False, returnas='matrix')
last_row = len(cells)

# Get the current date and time
dd = datetime.datetime.now()

# Sample payload data (you need to have this in your actual code)
# payload = ...

# Result array from payload
Result = payload["FaceRec"]["face_array"]

# Loop through each object in the result array
for objs in Result:
	if objs["name"] != "UNKNOWN":
		# Create the data list with the required information
		data = [dd.strftime('%Y-%m-%d'), dd.strftime('%H:%M:%S'), objs["name"]]
		
		# Insert the data into the worksheet
		worksheet.insert_rows(last_row, number=1, values=data, inherit=True)
		
		# Update the last_row counter
		last_row += 1
