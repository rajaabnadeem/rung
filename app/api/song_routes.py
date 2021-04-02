from flask import Blueprint
from app.models import db, Song, Artist
from flask_login import login_required

song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
def getSongs():
    songs = Song.query.all()
    artists = Artist.query.all()
    for artist in artists:
        print(artist.name)
    # print(artists)
    artistDict = {}
    for artist in artists:
        artistDict[artist.id] = artist.to_dict()
    # print(artistDict)
    # return {'all': [song.to_dict() for song in songs]}
    songDict = {}
    for song in songs:
        # song.artist_id = artists.id

        songDict[song.id] = song.to_dict()
    return songDict
