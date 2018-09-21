<template>
  <div id="app">
    <aplayer :audio="audio1" :lrcType="1" />
    <aplayer :audio="audio2" :lrcType="1" />
    <aplayer :audio="audio3" :lrcType="1" />
    <aplayer :audio="audio4" :lrcType="1" />
    <aplayer :audio="audio5" :lrcType="1" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      audio1: {
        name: 'MIRAGE',
        artist: 'Armin_Van_Buuren',
        url: 'http://www.emspy.com/tar/01-armin_van_buuren-mirage.mp3',
        cover: 'https://p1.music.126.net/UhbkP71d9KTMsdNczCf2wA==/109951162986700564.jpg?param=300y300',
        lrc: '[by:Armin Van Buuren]\n[00:00.00] Armin Van Buuren - Mirage CD 2010\n',
      },
      audio2: {
        name: 'MIRAGE',
        artist: 'Armin_Van_Buuren',
        url: 'http://www.emspy.com/tar/01-armin_van_buuren-mirage.mp3',
        cover: 'https://p1.music.126.net/UhbkP71d9KTMsdNczCf2wA==/109951162986700564.jpg?param=300y300',
        lrc: '[by:Armin Van Buuren]\n[00:00.00] Armin Van Buuren - Mirage CD 2010\n',
      },
      audio3: {
        name: 'MIRAGE',
        artist: 'Armin_Van_Buuren',
        url: 'http://www.emspy.com/tar/01-armin_van_buuren-mirage.mp3',
        cover: 'https://p1.music.126.net/UhbkP71d9KTMsdNczCf2wA==/109951162986700564.jpg?param=300y300',
        lrc: '[by:Armin Van Buuren]\n[00:00.00] Armin Van Buuren - Mirage CD 2010\n',
      },
      audio4: {
        name: 'MIRAGE',
        artist: 'Armin_Van_Buuren',
        url: 'http://www.emspy.com/tar/01-armin_van_buuren-mirage.mp3',
        cover: 'https://p1.music.126.net/UhbkP71d9KTMsdNczCf2wA==/109951162986700564.jpg?param=300y300',
        lrc: '[by:Armin Van Buuren]\n[00:00.00] Armin Van Buuren - Mirage CD 2010\n',
      },
      audio5: {
        name: 'MIRAGE',
        artist: 'Armin_Van_Buuren',
        url: 'http://www.emspy.com/tar/01-armin_van_buuren-mirage.mp3',
        cover: 'https://p1.music.126.net/UhbkP71d9KTMsdNczCf2wA==/109951162986700564.jpg?param=300y300',
        lrc: '[by:Armin Van Buuren]\n[00:00.00] Armin Van Buuren - Mirage CD 2010\n',
      },
    };
  },
};
</script>
