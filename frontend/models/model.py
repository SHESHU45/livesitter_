from pymongo import PyMongo

mongo = PyMongo()

class OverlaySettings:
    def __init__(self, position, size, content):
        self.position = position
        self.size = size
        self.content = content

    @staticmethod
    def from_dict(data):
        return OverlaySettings(
            position=data['position'],
            size=data['size'],
            content=data['content']
        )

    def to_dict(self):
        return {
            'position': self.position,
            'size': self.size,
            'content': self.content
        }

    @staticmethod
    def save(overlay_data):
        try:
            mongo.db.overlay_settings.insert_one(overlay_data)
            return True
        except Exception as e:
            print("Error saving overlay:", str(e))
            return False

    @staticmethod
    def get_all():
        return list(mongo.db.overlay_settings.find({}, {'_id': 0}))

    @staticmethod
    def update(overlay_id, overlay_data):
        try:
            mongo.db.overlay_settings.update_one(
                {'_id': overlay_id},
                {'$set': overlay_data}
            )
            return True
        except Exception as e:
            print("Error updating overlay:", str(e))
            return False

    @staticmethod
    def delete(overlay_id):
        try:
            mongo.db.overlay_settings.delete_one({'_id': overlay_id})
            return True
        except Exception as e:
            print("Error deleting overlay:", str(e))
            return False
