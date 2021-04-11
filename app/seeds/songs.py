from app.models import db, Song

# Adds a demo user, you can add other users here if you want


def seed_songs():

    song = Song(name='Karachi', length=233, artist_id=1,
                url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Karachi.mp3')
    song0 = Song(name='Khayal', length=187, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Khayal+.mp3')
    song1 = Song(name='Marijuana', length=160, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Marijuana.mp3')
    song2 = Song(name='Rung', length=183, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Rung.mp3')
    song3 = Song(name='Bad Girl', length=194, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Bad+Girl.mp3')
    song4 = Song(name="Cold World", length=194, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Cold+World.mp3')
    song5 = Song(name="Late Night", length=177, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Late+Night.mp3')
    song6 = Song(name="On & On", length=192, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+On+%26+On.mp3')
    song7 = Song(name="Runway", length=175, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Runway.mp3')
    song8 = Song(name="Taare", length=243, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Taare.mp3')
    song9 = Song(name="Tuntana", length=282, artist_id=1,
                 url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Shamoon+Ismail+-+Tuntuna.mp3')

    song10 = Song(name='Bachana', length=208, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Bachana.mp3')
    song11 = Song(name='Larho Mujhey', length=382, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Larho+Mujhey.mp3')
    song12 = Song(name='To Kia Hua', length=287, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+To+Kia+Hua.mp3')
    song13 = Song(name='Yaar Naa Miley', length=241, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Yaar+Naa+Miley.mp3')
    song14 = Song(name='Apna Gham', length=241, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Apna+Gham.mp3')
    song15 = Song(name='Teri Har Baat', length=213, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Teri+Har+Baat.mp3')
    song16 = Song(name='Muntazir', length=291, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Muntazir.mp3')
    song17 = Song(name='Chorh Day', length=275, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Chorh+Day.mp3')
    song18 = Song(name='Bhool', length=274, artist_id=2,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Bilal+Khan+-+Bhool.mp3')

    song19 = Song(name='Duur', length=311, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Duur.mp3')
    song20 = Song(name='Mera Bichra Yaar', length=214, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Mera+Bichraa+Yaar.mp3')
    song21 = Song(name='Titilliyaan', length=420, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Titiliyaan.mp3')
    song22 = Song(name="Anjane", length=287, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Anjane.mp3')
    song23 = Song(name="Hai Koi Hum Jaisa", length=306, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Hai+Koi+Hum+Jaisa.mp3')
    song24 = Song(name="Kahani Muhabbat Ki", length=322, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Kahani+Muhabbat+Ki.mp3')
    song25 = Song(name="Sajni", length=315, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Sajni.mp3')
    song26 = Song(name="Najanay Kyun", length=498, artist_id=3,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Strings+-+Najanay+Kyun.mp3')

    song27 = Song(name='Jo Meray', length=327, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Jo+Meray.mp3')
    song28 = Song(name='Manwa Re', length=217, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Manwa+Re.mp3')
    song29 = Song(name='Paar Chanaa De', length=675, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Paar+Chanaa+De.mp3')
    song30 = Song(name='Saari Raat', length=444, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Saari+Raat.mp3')
    song31 = Song(name="Kuttay", length=151, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Kuttay.mp3')
    song32 = Song(name="Dil Ki Qasam", length=328, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Dil+Ki+Qasam.mp3')
    song33 = Song(name="Suno Ke Mein Houn Jawan",
                  length=231, artist_id=4, url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Suno+Ke+Mein+Hun+Jawan.mp3')
    song34 = Song(name="Nishaan", length=221, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Nishaan.mp3')
    song35 = Song(name="Do Dil", length=307, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Do+Dil.mp3')
    song36 = Song(name="Tum Hans Diye", length=287, artist_id=4,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Noori+-+Tum+Hans+Diye.mp3')

    song37 = Song(name='Chan Kithan', length=332, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Chan+Kithan+.mp3')
    song38 = Song(name='Dil Jalane Ki Batt', length=287, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/+Ali+Sethi+-+Dil+Jalane+Ki+Baat.mp3')
    song39 = Song(name='Ranjish Hi Sahi', length=371, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Ranjish+Hi+Sahi.mp3')
    song40 = Song(name="Rung", length=170, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Rung.mp3')
    song41 = Song(name="Dil Ki Khair", length=316, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Dil+Ki+Khair.mp3')
    song42 = Song(name="Dil Lagaayein", length=325, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Dil+Lagaayein.mp3')
    song43 = Song(name="Mahi Mera", length=320, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Mahi+Mera.mp3')
    song44 = Song(name="Mohabbat Karne Wale", length=257, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Mohabbat+Karne+Wale.mp3')
    song45 = Song(name="Chandni Raat", length=330, artist_id=5,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Ali+Sethi+-+Chandni+Raat.mp3')

    song46 = Song(name='Nazar', length=283, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Nazar.mp3')
    song47 = Song(name='Waasta', length=329, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Waasta.mp3')
    song48 = Song(name="Awaam", length=390, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Awaam.mp3')
    song49 = Song(name="Jawab De", length=274, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Jawab+De.mp3')
    song50 = Song(name="Molotov", length=157, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+Molotov.mp3')
    song51 = Song(name="INTRODUCTION", length=130, artist_id=6,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Faris+Shafi+-+INTRODUCTION.mp3')

    song52 = Song(name='Crack Rock', length=176, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Crack+Rock.mp3')
    song53 = Song(name='Pyramids', length=330, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Pyramids.mp3')
    song54 = Song(name='Nights', length=307, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Nights.mp3')
    song55 = Song(name='Pink + White', length=185, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Pink+%2B+White.mp3')
    song56 = Song(name='Self Control', length=250, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Self+Control.mp3')
    song57 = Song(name='Thinkin Bout You', length=201, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+Thinkin+Bout+You.mp3')
    song58 = Song(name='White Ferrari', length=249, artist_id=7,
                  url='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/songs/Frank+Ocean+-+White+Ferrari.mp3')

    db.session.add(song0)
    db.session.add(song1)
    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    db.session.add(song4)
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
    db.session.add(song25)
    db.session.add(song26)
    db.session.add(song27)
    db.session.add(song28)
    db.session.add(song29)
    db.session.add(song30)
    db.session.add(song31)
    db.session.add(song32)
    db.session.add(song33)
    db.session.add(song34)
    db.session.add(song35)
    db.session.add(song36)
    db.session.add(song37)
    db.session.add(song38)
    db.session.add(song39)
    db.session.add(song40)
    db.session.add(song41)
    db.session.add(song42)
    db.session.add(song43)
    db.session.add(song44)
    db.session.add(song45)
    db.session.add(song46)
    db.session.add(song47)
    db.session.add(song48)
    db.session.add(song49)
    db.session.add(song50)
    db.session.add(song51)
    db.session.add(song52)
    db.session.add(song53)
    db.session.add(song54)
    db.session.add(song55)
    db.session.add(song56)
    db.session.add(song57)
    db.session.add(song58)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_songs():
    db.session.execute('TRUNCATE songs;')
    db.session.commit()
