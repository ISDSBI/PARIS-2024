// Récupérer les éléments HTML vides
const journalTitle = document.getElementById("journal-title");
const journalSlogan = document.getElementById("journal-slogan");
const journalCallToAction = document.getElementById("journal-call-to-action");
const mainArticle = document.getElementById("main-article");
const articlesContainer = document.getElementById("articles-container");
const themesContainer = document.getElementById("themes-container");
const authorsContainer = document.getElementById("authors-container");
const practicalInfoContainer = document.getElementById("practical-info-container");
const portraitsContainer = document.getElementById("portraits-container");
const tempsRestant = document.getElementById("temps-restant");
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

// Récupérer les données du fichier JSON
fetch('data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Ajouter les informations du journal
    journalTitle.textContent = data.journal.nomJournal;
    journalSlogan.textContent = data.journal.phraseAccroche;
    journalCallToAction.textContent = data.journal.texteAppelAction;

    // Ajouter l'article principal
    const mainArticleTitle = document.createElement("h2");
    mainArticleTitle.textContent = data.journal.articlePrincipal.titre;
    mainArticle.appendChild(mainArticleTitle);

    const mainArticleDescription = document.createElement("p");
    mainArticleDescription.textContent = data.journal.articlePrincipal.description;
    mainArticle.appendChild(mainArticleDescription);

    const mainArticleDate = document.createElement("p");
    mainArticleDate.textContent = data.journal.articlePrincipal.date;
    mainArticle.appendChild(mainArticleDate);

    const mainArticleTheme = document.createElement("p");
    mainArticleTheme.textContent = data.journal.articlePrincipal.theme;
    mainArticle.appendChild(mainArticleTheme);

    const mainArticleImage = document.createElement("img");
    mainArticleImage.src = data.journal.articlePrincipal.image;
    mainArticleImage.alt = data.journal.articlePrincipal.titre;
    mainArticle.appendChild(mainArticleImage);
  })
  .catch((error) => console.error('Erreur lors de la lecture des données :', error));

// Compte à rebours avant les JO
const dateJO = new Date("July 26, 2024 00:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const distance = dateJO - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  tempsRestant.innerHTML = `Il reste ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes avant les JO de Paris 2024 !`;
}, 1000);

// Menu déroulant (burger menu)
burgerMenu.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

const apiKey = '63457623d3f04205875e289812a02a55';
const newsUrl = `https://newsapi.org/v2/everything?q=paris%202024&apiKey=${apiKey}&pageSize=15&sortBy=publishedAt`;

fetch(newsUrl)
  .then(response => response.json())
  .then(data => {
    // Récupérer les articles
    const articles = data.articles;

    // Afficher les articles sur la page HTML
    const newsContainer = document.getElementById('articles-container');

    articles.forEach(article => {
      const articleElement = document.createElement('article');

      const title = document.createElement('h3');
      title.textContent = article.title;
      console.log(title)
      
      const description = document.createElement('p');
      description.textContent = article.description;

      const source = document.createElement('p');
      source.textContent = article.source.name;

      const link = document.createElement('a');
      link.href = article.url;
      link.textContent = 'Lire la suite';

      articleElement.appendChild(title);
      articleElement.appendChild(description);
      articleElement.appendChild(source);
      articleElement.appendChild(link);

      newsContainer.appendChild(articleElement);
    });
  })
  .catch(error => console.log('Erreur lors de la récupération des actualités :', error));
