from flask import Blueprint
from app.models import db, Song, Artist
from flask_login import login_required

song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
def getSongs():
    songs = Song.query.all()
    songDict = {}
    for song in songs:
        artist = song.artist.name
        songDict[song.id] = song.to_dict()
        songDict[song.id]['artist_name'] = artist
    return songDict


# @song.routes.route('/<int:artist_id>')
# def getArtistSongs(artist_id):
#     songs =
