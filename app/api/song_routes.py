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


# @artist_routes.route('/<int:artist_id>')
# def getArtistSongs(artist_id):
#     artists_data = Artist.query.filter(Artist.id == artist_id)
#     artistSongs = {}
#     for artist_data in artists_data:
#         for artist_data.song in artist_data.songs:
#             artistSongs[artist_data.song.id] = artist_data.song.to_dict()
#     return artistSongs

# @song.routes.route('/<int:artist_id>')
# def getArtistSongs(artist_id):
#     songs =
