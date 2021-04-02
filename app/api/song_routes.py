from flask import Blueprint
from app.models import db, Song, Artist
from flask_login import login_required

song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
def getSongs():
    # songs = Song.query.join(Artist.name).all()
    songs = Song.query.all()
    # print(songs.to_dict())
    songDict = {}
    for song in songs:
        print(song.to_dict())
        songDict[song.id] = song.to_dict()
        # songDict[song.id]['name'] = Artist.name
    return songDict

    # artists = Artist.query.all()
    # for artist in artists:
    # artistDict = {}
    # for artist in artists:
    #     artistDict[artist.id] = artist.to_dict()
    # return {'all': [song.to_dict() for song in songs]}
