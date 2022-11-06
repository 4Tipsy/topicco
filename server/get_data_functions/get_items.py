#
# now instead of real i use simple json
#


import json


def get_items(searchFor, page): # -> [{item}, {item}, ..]

  json_path = '../data-base--items.json'
  items = None

  with open(json_path, 'r', encoding='utf-8') as read_file:
    items = json.load(read_file)


  # sorting by "searchFor" parameter
  if searchFor != 'all':

    for item in items:
      if item['for'] != searchFor:
        items.remove(item)


  # sorting by "page" parameter
  how_many_on_page = 10

  slice_start = (page-1) * how_many_on_page
  slice_end = slice_start + how_many_on_page


  items = items[slice_start: slice_end]


  return items