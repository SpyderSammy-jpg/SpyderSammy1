// Ads
// settings.js
document.addEventListener("DOMContentLoaded", () => {
  // FORCE ADS OFF
  localStorage.setItem("ads", "off");

  function adChange(selectedValue) {
    if (selectedValue === "default") {
      localStorage.setItem("ads", "on");
    } else if (selectedValue === "popups") {
      localStorage.setItem("ads", "popups");
    } else if (selectedValue === "off") {
      localStorage.setItem("ads", "off");
    }
  }

  const adTypeElement = document.getElementById("adType");

  if (adTypeElement) {
    adTypeElement.addEventListener("change", function () {
      const selectedOption = this.value;
      adChange(selectedOption);
    });

    const storedAd = localStorage.getItem("ads");
    if (storedAd === "on") {
      adTypeElement.value = "default";
    } else if (storedAd === "popups") {
      adTypeElement.value = "popups";
    } else if (storedAd === "off") {
      adTypeElement.value = "off";
    } else {
      adTypeElement.value = "default";
    }
  }
  // Makes the custom icon and name persistent
  const iconElement = document.getElementById("icon");
  const nameElement = document.getElementById("name");
  const customIcon = localStorage.getItem("CustomIcon");
  const customName = localStorage.getItem("CustomName");
  if (iconElement) iconElement.value = customIcon || "";
  if (nameElement) nameElement.value = customName || "";

  if (localStorage.getItem("ab") === "true") {
    const abSwitch = document.getElementById("ab-settings-switch");
    if (abSwitch) abSwitch.checked = true;
  }
});

// Dyn
document.addEventListener("DOMContentLoaded", () => {
  function pChange(selectedValue) {
    if (selectedValue === "uv") {
      localStorage.setItem("uv", "true");
      localStorage.setItem("dy", "false");
    } else if (selectedValue === "dy") {
      localStorage.setItem("uv", "false");
      localStorage.setItem("dy", "true");
    }
  }

  const pChangeElement = document.getElementById("pChange");

  if (pChangeElement) {
    pChangeElement.addEventListener("change", function () {
      const selectedOption = this.value;
      pChange(selectedOption);
    });

    const storedP = localStorage.getItem("uv");
    if (storedP === "true") {
      pChangeElement.value = "uv";
    } else if (localStorage.getItem("dy") === "true" || localStorage.getItem("dy") === "auto") {
      pChangeElement.value = "dy";
    } else {
      pChangeElement.value = "uv";
    }
  }
});

// Key
let eventKey = localStorage.getItem("eventKey") || "`";
let eventKeyRaw = localStorage.getItem("eventKeyRaw") || "`";
let pLink = localStorage.getItem("pLink") || "https://classroom.google.com/";

document.addEventListener("DOMContentLoaded", () => {
  const keyInput = document.getElementById("eventKeyInput");
  const lInput = document.getElementById("linkInput");
  if (keyInput) keyInput.value = eventKeyRaw;
  if (lInput) lInput.value = pLink;

  const selectedOption = localStorage.getItem("selectedOption");
  if (selectedOption) {
    updateHeadSection(selectedOption);
  }
});

const eventKeyInput = document.getElementById("eventKeyInput");
if (eventKeyInput) {
  eventKeyInput.addEventListener("input", () => {
    eventKey = eventKeyInput.value.split(",");
  });
}

const linkInput = document.getElementById("linkInput");
if (linkInput) {
  linkInput.addEventListener("input", () => {
    pLink = linkInput.value;
  });
}

function saveEventKey() {
  eventKey = eventKeyInput.value.split(",");
  eventKeyRaw = eventKeyInput.value;
  localStorage.setItem("eventKey", JSON.stringify(eventKey));
  localStorage.setItem("pLink", pLink);
  localStorage.setItem("eventKeyRaw", eventKeyRaw);
  window.location.reload();
}

const dropdown = document.getElementById("dropdown");
if (dropdown) {
  const options = dropdown.getElementsByTagName("option");
  const sortedOptions = Array.from(options).sort((a, b) => a.textContent.localeCompare(b.textContent));
  while (dropdown.firstChild) {
    dropdown.removeChild(dropdown.firstChild);
  }
  for (const option of sortedOptions) {
    dropdown.appendChild(option);
  }
}

