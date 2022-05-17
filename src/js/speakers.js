const speakers = [
  {
    image: 'speaker-1.jpg',
    name: 'Stewart Smith',
    occupation: 'Unity Technologies, USA',
    overview: 'The creator of Q.js (a drag-and-drop quantum circuit composer) and Handy.js (a hand pose capture and recognition toolkit for WebXR).',
  },
  {
    image: 'speaker-2.jpg',
    name: 'Tobias Koppers',
    occupation: 'Webpack, Germany',
    overview: 'Creator of webpack. Working full time on Open Source. Father of two children. Likes to play board games.',
  },
  {
    image: 'speaker-3.jpg',
    name: 'Eva Ferreira',
    occupation: 'Mabl, Argentina',
    overview: 'Eva is a Front-End developer who loves cats and makes many Harry Potter jokes. From Buenos Aires, Argentina Eva enjoys making websites and teaching HTML, CSS, SVG and JavaScript.',
  },
  {
    image: 'speaker-4.jpg',
    name: 'Evan You',
    occupation: 'Vue.js & Vite Creator, USA',
    overview: 'Evan is an independent software developer and the creator of the open source JavaScript framework Vue.js. Most of his work is open source and publicly available on GitHub',
  },
  {
    image: 'speaker-5.jpg',
    name: 'Krzysztof Cieślak',
    occupation: 'GitHub / GitHub Copilot team, Poland',
    overview: 'Krzysztof is a photographer, globetrotter open-source maintainer, and public speaker. He works as a Senior Research Engineer at GitHub Next, where he designs and builds the next generation of developer tools such as GitHub Copilot.',
  },
  {
    image: 'speaker-6.jpg',
    name: 'Yulia Startsev',
    occupation: 'Mozilla, Germany',
    overview: 'Yulia Startsev is a staff software engineer at Mozilla. She works on the SpiderMonkey Team, which develops the JavaScript engine for Firefox. She represents Mozilla at ECMA TC39, the standardizing body for JavaScript (officially known as EcmaScript).',
  },
  {
    image: 'speaker-7.jpg',
    name: 'Kyle Simpson',
    occupation: 'Software Engineer, Public Speaker, and Teacher, USA',
    overview: 'Kyle Simpson is a human first and then an engineer. His mission is to show the world that the culture of empathy and relational information exchange are keys to unlocking the full potential of every human in the workplace.',
  },
  {
    image: 'speaker-8.jpg',
    name: 'Naomi Meyer',
    occupation: 'Adobe, USA',
    overview: 'Naomi is a Software Development Engineer at Adobe on the Globalization, Core Services team where she leads internationalization and localization for Creative Cloud products.',
  },
];

function gentateSpeakerCard({
  image, name, occupation, overview,
}) {
  return `
  <div class="speaker">
    <img
      class="speaker__image"
      src="./assets/images/${image}"
      alt="Speaker 1"
    />
    <div class="speaker__body">
      <div class="speaker__name">${name}</div>
      <p class="speaker__occupation">${occupation}</p>
      <p class="speaker__about">${overview}</p>
    </div>
  </div>
  `;
}

const init = () => {
  const speakersContainerEl = document.querySelector('#speakers');

  if (!speakersContainerEl) return;

  speakersContainerEl.innerHTML = '';
  speakers.forEach((speaker) => {
    speakersContainerEl.innerHTML += gentateSpeakerCard(speaker);
  });
};

export default {
  init,
};