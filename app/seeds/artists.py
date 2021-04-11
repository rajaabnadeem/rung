from app.models import db, Artist

# Adds a demo user, you can add other users here if you want


def seed_artists():

    artist = Artist(name='Shamoon Ismail',
                    img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/shamoon.jpeg',
                    banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/shamoon.jpeg', bio='Shamoon Ismail is an Islamabad-based singer, songwriter, composer and multi-instrumentalist known for his signature blend of "Punjabi and blues". Shamoon Ismail started releasing his music on bandcamp and soundcloud in his career with the help of his friends and managed to gain some attraction for the kind of music he was making. He usually performs live on local university campuses and also performs regionally in popular music festivals like Music Mela and Lahore Music Meet. He released his first music video "Tuntuna" on YouTube which gained attention from not only the local Pakistani audience but also from fans across the Indian border. He has collaborated with artists such as MRKLE, Talal Qureshi, Abdullah Qureshi, Haider Mustehsan, Mooroo, Ghauri, Young Stunners, Asim Azhar, and Raamis.')

    artist2 = Artist(name='Bilal Khan',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/bilalkhan.png',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/bilalkhan.jpeg',
                     bio='Bilal Khan is a Pakistani musician, actor, and YouTuber. He released his debut album Umeed in 2009. Singles released included "Bachana", "Tou Kia Hua", "Larho Mujhey", "Kabhi Gham Na Aey", and Mata-e-Jaan Hai Tu. In 2012, he has been nominated for Best Album at the 11th Lux Style Awards for the album "Umeed". Khan holds a BSc (Hons) degree in Politics and Economics from Lahore University of Management Sciences (LUMS) and later studied from Virginia Commonwealth University.')

    artist3 = Artist(name='Strings',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/strings.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/strings.jpeg',
                     bio='Strings are a Pakistani pop/rock band composed of two members, plus four live band members from Karachi, Pakistan. The band was initially formed by four college students—Bilal Maqsood (vocals and guitars), Faisal Kapadia (vocals), Rafiq Wazir Ali (synthesizer) and Kareem Bashir Bhoy (bass guitar)—in 1988.In 1992 the quartet disbanded, only to make a comeback with Maqsood and Kapadia in 2000. While the initial band rode the new wave of Pakistani pop music, the later lineup ushered a revival in the Pakistani music industry.')

    artist4 = Artist(name='Noori',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/noori.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/noori.jpeg',
                     bio='Noori is a Pakistani rock band from Lahore, Punjab, Pakistan, formed in 1996. The group was formed by songwriter, lead vocalist, and guitarist, Ali Noor, along with his younger brother Ali Hamza, who were soon joined by bassist Muhammad Ali Jafri and drummer Salman Albert. Since the inception of the band, there had been many changes in the line-up; the only consistent members being, brothers, Ali Noor and Ali Hamza. The band produced songs such as Suno Ke Mein Hoon Jawaan and the epic Manwa Re, which are hummed by fans to date.')

    artist5 = Artist(name='Ali Sethi',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/alisethi.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/alisethi.jpeg',
                     bio='Ali Sethi is a Pakistani writer and musician. Sethi was globally recognized for his debut novel, The Wish Maker, published in 2009. In 2013, he began focusing on his music career and made his film debut as a singer in The Reluctant Fundamentalist (2013). Later, he released numerous cover singles, and appeared on several seasons of the series Coke Studio. Sethi began releasing original music in 2019, and collaborated with producer Noah Georgeson.')

    artist6 = Artist(name='Faris Shafi',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/farisshafi.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/farisshafi.jpeg',
                     bio="Faris Shafi is a Pakistani rapper and artist. His singles Jawab De and Awaam are very popular song amongst his fans. He has also done projects like Sprite ad's play back singer/rapper and Roar playback singer/rapper.")

    artist7 = Artist(name='Frank Ocean',
                     img='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/artist_img/frank.jpeg',
                     banner='https://rung-dev.s3.ap-south-1.amazonaws.com/seed/banners/frankocean.jpeg', bio='Frank Ocean (born Christopher Edwin Breaux, October 28, 1987) is an American singer, songwriter, record producer, photographer, and visual artist. Recognized for his idiosyncratic musical style, introspective and elliptical songwriting, and wide vocal range, Ocean is among the most acclaimed artists of his generation.')

    db.session.add(artist)
    db.session.add(artist2)
    db.session.add(artist3)
    db.session.add(artist4)
    db.session.add(artist5)
    db.session.add(artist6)
    db.session.add(artist7)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_artists():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
