from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(25), nullable=False)
    last_name = db.Column(db.String(25), nullable=False)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    songs = db.relationship('Song', secondary='users_songs')
    playlists = db.relationship('Playlist', back_populates='playlists')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'hashed_password': self.hashed_password
        }


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    length = db.Column(db.Time, nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    album_id = db.Column(db.Integer, db.ForeignKey('albums.id'))

    users = db.relationship('User', secondary='user_songs')
    playlists = db.relationship('Playlist', secondary='song_playlists')
    artists = db.relationship('Artist', back_populates='artists')
    albums = db.relationship('Album', back_populates='albums')


class UserSong(db.Model):
    __tablename__ = 'user_songs'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'))

    user = db.relationship(User, backref=db.backref('user_songs'))
    song = db.relationship(Song, backref=db.backref('user_songs'))


class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    img = db.Column(db.String(999), nullable=True)
    bio = db.Column(db.String(999), nullable=False)

    songs = db.relationship('Song', back_populates='songs')


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    length = db.Column(db.Time, nullable=True)
    album_art = db.Column(db.String(999), nullable=False)

    songs = db.relationship('Song', back_populates='songs')


class Playlist(db.Model):
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    img = db.Column(db.String(999), nullable=True)
    description = db.Column(db.String(999), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    users = db.relationship('User', back_populates='users')
    songs = db.relationship('Song', secondary='song_playlists')


class SongPlaylist(db.Model):
    __tablename__ = 'song_playlists'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'))
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'))

    songs = db.relationship('Song', backref=db.backref('songs'))
    playlists = db.relationship('Playlist', backref=db.backref('playlists'))
