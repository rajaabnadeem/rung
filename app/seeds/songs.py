from app.models import db, Song

# Adds a demo user, you can add other users here if you want


def seed_songs():

    song = Song(name='Song1', length='3:30', artist_id=1)
    demo = User(username='demo',
                first_name='Demo',
                last_name='User',
                email='demo@user.com',
                hashed_password=generate_password_hash('password'))

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
