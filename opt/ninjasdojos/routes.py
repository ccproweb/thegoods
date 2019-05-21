from config import app, db
from controller import main, add_ninja, add_dojo


app.add_url_rule("/", view_func=main)
app.add_url_rule("/ninja", view_func=add_ninja, methods=["POST"])
app.add_url_rule("/dojo", view_func=add_dojo, methods=["POST"])

