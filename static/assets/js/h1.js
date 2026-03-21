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
            <div id="fps-dot" class="status-dot"></div>
            <span id="online-status">Online</span>
            <span style="font-size:11px; color:#ffff00">FPS: <span id="fps-val">0</span></span>
        </div>
        
        <div class="task-right" id="system-tray">
            <span title="WiFi">📶</span>
            <span title="Volume">🔊</span>
            <span id="battery-icon" title="Check Battery">🔋</span>
            <div style="text-align:right; line-height:1.2; font-size:12px; padding: 0 5px;">
                <div id="bar-time">00:00:00</div>
                <div id="bar-date">0/0/0000</div>
            </div>
            <span id="notif-bell" style="font-size:18px; padding-left:5px;">🔔</span>
        </div>
    </div>

    <div id="qs-popup" class="spyder-popup">
        <h3 style="color:#ff0000; margin:0;">Quick Settings</h3>
        <div style="display:flex; justify-content:space-around; align-items:center;">
            <div style="text-align:center;">
                <p style="font-size:12px; margin-bottom:5px;">Volume</p>
                <input type="range" class="thermometer-slider" id="vol-slider" min="0" max="100" value="100">
            </div>
            <div style="text-align:center;">
                <p style="font-size:12px; margin-bottom:5px;">Brightness</p>
                <input type="range" class="thermometer-slider" id="bri-slider" min="10" max="100" value="100">
            </div>
        </div>
    </div>

    <div id="spyder-sidebar">
        <h2 class="red-text">Reminders <button id="add-rem-btn" style="background:#ff0000; border:none; cursor:pointer; color:black; font-weight:bold; padding:0 5px;">+</button></h2>
        <div id="rem-list" style="border:1px solid #222; padding:10px; min-height:50px; font-size:13px;"></div>

        <h2 class="red-text">Notifications</h2>
        <div id="notif-list" style="border:1px solid #222; padding:10px; min-height:80px; color:#aaa; font-size:12px;">No current notifications</div>

        <h2 class="red-text">Countdown to School End</h2>
        <div id="countdown-timer" style="font-family:monospace; font-size:18px; color:#ffff00; text-align:center;"></div>
        <p style="font-size:10px; color:#555; text-align:center;">*countdown may be inaccurate</p>

        <h2 class="red-text">National Day Fact</h2>
        <div id="nat-fact" style="font-size:13px; padding:10px; border:1px solid #222; color:#ffff00;">Searching...</div>

        <h2 class="red-text">SpyderCalendar</h2>
        <div id="cal-header" style="text-align:center; font-weight:bold; color:#fff; margin-bottom:5px;"></div>
        <div id="cal-box"></div>
    </div>
    <div id="bri-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; pointer-events:none; z-index:10000; opacity:0;"></div>
    `;

    document.body.insertAdjacentHTML('beforeend', ui);

    let reminders = JSON.parse(localStorage.getItem('spyderRems') || '[]');

    // --- Time & Countdown ---
    function updateClock() {
        const now = new Date();
        document.getElementById('bar-time').innerText = now.toLocaleTimeString();
        document.getElementById('bar-date').innerText = now.toLocaleDateString();

        const diff = new Date("2026-06-19T00:00:00") - now;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('countdown-timer').innerText = `${d}d ${h}h ${m}m ${s}s`;

        // Check Reminders
        const timeKey = now.getHours().toString().padStart(2,'0') + ":" + now.getMinutes().toString().padStart(2,'0');
        reminders.forEach(r => {
            if(r.time === timeKey && !r.fired) {
                alert(`REMINDER: ${r.title}`);
                r.fired = true;
                localStorage.setItem('spyderRems', JSON.stringify(reminders));
            }
        });
    }

    // --- Battery & Charging Detection ---
    async function checkBattery() {
        if (!navigator.getBattery) return;
        const bat = await navigator.getBattery();
        const icon = document.getElementById('battery-icon');
        
        const updateIcon = () => {
            const level = Math.round(bat.level * 100);
            icon.innerHTML = bat.charging ? "⚡🔋" : "🔋";
            icon.title = `Battery: ${level}% ${bat.charging ? '(Charging)' : ''}`;
        };

        bat.addEventListener('chargingchange', updateIcon);
        bat.addEventListener('levelchange', updateIcon);
        updateIcon();
    }

    // --- FPS Engine ---
    let frames = 0, last = performance.now();
    function checkFPS() {
        frames++;
        const now = performance.now();
        if (now >= last + 1000) {
            document.getElementById('fps-val').innerText = frames;
            const dot = document.getElementById('fps-dot');
            const stat = document.getElementById('online-status');
            if (frames < 20) { dot.classList.add('beep-anim'); stat.innerText = "Lagging"; }
            else { dot.style.background = "#00ff00"; dot.classList.remove('beep-anim'); stat.innerText = "Online"; }
            frames = 0; last = now;
        }
        requestAnimationFrame(checkFPS);
    }

    // --- Toggle Logic ---
    document.getElementById('system-tray').onclick = (e) => {
        if(e.target.id === 'notif-bell') {
            document.getElementById('spyder-sidebar').classList.toggle('open');
            document.getElementById('qs-popup').style.display = 'none';
        } else {
            const qs = document.getElementById('qs-popup');
            qs.style.display = qs.style.display === 'flex' ? 'none' : 'flex';
        }
    };

    // --- Reminders ---
    window.addRem = () => {
        const title = prompt("Reminder Title:");
        const time = prompt("Time (24h format HH:MM):", "12:00");
        if(title && time) {
            reminders.push({ title, time, id: Date.now(), fired: false });
            localStorage.setItem('spyderRems', JSON.stringify(reminders));
            renderRems();
        }
    };
    document.getElementById('add-rem-btn').onclick = window.addRem;

    window.delRem = (id) => {
        if(confirm("Delete this reminder?")) {
            reminders = reminders.filter(r => r.id !== id);
            localStorage.setItem('spyderRems', JSON.stringify(reminders));
            renderRems();
        }
    };

    function renderRems() {
        document.getElementById('rem-list').innerHTML = reminders.map(r => `
            <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                <span><input type="checkbox" onchange="delRem(${r.id})"> ${r.title}</span>
                <span style="color:#ff0000">${r.time}</span>
            </div>`).join('') || "No active reminders.";
    }

    // --- Calendar & Facts ---
    function drawCal() {
        const d = new Date();
        const daysInMo = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
        document.getElementById('cal-header').innerText = d.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        // Example Festivals
        const holidays = { "3-17": "St. Paddy's", "12-25": "Xmas", "10-31": "Halloween" };
        
        document.getElementById('cal-box').innerHTML = `<div class="calendar-grid">` + 
            Array.from({length: daysInMo}, (_, i) => {
                const day = i + 1;
                const hKey = `${d.getMonth()+1}-${day}`;
                const isToday = day === d.getDate();
                const isHoliday = holidays[hKey];
                return `<div class="cal-day ${isToday ? 'cal-today' : ''} ${isHoliday ? 'cal-event' : ''}" title="${isHoliday || ''}">${day}</div>`;
            }).join('') + `</div>`;

        // National Day Fact Logic
        const natFacts = { "3-21": "National Countdown Day", "3-22": "National Water Day" };
        document.getElementById('nat-fact').innerText = natFacts[`${d.getMonth()+1}-${d.getDate()}`] || "Nothing special today!";
    }

    // --- Sliders ---
    document.addEventListener('input', (e) => {
        if(e.target.id === 'bri-slider') document.getElementById('bri-overlay').style.opacity = (100 - e.target.value) / 100;
        if(e.target.id === 'vol-slider') document.querySelectorAll('audio, video').forEach(v => v.volume = e.target.value / 100);
    });

    setInterval(updateClock, 1000);
    checkFPS(); drawCal(); renderRems(); checkBattery();
})();
