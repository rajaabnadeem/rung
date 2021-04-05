from app.models import db, Artist

# Adds a demo user, you can add other users here if you want


def seed_artists():

    artist = Artist(name='Frank Ocean',
                    img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/frankocean.JPG',
                    banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/frank.jpeg')
    artist2 = Artist(name='Shamoon Ismail',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/shamoon.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/shamoon.jpeg')
    artist3 = Artist(name='Strings',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/strings.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/strings.jpeg')
    artist4 = Artist(
        name='Noori',
        img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/noori.jpeg',
        banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/noori.jpeg')
    artist5 = Artist(name='Ali Sethi',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/alisethi.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/alisethi.jpeg')
    artist6 = Artist(name='Faris Shafi',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/farisshafi.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/faris.jpeg')

    db.session.add(artist)
    db.session.add(artist2)
    db.session.add(artist3)
    db.session.add(artist4)
    db.session.add(artist5)
    db.session.add(artist6)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_artists():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
