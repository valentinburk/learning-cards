$(document).ready(function() {
  const questions = getQuestions();
  const fragment = document.createDocumentFragment();
  const wrapper = document.querySelector('.swiper-wrapper');

  for(const q of questions) {
    const article = createArticle(q);
    fragment.appendChild(article);
  }

  wrapper.appendChild(fragment);

  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  $('.card').click(function() {
    $(this).toggleClass('flipped');
  });
});

/**
 * @description Creates DOM element for single cards
 * @param {object} question Question object
 * @returns {Element} Card DOM element
 */
function createArticle(question) {
  const article = createElementWithClass('article', 'swiper-slide');
  const card = createElementWithClass('div', 'card');

  // Generate front side of card
  const front = createElementWithClass('div', 'front');
  const frontContent = createElementWithClass('div', 'card-content');
  const title = createElementWithClass('p', 'front-text');
  const topic = createElementWithClass('p', 'topic');

  title.innerHTML = question.q;
  topic.innerHTML = question.t;

  frontContent.appendChild(title);
  frontContent.appendChild(topic);
  front.appendChild(frontContent);
  card.appendChild(front);

  // Generate back side of card
  const back = createElementWithClass('div', 'back');
  const backContent = createElementWithClass('div', 'card-content');

  backContent.innerHTML = question.a;

  back.appendChild(backContent);
  card.appendChild(back);

  // Append card itself to card block
  article.appendChild(card);

  return article;
}

/**
 * @description Returns the shuffled questions of type profided in query
 * @returns Array with questions
 */
function getQuestions() {
  const include = getQueryValue('t');
  const exclude = getQueryValue('e');
  let questions = shuffle(QUESTIONS);

  if (include !== null) {
    const includeTopics = include.split(',');
    questions = questions.filter(q => includeTopics.includes(q.t));
  }

  if (exclude !== null) {
    const excludeTopics = exclude.split(',');
    questions = questions.filter(q => !excludeTopics.includes(q.t));
  }

  return questions;
}

/**
 * @description Shuffles array
 * @param {Array} a Items An array containing the items
 * @returns {Array} Shuffled array of same content
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * @description Creates DOM element with provided CSS class
 * @param {string} element Elemet type like div, p or else
 * @param {string} css CSS class to be applied
 * @returns {Element} New element
 */
function createElementWithClass(element, css) {
  const e = document.createElement(element);

  if (typeof css !== 'undefined') {
    const classes = css.split(' ');
    for(const c of classes) {
      e.classList.add(c);
    }
  }

  return e;
}

/**
 * @description Returns value of specified parameter from url query
 * @param {string} name Name of query parameter
 * @returns {string} Value of parameter
 */
function getQueryValue(name) {
    name = name.replace(/[\[\]]/g, "\\$&");

    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(window.location.href);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}