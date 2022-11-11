from flask import Flask, request, make_response
from flask_cors import CORS

import json

from api_modules.get_data_functions import get_items_from_bd



CLIENT_ADDRESS = 'http://localhost:3000' # used in development | change to [None] in production
PORT = 3030                              # site's port



app = Flask(__name__)
CORS(app)



# routing

@app.route('/get-items', methods=['POST'])
def test():
  
  search_for = request.json['searchfor']
  page = request.json['page']

  items = get_items_from_bd(search_for, page)

  return json.dump(items)




if __name__ == '__main__':
  app.run(port=PORT, debug=True)