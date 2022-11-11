from fastapi import FastAPI



from api_modules.get_data_functions import get_items_from_bd

app = FastAPI()

@app.post('/get-items')
async def send_items():
  items = get_items_from_bd
  return items
