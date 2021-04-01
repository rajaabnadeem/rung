from flask import Blueprint
from app.models import db, Song
from flask_login import login_required

song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
def getSongs():
    songs = Song.all()
    return songs
