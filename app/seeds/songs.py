from app.models import db, Song

# Adds a demo user, you can add other users here if you want


def seed_songs():

    song = Song(name='Crack Rock', length=176, artist_id=1,
                url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Crack+Rock.mp3')
    song1 = Song(name='Pyramids', length=330, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Pyramids.mp3')
    song2 = Song(name='Nights', length=307, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Nights.mp3')
    song3 = Song(name='Pink + White', length=185, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Pink+%2B+White.mp3')
    song5 = Song(name='Self Control', length=250, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Self+Control.mp3')
    song6 = Song(name='Thinkin Bout You', length=201, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Thinkin+Bout+You.mp3')
    song7 = Song(name='White Ferrari', length=249, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+White+Ferrari.mp3')
    song8 = Song(name='Karachi', length=233, artist_id=2,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Karachi.mp3')
    song9 = Song(name='Khayal', length=187, artist_id=2,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Khayal+.mp3')
    song10 = Song(name='Marijuana', length=160, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Marijuana.mp3')
    song11 = Song(name='Rung', length=183, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Rung.mp3')
    song12 = Song(name='Bad Girl', length=194, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Bad+Girl.mp3')
    song13 = Song(name='Duur', length=311, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Duur.mp3')
    song14 = Song(name='Mera Bichra Yaar', length=214, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Mera+Bichraa+Yaar.mp3')
    song15 = Song(name='Titilliyaan', length=420, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Titiliyaan.mp3')
    song16 = Song(name='Jo Meray', length=327, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Jo+Meray.mp3')
    song17 = Song(name='Manwa Re', length=217, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Manwa+Re.mp3')
    song18 = Song(name='Paar Chanaa De', length=675, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Paar+Chanaa+De.mp3')
    song19 = Song(name='Saari Raat', length=444, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Saari+Raat.mp3')
    song20 = Song(name='Chan Kithan', length=332, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Chan+Kithan+.mp3')
    song21 = Song(name='Dil Jalane Ki Batt', length=287, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/+Ali+Sethi+-+Dil+Jalane+Ki+Baat.mp3')
    song22 = Song(name='Ranjish Hi Sahi', length=371, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Ranjish+Hi+Sahi.mp3')
    song23 = Song(name='Nazar', length=283, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Nazar.mp3')
    song24 = Song(name='Waasta', length=329, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Waasta.mp3')

    db.session.add(song)
    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    # db.session.add(song4)
    db.session.add(song5)
    db.session.add(song6)
    db.session.add(song7)
    db.session.add(song8)
    db.session.add(song9)
    db.session.add(song10)
    db.session.add(song11)
    db.session.add(song12)
    db.session.add(song13)
    db.session.add(song14)
    db.session.add(song15)
    db.session.add(song16)
    db.session.add(song17)
    db.session.add(song18)
    db.session.add(song19)
    db.session.add(song20)
    db.session.add(song21)
    db.session.add(song22)
    db.session.add(song23)
    db.session.add(song24)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_songs():
    db.session.execute('TRUNCATE songs;')
    db.session.commit()
