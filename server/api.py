from flask import Flask
from flask_cors import CORS, cross_origin

import json

from get_data_functions import get_items



app = Flask(__name__)
cors = CORS(app, resources='http://localhost:3000') # remove "resources= ... " in production




@app.route('/get-items', methods=['POST'])
@cross_origin()
def test():
  
  items = get_items.get_items()

  return json.dump(items)




if __name__ == '__main__':
  app.run(port=3030, debug=True)