#
# now, instead of real database, i use simple json
#


import json


def get_items_from_bd(search_for, page): # -> [{item}, {item}, ..]

  json_path = '../data-base--items.json'
  items = None
  

  # getting json
  with open(json_path, 'r', encoding='utf-8') as read_file:
    items = json.load(read_file)


  # sorting by "searchFor" parameter (men/women/all)
  if search_for != 'all':

    for item in items:
      if item['for'] != search_for:
        items.remove(item)


  items.headers.add("Access-Control-Allow-Origin", "*")
  return items