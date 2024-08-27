from config import db

class Menu(db.model):
    ItemId = db.Column(db.String(120), primary_key=True)
    MktgDescription = db.Column(db.String(240), unique=False, nullable=False)
    Category = db.Column(db.String(120), unique=False, nullable=False)
    Price = db.Column(db.Numberic(precision=400, scale=2))