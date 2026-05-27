(function () {
  const data = window.siteData;

  if (!data) {
    return;
  }

  const select = (selector, scope = document) => scope.querySelector(selector);
  const selectAll = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const setText = (selector, value) => {
    selectAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const createLink = (item, className = "") => {
    const link = document.createElement("a");
    link.href = item.url || "#";
    link.textContent = item.label;
    if (className) {
      link.className = className;
    }
    if (item.url && !item.url.startsWith("#") && !item.url.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return link;
  };

  const appendAuthors = (container, authors) => {
    const name = "Hengyi Luo";
    authors.split(name).forEach((part, index, parts) => {
      if (part) {
        container.appendChild(document.createTextNode(part));
      }
      if (index < parts.length - 1) {
        const emphasis = document.createElement("em");
        emphasis.textContent = name;
        container.appendChild(emphasis);
      }
    });
  };

  const renderProfile = () => {
    const profile = data.profile;
    setText('[data-profile="name"]', profile.name);
    setText('[data-profile="title"]', profile.title);
    setText('[data-profile="affiliation"]', profile.affiliation);
    setText('[data-profile="summary"]', profile.summary);
    setText('[data-profile="email"]', profile.email);
    select('[data-profile="email"]').href = `mailto:${profile.email}`;
    document.title = `${profile.name} | Academic Website`;
  };

  const renderEducation = () => {
    const list = select("#education-list");
    list.innerHTML = "";
    data.education.forEach((education) => {
      const article = document.createElement("article");
      article.className = "education-item";

      const header = document.createElement("div");
      header.className = "item-header";

      const titleGroup = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = education.institution;
      titleGroup.appendChild(title);

      if (education.school) {
        const school = document.createElement("p");
        school.className = "resource-meta";
        school.textContent = education.school;
        titleGroup.appendChild(school);
      }

      const meta = document.createElement("p");
      meta.className = "publication-meta";
      meta.textContent = `${education.location} | ${education.period}`;

      const program = document.createElement("p");
      program.className = "authors";
      program.textContent = education.program;

      header.append(titleGroup, meta);
      article.append(header, program);

      if (education.details) {
        const details = document.createElement("p");
        details.textContent = education.details;
        article.appendChild(details);
      }

      list.appendChild(article);
    });
  };

  const renderPublications = () => {
    const list = select("#publication-list");
    list.innerHTML = "";

    data.publications.forEach((publication) => {
      const article = document.createElement("article");
      article.className = "publication-item";

      const meta = document.createElement("p");
      meta.className = "publication-meta";
      meta.textContent = `${publication.year} | ${publication.venue}`;

      const title = document.createElement("h3");
      title.textContent = publication.title;

      const authors = document.createElement("p");
      authors.className = "authors";
      appendAuthors(authors, publication.authors);

      article.append(meta, title, authors);

      if (publication.note) {
        const note = document.createElement("p");
        note.textContent = publication.note;
        article.appendChild(note);
      }

      if (publication.links.length) {
        const actions = document.createElement("div");
        actions.className = "inline-actions";
        publication.links.forEach((link) => actions.appendChild(createLink(link)));
        article.appendChild(actions);
      }

      list.appendChild(article);
    });
  };

  renderProfile();
  renderEducation();
  renderPublications();

  select("#current-year").textContent = new Date().getFullYear().toString();
})();
