
let person = {};

const toggleModal = () => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");

  modal.style.display = "flex";
  modalContent.textContent = `Thank you, ${person.name}, for supporting this cause!`;

  setTimeout(() => {
    closeModal();
  }, 3000);
};
const closeModal = () => {
  const modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
};

const hideSignedPetitionMessage = () => {
  const signedPetitionContainer = document.getElementById("signed-petition-message");
  signedPetitionContainer.style.display = "none";
};

const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;
  let petitionInputs = document.getElementById("petition-form").elements;
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  person = {
    name: petitionInputs["name"].value,
    institute: petitionInputs["hometown"].value,
    email: emailInput.value,
  };


  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].tagName === "INPUT" && petitionInputs[i].value.trim() === "") {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('error');
    emailError.textContent = "Invalid email format. Please include '.com'.";
    containsErrors = true;
  } else {
    emailInput.classList.remove('error');
    if (emailError) {
      emailError.textContent = "";
    }
  }

  if (!containsErrors) {
    addSignature();
    resetPetitionInputs(petitionInputs);
    toggleModal();
  }
  };

const isValidEmail = (email) => {
  return /\b.com\b/.test(email);
};

const addSignature = () => {
  const signatureParagraph = document.createElement("p");
  signatureParagraph.textContent = `🖋 ${person.name} from ${person.institute} (${person.email}) supports this.`;

  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(signatureParagraph);
};

const resetPetitionInputs = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text" || inputs[i].type === "email") {
      inputs[i].value = "";
    }
  }
};

const form = document.getElementById("petition-form");
form.addEventListener("submit", validateForm);

const button = document.getElementById("sign-now-button");
button.addEventListener("click", validateForm);

const closeModalButton = document.getElementById("close-modal-button");
closeModalButton.addEventListener("click", closeThanksModal);

const closeThanksModal = () => {
  const thanksModal = document.getElementById("thanks-modal");
  thanksModal.style.display = "none";
};

function toggleDarkMode() {
  // Implement logic to toggle dark mode
  const body = document.body;
  body.classList.toggle("dark-mode");
}

function toggleReduceMotion() {
  const videosContainer = document.querySelector(".videos-container");
  videosContainer.style.transition = "none";
  setTimeout(() => {
    videosContainer.style.transition = null;
  }, 0);
  }

function handleSearch() {
  const searchInput = document.getElementById("contact");
  const searchTerm = searchInput.value;
  console.log(`Search term: ${searchTerm}`);
}




document.addEventListener("DOMContentLoaded", function () {
  const signNowButton = document.getElementById("sign-now-button");
  signNowButton.addEventListener("click", validateForm);
  const themeButton = document.getElementById("theme-button");
  themeButton.addEventListener("click", toggleDarkMode);
  const reduceMotionButton = document.getElementById("reduce-motion-button");
  reduceMotionButton.addEventListener("click", toggleReduceMotion);
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", handleSearch);
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("theme-button");
  themeButton.addEventListener("click", function()
    document.body.classList.toggle("dark-mode");
                              
                              );



  
  const coverImage = document.getElementById("cover-image");

  coverImage.addEventListener("click", function () {
    coverImage.style.opacity = "0";

    coverImage.addEventListener("transitionend", function () {
      coverImage.remove();
      document.body.classList.remove("covered");
    });
  });
});
