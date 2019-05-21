from sqlalchemy.sql import func
from config import db

class User(db.Model):	
    __tablename__ = "users"	
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(45))
    last_name = db.Column(db.String(45))
    dojos_id = db.Column(db.Integer, db.ForeignKey("dojos.id"))
    dojo = db.relationship("Dojo", foreign_keys=[dojos_id], backref="ninjas" , cascade="all")
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    

    def full_name(self):
        return self.first_name + ' ' + self.last_name

    @classmethod
    def add_new_ninja(cls, form_data):
        new_ninja = cls(
            first_name=form_data['first_name'],
            last_name=form_data['last_name'],
            dojos_id=form_data['dojo']
        )
        db.session.add(new_ninja)
        db.session.commit()
        return new_ninja
