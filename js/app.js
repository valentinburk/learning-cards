$(document).ready(function() {
  const questions = shuffle(QUESTIONS);
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
  const title = createElementWithClass('h2');

  title.innerHTML = question.q;

  frontContent.appendChild(title);
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