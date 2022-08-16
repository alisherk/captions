import { fetchOptions } from './captions';

const showCaps = () => {
  const video = document.querySelector('video')!;

  const captionDiv = document.querySelector('#captions')!;

  const options = fetchOptions();

  let timer: ReturnType<typeof setTimeout> | undefined;

  let cachedIndex = 0;

  video.addEventListener('play', (_) => {
    console.log(cachedIndex);
    
    captionDiv.classList.add('active');

    captionDiv.textContent = options[cachedIndex].text;

    timer = setInterval(() => {
      captionDiv.textContent = options[cachedIndex].text;

     cachedIndex++
    }, 1200);
  });

  video.addEventListener('pause', (_) => {
    clearTimeout(timer);
  })

  video.addEventListener('ended', (_) => {
    clearTimeout(timer);
    
    captionDiv.textContent = '';

    captionDiv.classList.remove('active');
  });
};

showCaps();