function saveIcon() {
  const iconElement = document.getElementById("icon");
  if (iconElement) {
    const iconValue = iconElement.value;
    localStorage.setItem("icon", iconValue);
  }
}

function saveName() {
  const nameElement = document.getElementById("name");
  if (nameElement) {
    const nameValue = nameElement.value;
    localStorage.setItem("name", nameValue);
  }
}

function CustomIcon() {
  const iconElement = document.getElementById("icon");
  if (iconElement) {
    const iconValue = iconElement.value;
    localStorage.setItem("CustomIcon", iconValue);
  }
}

function CustomName() {
  const nameElement = document.getElementById("name");
  if (nameElement) {
    const nameValue = nameElement.value;
    localStorage.setItem("CustomName", nameValue);
  }
}

function ResetCustomCloak() {
  localStorage.removeItem("CustomName");
  localStorage.removeItem("CustomIcon");
  const iconInput = document.getElementById("icon");
  const nameInput = document.getElementById("name");
  if (iconInput) iconInput.value = "";
  if (nameInput) nameInput.value = "";
}

function redirectToMainDomain() {
  const currentUrl = window.location.href;
  const mainDomainUrl = currentUrl.replace(/\/[^/]*$/, "");
  if (window !== top) {
    try {
      top.location.href = mainDomainUrl;
    } catch {
      window.location.href = mainDomainUrl;
    }
  } else window.location.href = mainDomainUrl;
}

document.addEventListener("DOMContentLoaded", event => {
  const selectedValue = localStorage.getItem("selectedOption") || "Default";
  const drop = document.getElementById("dropdown");
  if (drop) drop.value = selectedValue;
  updateHeadSection(selectedValue);
});

function handleDropdownChange(selectElement) {
  const selectedValue = selectElement.value;
  localStorage.removeItem("CustomName");
  localStorage.removeItem("CustomIcon");
  localStorage.setItem("selectedOption", selectedValue);
  updateHeadSection(selectedValue);
  redirectToMainDomain();
}

function updateHeadSection(selectedValue) {
  const icon = document.getElementById("tab-favicon");
  const name = document.getElementById("t");
  const customName = localStorage.getItem("CustomName");
  const customIcon = localStorage.getItem("CustomIcon");

  if (customName && name) {
    name.textContent = customName;
    localStorage.setItem("name", customName);
  }
  if (customIcon && icon) {
    icon.setAttribute("href", customIcon);
    localStorage.setItem("icon", customIcon);
  }
}

// Custom Background
document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("save-button");
  const backgroundInput = document.getElementById("background-input");
  const resetButton = document.getElementById("reset-button");

  if (saveButton && backgroundInput) {
    saveButton.addEventListener("click", () => {
      const imageURL = backgroundInput.value;
      if (imageURL.trim() !== "") {
        localStorage.setItem("backgroundImage", imageURL);
        document.body.style.backgroundImage = `url('${imageURL}')`;
        backgroundInput.value = "";
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      localStorage.removeItem("backgroundImage");
      window.location.reload();
    });
  }
});

// Particles
const switches = document.getElementById("2");
if (switches) {
  if (window.localStorage.getItem("particles") === "true") {
    switches.checked = true;
  } else {
    switches.checked = false;
  }

  switches.addEventListener("change", event => {
    window.localStorage.setItem("particles", event.currentTarget.checked ? "true" : "false");
  });
}

// AB Cloak
function AB() {
  let inFrame;
  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }

  if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Window blocked. Please allow popups for this site.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      iframe.src = location.href;
      iframe.style.position = "fixed";
      iframe.style.top = iframe.style.bottom = iframe.style.left = iframe.style.right = 0;
      iframe.style.border = iframe.style.outline = "none";
      iframe.style.width = iframe.style.height = "100%";
      doc.body.appendChild(iframe);
      location.replace("https://google.com");
    }
  }
}
