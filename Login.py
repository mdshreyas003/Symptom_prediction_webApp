
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://mdshreyas:mdshreyas123@cluster0.we9t87y.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
def login(data):
    try:
        client.admin.command('ping')
        db = client['users']
        collection = db['data']
        user = collection.find_one(data)
        print("Successfully", user)
        return user
    except Exception as e:
        print(e)

def signup(data):
    try:
        client.admin.command('ping')
        db = client['users']
        collection = db['data']
        user = collection.insert_one(data)
        print("Successfully")
        return user
    except Exception as e:
        print(e)