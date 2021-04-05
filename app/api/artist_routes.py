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


@artist_routes.route('/')
def singleArtist(artist_id):
    artists_data = Artist.query.filter(Artist.id == artist_id)
    artistSongs = {}
    for artist_data in artists_data:
        for artist_data.song in artist_data.songs:
            artistSongs[artist_data.song.id] = artist_data.to_dict()
    return artistSongs
