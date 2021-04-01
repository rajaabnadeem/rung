from flask import Blueprint
from app.models import db, Song
from flask_login import login_required

song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
def getSongs():
    songs = Song.query.all()
    # print('=============', songs)
    songDict = {}
    for song in songs:
        songDict[song.id] = song.to_dict()
    # print(songDict, '=================')
    return songDict
