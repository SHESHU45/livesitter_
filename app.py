from flask import Flask, request, jsonify
from flask_pymongo import PyMongo


app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/livesitter'
mongo = PyMongo(app)

@app.route('/overlay/create', methods=['POST'])
def create_overlay():
    data = request.json
    position = data.get('position')
    size = data.get('size')
    content = data.get('content')

    if not (position and size and content):
        return jsonify({'error': 'Missing data for creating overlay'}), 400

    overlay = {
        'position': position,
        'size': size,
        'content': content
    }

    try:
        mongo.db.overlay_settings.insert_one(overlay)
        return jsonify({'message': 'Overlay created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Read all overlays
@app.route('/overlay/settings', methods=['GET'])
def get_overlay_settings():
    overlays = list(mongo.db.overlay_settings.find({}, {'_id': 0}))
    return jsonify(overlays), 200

# Update overlay
@app.route('/overlay/update/<overlay_id>', methods=['PUT'])
def update_overlay(overlay_id):
    data = request.json
    position = data.get('position')
    size = data.get('size')
    content = data.get('content')

    if not (position and size and content):
        return jsonify({'error': 'Missing data for updating overlay'}), 400

    try:
        mongo.db.overlay_settings.update_one(
            {'_id': overlay_id},
            {'$set': {'position': position, 'size': size, 'content': content}}
        )
        return jsonify({'message': 'Overlay updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Delete overlay
@app.route('/overlay/delete/<overlay_id>', methods=['DELETE'])
def delete_overlay(overlay_id):
    try:
        mongo.db.overlay_settings.delete_one({'_id': overlay_id})
        return jsonify({'message': 'Overlay deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
