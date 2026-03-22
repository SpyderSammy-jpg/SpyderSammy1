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
        <div class="status-left">
            <div id="fps-dot" class="status-dot"></div>
            <div style="display:flex; flex-direction:column; line-height:1.1;">
                <span id="online-status">Online</span>
                <span style="font-size:10px; color:#ffff00;">FPS: <span id="fps-val">0</span></span>
            </div>
        </div>
        <div class="task-right">
            <span id="wifi-btn" style="cursor:pointer;">📶</span>
            <span id="vol-btn" style="cursor:pointer;">🔊</span>
            <span id="bri-btn" style="cursor:pointer;">☀️</span>
            <div id="battery-btn" style="cursor:pointer; width:24px; height:12px; border:1.5px solid #fff; position:relative;">
                <div id="bat-fill" style="height:100%; background:#00ff00; width:0%;"></div>
                <div id="bat-bolt" style="position:absolute; top:-3px; left:6px; color:#ffff00; font-size:14px; display:none;">⚡</div>
            </div>
            <div id="clock-btn" style="text-align:right; font-size:11px; cursor:pointer;">
                <div id="bar-time">00:00:00</div>
                <div id="bar-date">0/0/0000</div>
            </div>
            <span id="notif-bell-btn" style="font-size:18px; cursor:pointer;">🔔</span>
        </div>
    </div>

    <div id="vol-popup" class="spyder-popup"><span>VOL</span><input type="range" class="thermometer-slider" id="vol-slider" min="0" max="100"></div>
    <div id="bri-popup" class="spyder-popup"><span>BRI</span><input type="range" class="thermometer-slider" id="bri-slider" min="10" max="100"></div>

    <div id="spyder-sidebar">
        <h2 class="red-text">Reminders <button id="add-rem-btn" style="background:red; border:none; cursor:pointer; font-weight:bold;">+</button></h2>
        <div id="rem-list" style="border:1px solid #222; padding:10px; min-height:40px; font-size:13px;"></div>
        <h2 class="red-text">National Day Fact</h2>
        <div id="nat-fact" style="padding:10px; border:1px solid #222; font-size:12px; color:#ffff00;">None</div>
        <h2 class="red-text">Countdown to School End</h2>
        <div id="school-countdown" style="font-size:18px; text-align:center; color:#ffff00;"></div>
        <h2 class="red-text">SpyderCalendar</h2>
        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
            <button id="prev-mo" style="background:none; color:red; border:1px solid #333; cursor:pointer;"><</button>
            <span id="cal-header"></span>
            <button id="next-mo" style="background:none; color:red; border:1px solid #333; cursor:pointer;">></button>
        </div>
        <div id="cal-box"></div>
    </div>
    <div id="bri-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; pointer-events:none; z-index:10000; opacity:0;"></div>
    `;

    document.body.insertAdjacentHTML('beforeend', ui);

    let calDate = new Date();
    let rems = JSON.parse(localStorage.getItem('spyderRems') || '[]');

    // --- Battery Logic ---
    if (navigator.getBattery) {
        navigator.getBattery().then(bat => {
            const update = () => {
                document.getElementById('bat-fill').style.width = (bat.level * 100) + "%";
                document.getElementById('bat-bolt').style.display = bat.charging ? "block" : "none";
            };
            bat.onlevelchange = update; bat.onchargingchange = update; update();
        });
    }

    // --- Internet Logic ---
    document.getElementById('wifi-btn').onclick = () => {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        alert(`Network: ${conn?.effectiveType?.toUpperCase() || 'WiFi'}_Spyder_Secure\nStatus: Online`);
    };

    // --- Core Timer (Clock, Alarms, FPS) ---
    let frames = 0, last = performance.now();
    function tick() {
        const now = new Date();
        document.getElementById('bar-time').innerText = now.toLocaleTimeString();
        document.getElementById('bar-date').innerText = now.toLocaleDateString();

        // Check Alarms
        const timeStr = now.getHours().toString().padStart(2,'0') + ":" + now.getMinutes().toString().padStart(2,'0');
        rems.forEach(r => {
            if(r.time === timeStr && !r.done) {
                alert("REMINDER: " + r.title); r.done = true;
                localStorage.setItem('spyderRems', JSON.stringify(rems));
            }
        });

        // FPS
        frames++;
        if (performance.now() >= last + 1000) {
            document.getElementById('fps-val').innerText = frames;
            const dot = document.getElementById('fps-dot');
            dot.style.background = frames > 45 ? "#00ff00" : frames > 20 ? "#ffff00" : "#ff0000";
            frames = 0; last = performance.now();
        }
        requestAnimationFrame(tick);
    }

    // --- Calendar & Holidays ---
    function drawCal() {
        const d = calDate;
        document.getElementById('cal-header').innerText = d.toLocaleString('default', { month: 'long', year: 'numeric' });
        const days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        const events = { "12-25": "Christmas", "6-14": "Owner Bday", "2-24": "SpyderSammy Bday" };
        
        document.getElementById('cal-box').innerHTML = `<div class="calendar-grid">` + 
            Array.from({length: days}, (_, i) => {
                const day = i + 1;
                const key = (d.getMonth()+1) + "-" + day;
                const isToday = (day === new Date().getDate() && d.getMonth() === new Date().getMonth() && d.getFullYear() === new Date().getFullYear());
                return `<div class="cal-day ${isToday ? 'cal-today' : ''} ${events[key] ? 'cal-event' : ''}" title="${events[key] || ''}">${day}</div>`;
            }).join('') + `</div>`;
    }

    // --- UI Listeners ---
    document.getElementById('notif-bell-btn').onclick = () => document.getElementById('spyder-sidebar').classList.toggle('open');
    document.getElementById('vol-btn').onclick = () => document.getElementById('vol-popup').style.display = 'flex';
    document.getElementById('bri-btn').onclick = () => document.getElementById('bri-popup').style.display = 'flex';

    document.getElementById('add-rem-btn').onclick = () => {
        const title = prompt("Reminder Title:");
        const time = prompt("Time (HH:MM):", "12:00");
        if(title && time) { rems.push({title, time, id: Date.now(), done: false}); localStorage.setItem('spyderRems', JSON.stringify(rems)); renderRems(); }
    };

    window.delRem = (id) => { if(confirm("Delete reminder?")) { rems = rems.filter(r => r.id !== id); localStorage.setItem('spyderRems', JSON.stringify(rems)); renderRems(); }};
    function renderRems() { document.getElementById('rem-list').innerHTML = rems.map(r => `<div style="display:flex; justify-content:space-between;"><span><input type="checkbox" onchange="delRem(${r.id})"> ${r.title}</span><span style="color:red;">${r.time}</span></div>`).join('') || "None"; }

    document.getElementById('prev-mo').onclick = () => { calDate.setMonth(calDate.getMonth() - 1); drawCal(); };
    document.getElementById('next-mo').onclick = () => { calDate.setMonth(calDate.getMonth() + 1); drawCal(); };

    // Close popups on click outside
    window.onclick = (e) => { if(!e.target.closest('.spyder-popup') && !e.target.closest('.task-btn')) document.querySelectorAll('.spyder-popup').forEach(p => p.style.display = 'none'); };

    tick(); drawCal(); renderRems();
})();
