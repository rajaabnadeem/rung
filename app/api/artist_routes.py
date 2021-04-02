from flask import Blueprint
from app.models import db, Song, Artist
from flask_login import login_required

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/')
def getArtists():
    artists = Artist.query.all()
    # return {'all': [song.to_dict() for song in songs]}
    artistDict = {}
    for artist in artists:
        artistDict[artist.id] = artist.to_dict()
    return artistDict
