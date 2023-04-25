"""
Starting point:
    a well formed list in a txt file (?)


Output:
    a txt list without quotes

Sources:
    https://stackoverflow.com/questions/10641893/convert-javascript-array-to-python-list
"""

json_string = open('javaScriptInTXTFile.txt', 'r')
#json_string = '["a","b",null,null,"e"]'  # passed from JavaScript

try:
    import simplejson as json
except (ImportError,):
    import json

result = json.loads(json_string)

with open('output', 'w') as o:
    o.write("\n".join(result))
    o.close()

