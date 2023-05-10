from flask import Flask
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

#CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/members")
def members():
    member=['Welcome to my website']
    r=jsonify(member)
    r.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return r


    #return {"members": ["Member1","Member2","Member3"]}

if __name__ == "__main__":
    app.run(debug=True)