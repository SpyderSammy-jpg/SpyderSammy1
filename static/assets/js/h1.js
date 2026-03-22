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
        <div class="task-left">
            <div id="fps-dot" class="fps-indicator"></div>
            <span id="online-status">Online</span>
            <span style="font-size:11px; color:#ffff00; margin-left:10px;">FPS: <span id="fps-val">0</span></span>
        </div>
        
        <div class="task-right-btns" style="display:flex; gap:5px;">
            <div class="task-btn" id="wifi-btn" title="Internet Status">📶</div>
            <div class="task-btn" id="vol-btn" title="Volume Control">🔊</div>
            <div class="task-btn" id="bri-btn" title="Brightness Control">☀️</div>
            <div class="task-btn" id="battery-btn" title="Battery Status">
                <div class="battery-container" style="width:25px; height:12px; border:1px solid #fff; position:relative;">
                    <div id="bat-fill" style="height:100%; background:#00ff00; width:0%;"></div>
                    <div id="bat-bolt" style="position:absolute; top:-2px; left:5px; color:#ffff00; display:none;">⚡</div>
                </div>
            </div>
            <div class="task-btn" id="clock-btn" style="flex-direction:column; line-height:1.1; font-size:11px; text-align:right;">
                <div id="bar-time">00:00:00</div>
                <div id="bar-date">0/0/0000</div>
            </div>
            <div class="task-btn" id="notif-bell-btn" style="font-size:18px;">🔔</div>
        </div>
    </div>

    <!-- Separate Sliders -->
    <div id="vol-popup" class="spyder-popup"><p style="font-size:10px;">Volume</p><input type="range" class="thermometer-slider" id="vol-slider" min="0" max="100"></div>
    <div id="bri-popup" class="spyder-popup"><p style="font-size:10px;">Brightness</p><input type="range" class="thermometer-slider" id="bri-slider" min="10" max="100"></div>

    <div id="spyder-sidebar">
        <h2 class="red-text">Reminders <button onclick="addRem()" style="background:#ff0000; border:none; cursor:pointer;">+</button></h2>
        <div id="rem-list" style="border:1px solid #222; padding:10px; min-height:50px;"></div>
        <h2 class="red-text">Notifications</h2>
        <div id="notif-list" style="border:1px solid #222; padding:10px; min-height:80px; font-size:12px; color:#aaa;"></div>
        <h2 class="red-text">National Day Fact</h2>
        <div id="nat-fact" style="padding:10px; border:1px solid #222; font-size:13px; color:#ffff00;">Searching...</div>
        <h2 class="red-text">Countdown to School End</h2>
        <div id="countdown-timer" style="font-family:monospace; font-size:20px; color:#ffff00; text-align:center;"></div>
        <div id="cal-nav" style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
            <button onclick="changeMo(-1)" class="cal-btn"><</button>
            <span id="cal-title" style="font-weight:bold;"></span>
            <button onclick="changeMo(1)" class="cal-btn">></button>
        </div>
        <div id="cal-box"></div>
    </div>
    <div id="bri-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; pointer-events:none; z-index:10000; opacity:0;"></div>
    `;

    document.body.insertAdjacentHTML('beforeend', ui);

    let calDate = new Date();
    let reminders = JSON.parse(localStorage.getItem('spyderRems') || '[]');

    // --- Internet & Network Detector ---
    document.getElementById('wifi-btn').onclick = () => {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const type = connection ? connection.effectiveType : "Unknown";
        const speed = connection ? connection.downlink + " Mbps" : "N/A";
        alert(`Connection: ${navigator.onLine ? 'Online' : 'Offline'}\nType: ${type}\nEstimated Speed: ${speed}`);
    };

    // --- FPS & Status Circle Logic ---
    let frames = 0, lastTime = performance.now();
    function checkStatus() {
        frames++;
        const now = performance.now();
        if (now >= lastTime + 1000) {
            const fps = frames;
            document.getElementById('fps-val').innerText = fps;
            const dot = document.getElementById('fps-dot');
            const stat = document.getElementById('online-status');
            
            if (!navigator.onLine) {
                dot.className = "fps-indicator fps-flash"; 
                stat.innerText = "Offline";
            } else {
                dot.classList.remove('fps-flash');
                stat.innerText = "Online";
                dot.style.background = fps > 45 ? "#00ff00" : fps > 20 ? "#ffff00" : "#ff0000";
            }
            frames = 0; lastTime = now;
        }
        requestAnimationFrame(checkStatus);
    }

    // --- System Notification Listener ---
    // Note: Browsers cannot directly "read" Windows/Chrome OS notifications for security.
    // However, this script will display notifications sent TO the site in the sidebar.
    function addSidebarNotification(title, body) {
        const list = document.getElementById('notif-list');
        const item = `<div style="border-bottom:1px solid #333; padding:5px;"><b>${title}</b>: ${body}</div>`;
        list.insertAdjacentHTML('afterbegin', item);
    }

    // --- Popups & Buttons ---
    document.getElementById('vol-btn').onclick = () => togglePopup('vol-popup');
    document.getElementById('bri-btn').onclick = () => togglePopup('bri-popup');
    document.getElementById('notif-bell-btn').onclick = () => document.getElementById('spyder-sidebar').classList.toggle('open');
    
    function togglePopup(id) {
        const p = document.getElementById(id);
        const state = p.style.display;
        document.querySelectorAll('.spyder-popup').forEach(x => x.style.display = 'none');
        p.style.display = (state === 'flex') ? 'none' : 'flex';
    }

    // --- National Day & Holidays ---
    async function fetchHoliday() {
        try {
            const res = await fetch(`https://date.nager.at`);
            const data = await res.json();
            const today = new Date().toISOString().split('T')[0];
            const h = data.find(x => x.date === today);
            document.getElementById('nat-fact').innerText = h ? `Holiday: ${h.name}` : "Nothing special about today!";
        } catch(e) { document.getElementById('nat-fact').innerText = "None"; }
    }

    // --- Calendar Navigation ---
    window.changeMo = (dir) => {
        calDate.setMonth(calDate.getMonth() + dir);
        if (calDate.getFullYear() < 2000) calDate.setFullYear(2000);
        if (calDate.getFullYear() > 3000) calDate.setFullYear(3000);
        drawCal();
    };

    function drawCal() {
        document.getElementById('cal-title').innerText = calDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        const days = new Date(calDate.getFullYear(), calDate.getMonth() + 1, 0).getDate();
        document.getElementById('cal-box').innerHTML = `<div class="calendar-grid">` + 
            Array.from({length: days}, (_, i) => {
                const isToday = (i+1 === new Date().getDate() && calDate.getMonth() === new Date().getMonth());
                return `<div class="cal-day ${isToday ? 'cal-today' : ''}">${i+1}</div>`;
            }).join('') + `</div>`;
    }

    // --- Initializers ---
    setInterval(() => {
        const n = new Date();
        document.getElementById('bar-time').innerText = n.toLocaleTimeString();
        document.getElementById('bar-date').innerText = n.toLocaleDateString();
        const diff = new Date("2026-06-19T00:00:00") - n;
        document.getElementById('countdown-timer').innerText = Math.floor(diff/86400000) + "d Left";
    }, 1000);

    checkStatus(); drawCal(); fetchHoliday();
})();
