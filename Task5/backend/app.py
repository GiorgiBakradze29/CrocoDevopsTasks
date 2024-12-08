#web-app
from flask import Flask, jsonify

app = Flask(__name__)
# default localhost:5000 route
@app.route('/', methods=['GET'])
def home():
    return jsonify(message="Welcome to the Flask backend!")
# /api route
@app.route('/api', methods=['GET'])
def api():
    return jsonify(message="Hello from Flask backend!")
#Runs the application when the script is executed. Application runs on port 5000.
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
