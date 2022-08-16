import { fetchCaptions } from './captions';

const showCaps = () => {
  const video = document.querySelector('video')!;

  const captionDiv = document.querySelector('#captions')!;

  const captions = fetchCaptions();

  let timer: number | undefined;

  let index = 0;

  video.addEventListener('play', (_) => {
    captionDiv.classList.add('active');

    captionDiv.textContent = captions[index].text;

    timer = setInterval(() => {
      captionDiv.textContent = captions[index].text;

      index++;
    }, 1200);
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
