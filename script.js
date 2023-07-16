let mainVid = document.querySelector('.main-vid video');
let title = document.querySelector('.main-vid .title');
let playlist = document.querySelectorAll('.vid-playlist .vid');

playlist.forEach(vid => {
    vid.onclick = () => {
        playlist.forEach(video => video.classList.remove('active'));
        vid.classList.add('active');
        if(vid.classList.contains('active')){
            let src = vid.children[0].getAttribute('src');
            mainVid.src = src;
            let text = vid.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});