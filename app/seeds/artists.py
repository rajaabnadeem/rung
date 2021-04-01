from app.models import db, Artist

# Adds a demo user, you can add other users here if you want


def seed_artists():

    artist = Artist(name='Frank Ocean')
    artist2 = Artist(name='Shamoon Ismail')
    artist3 = Artist(name='Strings')
    artist4 = Artist(name='Noori')
    artist5 = Artist(name='Ali Sethi')

    db.session.add(artist)
    db.session.add(artist2)
    db.session.add(artist3)
    db.session.add(artist4)
    db.session.add(artist5)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_artists():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
