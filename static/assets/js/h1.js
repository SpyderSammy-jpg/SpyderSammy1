// home.js
let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}
if (!localStorage.getItem("ab")) localStorage.setItem("ab", true);
if (!inFrame && !navigator.userAgent.includes("Firefox") && localStorage.getItem("ab") === "true") {
  const popup = open("about:blank", "_blank");
  setTimeout(() => {
    if (!popup || popup.closed) {
      alert("Please allow popups for this site. Doing so will allow us to open the site in a about:blank tab and preventing this site from showing up in your history. You can turn this off in the site settings.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);

      const pLink = localStorage.getItem(encodeURI("pLink")) || getRandomUrl();
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `;
      doc.head.appendChild(script);
    }
  }, 2000);
}
// Particles
document.addEventListener("DOMContentLoaded", event => {
  if (window.localStorage.getItem("Particles") === "true") {
    const particlesConfig = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 40,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    // Ensure particles.js is loaded in your HTML before this runs
    particlesJS("particles-js", particlesConfig);
  }
});
// Splash texts
const SplashT = [
  "Thanks for using SpyderSammyUI Proxy",
  "This is dedicated for Homeroom 222 of the Frank R. Conwell Middle School 4",
  "Made by Sharvesh Vijayanand (SpyderSammy)",
  "Check out my new SpyderSammy Proxy! :)",
  "SpyderSammy is a high-speed proxy designed to bypass school filters.",
  "All hail SpyderSammy",
  "Check out the settings page",
  "Don't forget to play admin abuse this week!",
  "Contact 208419@jcpsnj.org for updates, requests, errors and new url's",
  "Tung Tung Tung Sahur!",
  "Announcement: Mohanesh's favorite word is: TESTICLES!",
];

let SplashI = Math.floor(Math.random() * SplashT.length);
const SplashE = document.getElementById("splash");

function US() {
  SplashI = (SplashI + 1) % SplashT.length;
  SplashE.innerText = SplashT[SplashI];
}

if (SplashE) {
  SplashE.innerText = SplashT[SplashI];
  SplashE.addEventListener("click", US);
}

// Random URL
function getRandomUrl() {
  const randomUrls = [
    "https://kahoot.it",
    "https://classroom.google.com",
    "https://drive.google.com",
    "https://google.com",
    "https://docs.google.com",
    "https://slides.google.com",
    "https://www.nasa.gov",
    "https://blooket.com",
    "https://clever.com",
    "https://edpuzzle.com",
    "https://khanacademy.org",
    "https://wikipedia.org",
    "https://dictionary.com",
  ];
  return randomUrls[randRange(0, randomUrls.length)];
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
(function() {
    const ui = `
    <div id="spyder-bar">
        <div class="left-group">
            <div class="system-item" id="start-node"><img src="https://img.icons8.com" width="20"></div>
            <div class="system-item">
                <span id="fps-val" style="color:#ff0; font-size:11px; margin-right:4px;">0</span>
                <div id="fps-dot" class="status-dot"></div>
            </div>
            <div class="short-bars">
                <input type="range" id="vol-slider" min="0" max="100" value="100" title="Volume">
                <input type="range" id="bri-slider" min="0" max="100" value="100" title="Brightness">
            </div>
        </div>
        <div class="right-group">
            <div class="system-item" id="batt-btn" onclick="alert('Battery: ' + document.getElementById('batt-text').innerText)">
                <span id="charge-icon" style="margin-right:2px">⚡</span>
                <div class="batt-container" style="width:22px; height:11px; border:1px solid #777; padding:1px; border-radius:2px;">
                    <div id="batt-fill" style="height:100%; background:#0f0;"></div>
                </div>
                <span id="batt-text" style="display:none">--%</span>
            </div>
            <div class="system-item" id="notif-bell">🔔</div>
            <div class="system-item" id="clock-tray" style="margin-right:8px;">
                <div class="time-stack">
                    <span id="bar-time">00:00</span>
                    <span id="bar-date">Date</span>
                </div>
            </div>
        </div>
    </div>
    <div id="spyder-sidebar">
        <span class="close-side" id="side-x">&times;</span>
        <h3 class="red-text">ACTION CENTER</h3>
        <div id="notif-history" class="sidebar-box">No new notifications.</div>
        <h3 class="red-text">CALENDAR AGENDA</h3>
        <div id="cal-box" class="sidebar-box"></div>
    </div>
    <div id="bri-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; pointer-events:none; z-index:9999; opacity:0;"></div>`;

    document.body.insertAdjacentHTML('beforeend', ui);

    const holidays = { "12-25": "Christmas Day", "3-21": "National Memory Day", "3-22": "World Water Day" };

    // Unified Click Handler for Calendar Events
    document.addEventListener('click', e => {
        if(e.target.classList.contains('cal-holiday')) {
            const dateKey = e.target.getAttribute('data-date');
            alert(`Event: ${holidays[dateKey]}`);
        }
        if(e.target.id === 'clock-tray' || e.target.id === 'notif-bell') {
            document.getElementById('spyder-sidebar').classList.toggle('open');
        }
    });

    function drawCal() {
        const d = new Date(), m = d.getMonth(), y = d.getFullYear();
        const days = new Date(y, m + 1, 0).getDate();
        let h = `<div class="cal-grid" style="display:grid; grid-template-columns:repeat(7,1fr); gap:4px; text-align:center;">`;
        for(let i=1; i<=days; i++) {
            const key = `${m+1}-${i}`;
            const isH = holidays[key];
            h += `<div class="cal-day ${isH?'cal-holiday':''}" data-date="${key}">${i}</div>`;
        }
        document.getElementById('cal-box').innerHTML = h + `</div>`;
    }

    // Battery Tooltip logic
    if (navigator.getBattery) navigator.getBattery().then(b => {
        const update = () => {
            const lvl = Math.round(b.level * 100);
            document.getElementById('batt-text').innerText = lvl + "%";
            document.getElementById('batt-fill').style.width = lvl + "%";
            document.getElementById('charge-icon').style.visibility = b.charging ? "visible" : "hidden";
        };
        update(); b.onlevelchange = update; b.onchargingchange = update;
    });

    setInterval(() => {
        const n = new Date();
        document.getElementById('bar-time').innerText = n.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
        document.getElementById('bar-date').innerText = n.toLocaleDateString([], {day:'2-digit', month:'2-digit', year:'numeric'});
    }, 1000);

    drawCal();
})();
