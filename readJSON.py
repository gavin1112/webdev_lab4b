import json

# Open the JSON file
with open('students.json') as file:
    data = json.load(file)

# Access the information
student = data['Students'][0]
name = student['name']

# matric_no = data['matricNo']
# age = data['age']
# address = data['address']
# subjects = data['subjects']

# Print the information
print("Name:", name)
# print("Matric No:", matric_no)
# print("Age:", age)
# print("Address:", address)
# print("Subjects:", subjects)