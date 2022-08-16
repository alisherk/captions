import { fetchCaptions } from './captions';

const showCaps = () => {
  const video = document.querySelector('video')!;

  const captionDiv = document.querySelector('#captions')!;

  const captions = fetchCaptions();

  let timer: number | undefined;

  let index = 0;

  video.addEventListener('play', (_) => {
    const intervalSpeed = Math.floor(video.duration * 100); 

    captionDiv.classList.add('active');

    captionDiv.textContent = captions[index].text;

    timer = setInterval(() => {
      captionDiv.textContent = captions[index].text;

      if(index >= captions.length - 1) {
        index = Math.floor(Math.random() * captions.length);
      }

      index++;
    }, intervalSpeed);
  });

  video.addEventListener('pause', (_) => {
    clearInterval(timer);
  });

  video.addEventListener('ended', (_) => {
    clearInterval(timer);

    captionDiv.textContent = '';

    captionDiv.classList.remove('active');

    index = 0;
  });
};

showCaps();
