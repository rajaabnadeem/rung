from flask import Blueprint, jsonify
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


# @artist_routes.route('/<int:artist_id>')
# def getArtistSongs(artist_id):
#     artists_data = Artist.query.filter(Artist.id == artist_id)
#     artist: {}
#     for artist_data in artists_data:
#         for artist_data.song in artist_data.songs:
#             artist[artist_data.song.id] = artist_data.song.to_dict()
#         return artist
    # artist = artist_data.to_dict()

@artist_routes.route('/<int:artist_id>')
def getArtistSongs(artist_id):
    artists_data = Artist.query.filter(Artist.id == artist_id)
    artistData = {}
    artistSongs = {}
    for artist_data in artists_data:
        artistData = artist_data.to_dict()
        for artist_data.song in artist_data.songs:
            # artistSongs.append(artist_data.song)
            artistSongs[artist_data.song.id] = artist_data.song.to_dict()
    artistData['songs'] = artistSongs
    return artistData


# @artist_routes.route('/<int:artist_id>/')
# def getArtistData(artist_id):
#     artists_data = Artist.query.filter(Artist.id == artist_id)
#     artistData = {}
#     for artist_data in artists_data:
#         artistData = artist_data.to_dict()
#     return artistData
