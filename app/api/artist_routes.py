from flask import Blueprint
from app.models import db, Song, Artist
from flask_login import login_required

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/')
def getArtists():
    artists = Artist.query.all()
    artistDict = {}
    for artist in artists:
        artistDict[artist.id] = artist.to_dict()
    return artistDict


@artist_routes.route('/<int:artist_id>')
def singleArtist(artist_id):
    artistSongs = Artist.query.all()
    artistDict = {}
    for artistSong in artistSongs:
        songs = artist.

    songs = Song.query.all()
    songDict = {}
    for song in songs:
        artist = song.artist.name
        songDict[song.id] = song.to_dict()
        songDict[song.id]['artist_name'] = artist
    return songDict
