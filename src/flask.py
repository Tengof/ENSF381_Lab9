from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib
app = Flask(__name__)
CORS(app)

userInfo = {
"alice": "password123", 
"bob": "secure456",
"charlie": "qwerty789",
"diana": "hunter2",
"eve": "passpass",
"frank": "letmein",
"grace": "trustno1",
"heidi": "admin123",
"ivan": "welcome1",
"judy": "password1"
}

@app.route("/validate_login", methods=['POST'])
def validateLogin():
    data = request.get_json()
    print(data['username'])
    username = data['username']
    if(username in userInfo):
        print(data['password'])
        password = data['password']
        if(password == userInfo[username]):
            print("Success, logging in")
            return {"success": True}
        else:
            print("Incorrect password")
            return {"success": False}
    else:
        print("Username does not exist")
        return {"success": False} 

@app.route('/predict_house_price', methods=['POST'])
def predictHousePrice():
    model = joblib.load("./src/random_forest_model.pkl")

    data = request.json

    cats = True if 'pets' in data and data['pets'] else False
    dogs = True if 'pets' in data and data['pets'] else False

    sample_data = [
        data['city'],
        data['province'],
        float(data['latitude']),
        float(data['longitude']),
        data['lease_term'],
        data['type'],
        float(data['beds']),
        float(data['baths']),
        float(data['sq_feet']),
        data['furnishing'],
        data['smoking'],
        cats,
        dogs
    ]

    sample_df = pd.DataFrame([sample_data], columns=[
        'city', 'province', 'latitude', 'longitude', 'lease_term',
        'type', 'beds', 'baths', 'sq_feet', 'furnishing',
        'smoking', 'cats', 'dogs'
    ])

    predicted_price = model.predict(sample_df)

    return jsonify({"predicted_price": float(predicted_price[0])})

if __name__ == '__main__':
    app.run()