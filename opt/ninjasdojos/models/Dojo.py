from sqlalchemy.sql import func
from config import db


# MODEL AND DB WORKS
class Dojo(db.Model):
    __tablename__ = "dojos"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45))
    city = db.Column(db.String(145))
    state = db.Column(db.String(45))
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())