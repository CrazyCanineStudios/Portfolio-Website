function openModal(title, overview, engine, language, independent, functionality, duration) {
    var modal = document.getElementById("portfolioModal");
    var modalTitle = modal.querySelector(".portfolio-modal-title");
    var modalParagraphs = modal.querySelectorAll(".text-justify p");

    modalTitle.textContent = title;
    modalParagraphs[0].innerHTML = "<strong>Project Overview:</strong> " + overview;
    modalParagraphs[1].innerHTML = "<strong>Game Engine:</strong> " + engine;
    modalParagraphs[2].innerHTML = "<strong>Programming Language:</strong> " + language;
    modalParagraphs[3].innerHTML = "<strong>Independent:</strong> " + independent;
    modalParagraphs[4].innerHTML = "<strong>Key Game Functionality Implemented:</strong> " + functionality;
    modalParagraphs[5].innerHTML = "<strong>Duration:</strong> " + duration;
    
    // Show the modal
    $(modal).modal("show");
}

function openModalWithVideo(title, overview, iframeSrc, engine, language, independent, functionality, duration) {
    var modal = document.getElementById("portfolioModalWithVideo");
    var modalTitle = modal.querySelector(".portfolio-modal-title");
    var modalParagraphs = modal.querySelectorAll(".text-justify p");
    var modalIframe = modal.querySelector("iframe");

    modalTitle.textContent = title;
    modalParagraphs[0].innerHTML = "<strong>Project Overview:</strong> " + overview;
    modalParagraphs[1].innerHTML = "<strong>Game Engine:</strong> " + engine;
    modalParagraphs[2].innerHTML = "<strong>Programming Language:</strong> " + language;
    modalParagraphs[3].innerHTML = "<strong>Independent:</strong> " + independent;
    modalParagraphs[4].innerHTML = "<strong>Key Game Functionality Implemented:</strong> " + functionality;
    modalParagraphs[5].innerHTML = "<strong>Duration:</strong> " + duration;

    // Update iframe src
    modalIframe.src = iframeSrc;

    // Show the modal
    $(modal).modal("show");
}
