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
        <div class="status-left" style="display:flex; align-items:center; gap:10px;">
            <div id="fps-dot" style="width:12px; height:12px; border-radius:50%; border:2px solid #222;"></div>
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
            <div style="text-align:right; font-size:11px; cursor:pointer;" id="clock-btn">
                <div id="bar-time">00:00:00</div>
                <div id="bar-date">0/0/0000</div>
            </div>
            <span id="notif-bell-btn" style="font-size:18px; cursor:pointer;">🔔</span>
        </div>
    </div>
    <div id="vol-popup" class="spyder-popup" style="display:none;"><span>VOL</span><input type="range" class="thermometer-slider" id="vol-slider" min="0" max="100"></div>
    <div id="bri-popup" class="spyder-popup" style="display:none;"><span>BRI</span><input type="range" class="thermometer-slider" id="bri-slider" min="10" max="100"></div>
    <div id="spyder-sidebar">
        <h2 class="red-text">Reminders <button id="add-rem-btn" style="background:red; border:none; cursor:pointer; color:black; font-weight:bold;">+</button></h2>
        <div id="rem-list" style="border:1px solid #222; padding:10px; min-height:40px; font-size:13px;"></div>
        <h2 class="red-text">Countdown to School End</h2>
        <div id="school-countdown" style="font-size:16px; text-align:center; color:#ffff00; font-family:monospace; padding:10px; border:1px solid #222;"></div>
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

    const festivals = {
        "2-24": { name: "SpyderSammy's Birthday", greet: "Happy Birthday SpyderSammy!" },
        "3-17": { name: "St. Patrick's Day", greet: "Happy St. Patrick's Day!" },
        "3-19": { name: "Eid al-Fitr", greet: "Eid Mubarak!" },
        "3-20": { name: "Eid al-Fitr", greet: "Eid Mubarak!" },
        "6-14": { name: "Owner's Birthday", greet: "Happy Birthday Owner!" },
        "12-25": { name: "Christmas Day", greet: "Merry Christmas!" }
    };

    function checkGreetings() {
        const key = `${new Date().getMonth() + 1}-${new Date().getDate()}`;
        if (festivals[key] && !sessionStorage.getItem('greeted_' + key)) {
            alert(festivals[key].greet);
            sessionStorage.setItem('greeted_' + key, 'true');
        }
    }

    document.getElementById('wifi-btn').onclick = () => {
        alert(`Status: ${navigator.onLine ? 'Online' : 'Offline'}\nSpeed: ${navigator.connection?.downlink || '---'} Mbps\nLocation: America/New Jersey/Jersey City/07302`);
    };

    if (navigator.getBattery) {
        navigator.getBattery().then(bat => {
            const up = () => {
                document.getElementById('bat-fill').style.width = (bat.level * 100) + "%";
                document.getElementById('bat-bolt').style.display = bat.charging ? "block" : "none";
            };
            document.getElementById('battery-btn').onclick = () => alert(`Battery: ${Math.round(bat.level*100)}%\nCharging: ${bat.charging ? 'Yes' : 'No'}`);
            bat.onlevelchange = up; bat.onchargingchange = up; up();
        });
    }

    let frames = 0, last = performance.now();
    function tick() {
        const now = new Date();
        document.getElementById('bar-time').innerText = now.toLocaleTimeString();
        document.getElementById('bar-date').innerText = now.toLocaleDateString();

        const diff = new Date("2026-06-19T00:00:00") - now;
        const d = Math.floor(diff/86400000), h = Math.floor((diff%86400000)/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
        document.getElementById('school-countdown').innerText = `${d}d ${h}h ${m}m ${s}s`;

        // FIXED REMINDER CHECK (Checks every second)
        const timeKey = now.getHours().toString().padStart(2,'0') + ":" + now.getMinutes().toString().padStart(2,'0');
        rems.forEach((r, i) => {
            if(r.time === timeKey && !r.fired) {
                r.fired = true; 
                setTimeout(() => {
                    if(confirm("REMINDER: " + r.title + "\n\nClick 'OK' to delete.")) {
                        rems.splice(i, 1);
                        localStorage.setItem('spyderRems', JSON.stringify(rems));
                        renderRems();
                    }
                }, 10);
            }
        });

        frames++;
        if (performance.now() >= last + 1000) {
            document.getElementById('fps-val').innerText = frames;
            document.getElementById('fps-dot').style.background = frames > 45 ? "#00ff00" : frames > 20 ? "#ffff00" : "#ff0000";
            frames = 0; last = performance.now();
        }
        requestAnimationFrame(tick);
    }

    function drawCal() {
        const d = calDate;
        document.getElementById('cal-header').innerText = d.toLocaleString('default', { month: 'long', year: 'numeric' });
        const days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        let html = `<div class="calendar-grid">`;
        weekDays.forEach(w => html += `<div class="cal-weekday">${w}</div>`);
        for (let i = 1; i <= days; i++) {
            const k = `${d.getMonth()+1}-${i}`;
            const isT = (i === new Date().getDate() && d.getMonth() === new Date().getMonth() && d.getFullYear() === new Date().getFullYear());
            const hasEvent = festivals[k];
            html += `<div class="cal-day ${isT ? 'cal-today' : ''} ${hasEvent ? 'cal-event' : ''}" 
                     onclick="${hasEvent ? `alert('Event: ${hasEvent.name}')` : ''}">${i}</div>`;
        }
        html += `</div>`;
        document.getElementById('cal-box').innerHTML = html;
    }

    document.getElementById('notif-bell-btn').onclick = (e) => { e.stopPropagation(); document.getElementById('spyder-sidebar').classList.toggle('open'); };
    document.getElementById('vol-btn').onclick = (e) => { e.stopPropagation(); document.getElementById('vol-popup').style.display='flex'; };
    document.getElementById('bri-btn').onclick = (e) => { e.stopPropagation(); document.getElementById('bri-popup').style.display='flex'; };
    
    document.getElementById('add-rem-btn').onclick = () => {
        const title = prompt("Title:"), time = prompt("Time (HH:MM):");
        if(title && time) { rems.push({title, time, id:Date.now(), fired:false}); localStorage.setItem('spyderRems', JSON.stringify(rems)); renderRems(); }
    };

    window.delRem = (id) => { if(confirm("Delete?")) { rems = rems.filter(r => r.id !== id); localStorage.setItem('spyderRems', JSON.stringify(rems)); renderRems(); }};
    function renderRems() { document.getElementById('rem-list').innerHTML = rems.map(r => `<div style="display:flex; justify-content:space-between; margin-bottom:5px;"><span><input type="checkbox" onchange="delRem(${r.id})"> ${r.title}</span><span style="color:red;">${r.time}</span></div>`).join('') || "None"; }
    
    document.getElementById('prev-mo').onclick = () => { calDate.setMonth(calDate.getMonth()-1); drawCal(); };
    document.getElementById('next-mo').onclick = () => { calDate.setMonth(calDate.getMonth()+1); drawCal(); };
    
    window.onclick = (e) => { 
        if(!e.target.closest('.spyder-popup') && !e.target.closest('.task-btn')) document.querySelectorAll('.spyder-popup').forEach(p=>p.style.display='none');
        if(!e.target.closest('#spyder-sidebar') && e.target.id !== 'notif-bell-btn') document.getElementById('spyder-sidebar').classList.remove('open');
    };

    document.getElementById('bri-slider').oninput = (e) => document.getElementById('bri-overlay').style.opacity = (100-e.target.value)/100;
    document.getElementById('vol-slider').oninput = (e) => document.querySelectorAll('audio, video').forEach(v => v.volume = e.target.value/100);

    tick(); drawCal(); renderRems(); checkGreetings();
})();
(function() {
    const toolHTML = `
    <!-- Sidebar must exist in DOM before tools for sliding CSS logic -->
    <div id="spyder-tools-toggle">🛠️</div>
    <div id="spyder-tools-menu">
        <button class="tool-btn" onclick="openSTool('calc')">SpyderCalculator</button>
        <button class="tool-btn" onclick="openSTool('timer')">SpyderTimer</button>
        <button class="tool-btn" onclick="openSTool('sw')">SpyderStopwatch</button>
        <button class="tool-btn" onclick="openSTool('snip')">SpyderScreenshots</button>
    </div>

    <!-- Window: Calculator -->
    <div id="win-calc" class="spyder-window" style="bottom:60px; left:30px; width:300px;">
        <div class="window-header"><span>SpyderCalculator</span><span class="close-win" onclick="closeSTool('calc')">X</span></div>
        <div class="window-body" style="padding:0;">
            <input type="text" id="calc-display" readonly>
            <div class="calc-grid">
                ${['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'].map(k => `<button class="calc-btn" onclick="calcDo('${k}')">${k}</button>`).join('')}
            </div>
        </div>
    </div>

    <!-- Window: Timer -->
    <div id="win-timer" class="spyder-window" style="bottom:60px; left:30px;">
        <div class="window-header"><span>SpyderTimer</span><span class="close-win" onclick="closeSTool('timer')">X</span></div>
        <div class="window-body" style="text-align:center;">
            <div id="timer-circle"><span id="timer-txt">00:00</span></div>
            <button onclick="runSpyderTimer()" style="background:red; color:white; border:none; padding:10px 20px; cursor:pointer; font-weight:bold; margin-top:10px;">SET TIMER</button>
        </div>
    </div>

    <!-- Window: Stopwatch -->
    <div id="win-sw" class="spyder-window" style="top:50px; left:50px;">
        <div class="window-header"><span>SpyderStopwatch</span><span class="close-win" onclick="closeSTool('sw')">X</span></div>
        <div class="window-body" style="text-align:center;">
            <div id="sw-display" style="font-size:36px; font-family:monospace; margin-bottom:15px;">00:00:00</div>
            <button id="sw-btn" onclick="toggleSW()" style="background:green; color:white; border:none; padding:10px 25px; cursor:pointer;">Start</button>
            <button onclick="resetSW()" style="background:gray; color:white; border:none; padding:10px 25px; cursor:pointer;">Reset</button>
        </div>
    </div>

    <!-- Window: Screenshots (Renamed) -->
    <div id="win-snip" class="spyder-window" style="top:50%; left:50%; transform:translate(-50%,-50%); width:300px;">
        <div class="window-header"><span>SpyderScreenshots</span><span class="close-win" onclick="closeSTool('snip')">X</span></div>
        <div class="window-body camera-ui">
            <div class="camera-mode-toggle">
                <span id="m-photo" class="mode-txt active" onclick="setCamMode('p')">PHOTO</span>
                <span id="m-video" class="mode-txt" onclick="setCamMode('v')">VIDEO</span>
            </div>
            <div id="camera-shutter" class="camera-shutter" onclick="triggerCamera()"></div>
            <p style="font-size:10px; color:#666;">Choose "This Tab" for screen captures</p>
            <button class="tool-btn" onclick="openSTool('gal')" style="width:100%; text-align:center;">📂 View Gallery</button>
        </div>
    </div>

    <!-- Window: Gallery (With Clear All) -->
    <div id="win-gal" class="spyder-window" style="top:50px; right:50px; width:350px;">
        <div class="window-header"><span>SpyderGallery</span><span class="close-win" onclick="closeSTool('gal')">X</span></div>
        <div class="window-body" style="display:flex; flex-direction:column; max-height:500px;">
            <div id="gal-list" style="overflow-y:auto; flex-grow:1; min-height:100px;">No Captures.</div>
            <button class="gal-clear-btn" onclick="clearSpyderGal()">CLEAR ALL GALLERY</button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', toolHTML);

    // --- Core Tool Management ---
    window.openSTool = (id) => {
        if(id !== 'gal' && id !== 'snip') document.querySelectorAll('.spyder-window').forEach(w => w.style.display = 'none');
        document.getElementById('win-' + id).style.display = 'flex';
        if(id === 'gal') loadSpyderGal();
    };
    window.closeSTool = (id) => document.getElementById('win-' + id).style.display = 'none';
    
    document.getElementById('spyder-tools-toggle').onclick = () => {
        const m = document.getElementById('spyder-tools-menu');
        m.style.display = (m.style.display === 'flex' ? 'none' : 'flex');
    };

    // --- Calculator Engine ---
    window.calcDo = (v) => {
        const d = document.getElementById('calc-display');
        if(v === '=') try { d.value = eval(d.value); } catch(e) { d.value = "Error"; }
        else if(v === 'C') d.value = '';
        else d.value += v;
    };

    // --- Timer Engine ---
    let ti;
    window.runSpyderTimer = () => {
        let s = prompt("Timer seconds:") || 0;
        clearInterval(ti);
        ti = setInterval(() => {
            s--;
            let min = Math.floor(s/60), sec = s%60;
            document.getElementById('timer-txt').innerText = `${min}:${sec < 10 ? '0'+sec : sec}`;
            if(s <= 0) { clearInterval(ti); alert("SpyderTimer: Time is up!"); }
        }, 1000);
    };

    // --- Stopwatch Engine ---
    let swI, swE = 0;
    window.toggleSW = () => {
        const b = document.getElementById('sw-btn');
        if(b.innerText === "Start") {
            b.innerText = "Stop"; b.style.background = "red";
            let st = Date.now() - swE;
            swI = setInterval(() => {
                swE = Date.now() - st;
                let ms = Math.floor((swE % 1000) / 10), s = Math.floor((swE / 1000) % 60), m = Math.floor(swE / 60000);
                document.getElementById('sw-display').innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}:${ms.toString().padStart(2,'0')}`;
            }, 10);
        } else {
            b.innerText = "Start"; b.style.background = "green";
            clearInterval(swI);
        }
    };
    window.resetSW = () => { swE = 0; document.getElementById('sw-val').innerText = "00:00:00"; };

    // --- Screenshots App Engine ---
    let curMode = 'p', recorder, chunks = [];
    window.setCamMode = (m) => {
        curMode = m;
        document.getElementById('m-photo').classList.toggle('active', m === 'p');
        document.getElementById('m-video').classList.toggle('active', m === 'v');
    };

    window.triggerCamera = async () => {
        if(curMode === 'p') {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: "browser" }, selfBrowserSurface: "include" });
                const vid = document.createElement('video'); vid.srcObject = stream; await vid.play();
                const canvas = document.createElement('canvas'); canvas.width = vid.videoWidth; canvas.height = vid.videoHeight;
                canvas.getContext('2d').drawImage(vid, 0, 0);
                saveToGal('img', canvas.toDataURL());
                stream.getTracks().forEach(t => t.stop());
                alert("Screenshot saved to Gallery!");
            } catch(e) { console.error(e); }
        } else {
            const shutter = document.getElementById('camera-shutter');
            if(shutter.classList.contains('recording')) {
                recorder.stop(); shutter.classList.remove('recording');
            } else {
                try {
                    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
                    recorder = new MediaRecorder(stream);
                    recorder.ondataavailable = e => chunks.push(e.data);
                    recorder.onstop = () => {
                        const blob = new Blob(chunks, { type: 'video/webm' });
                        saveToGal('vid', URL.createObjectURL(blob));
                        chunks = []; stream.getTracks().forEach(t => t.stop());
                        alert("Video recorded!");
                    };
                    recorder.start(); shutter.classList.add('recording');
                } catch(e) { alert("Recording requires screen and audio permissions."); }
            }
        }
    };

    function saveToGal(type, data) {
        let g = JSON.parse(localStorage.getItem('spyder_gal') || '[]');
        g.push({ type, data, date: new Date().toLocaleString() });
        localStorage.setItem('spyder_gal', JSON.stringify(g));
    }

    window.downloadCapture = (data, type) => {
        const a = document.createElement('a');
        a.href = data;
        a.download = `spyder_capture_${Date.now()}.${type === 'img' ? 'png' : 'webm'}`;
        a.click();
    };

    window.clearSpyderGal = () => {
        if(confirm("Delete everything in the gallery?")) {
            localStorage.setItem('spyder_gal', '[]');
            loadSpyderGal();
        }
    };

    function loadSpyderGal() {
        const g = JSON.parse(localStorage.getItem('spyder_gal') || '[]');
        document.getElementById('gal-list').innerHTML = g.length ? g.map(i => `
            <div class="gal-item">
                <small>${i.date}</small><br>
                ${i.type === 'img' ? `<img src="${i.data}" style="width:100%; margin-top:5px; border:1px solid #333;">` : 
                `<button onclick="window.open('${i.data}')" style="width:100%; background:#222; border:1px solid red; color:#fff; cursor:pointer; padding:10px;">▶ Play Video</button>`}
                <button class="gal-dl-btn" onclick="downloadCapture('${i.data}', '${i.type}')">DOWNLOAD FILE</button>
            </div>
        `).join('') : "Gallery is empty.";
    }

    // --- Drag Logic ---
    document.querySelectorAll('.window-header').forEach(h => {
        h.onmousedown = (e) => {
            let w = h.parentElement;
            let ox = e.clientX - w.offsetLeft, oy = e.clientY - w.offsetTop;
            document.onmousemove = (e) => {
                w.style.left = (e.clientX - ox) + "px"; w.style.top = (e.clientY - oy) + "px";
                w.style.bottom = "auto"; w.style.right = "auto";
            };
            document.onmouseup = () => document.onmousemove = null;
        };
    });
})();
(function() {
    // Load existing stickies from browser memory
    let stickies = JSON.parse(localStorage.getItem('spyder_stickies') || '[]');

    window.spawnSticky = (data = null) => {
        const colors = ['yellow', 'blue', 'pink', 'green'];
        const id = data ? data.id : Date.now();
        const color = data ? data.color : colors[Math.floor(Math.random() * colors.length)];
        const x = data ? data.x : Math.random() * (window.innerWidth - 250);
        const y = data ? data.y : Math.random() * (window.innerHeight - 300);
        const text = data ? data.text : "";

        const stickyHTML = `
            <div id="sticky-${id}" class="spyder-sticky sticky-${color}" style="left:${x}px; top:${y}px;">
                <div class="sticky-header">
                    <span>Sticky Note</span>
                    <div>
                        <span onclick="removeSticky(${id})" style="cursor:pointer; font-weight:bold;">✖</span>
                    </div>
                </div>
                <textarea class="sticky-content" oninput="updateSticky(${id}, this.value)" placeholder="Write a note...">${text}</textarea>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', stickyHTML);
        
        const el = document.getElementById(`sticky-${id}`);
        makeStickyDraggable(el, id);

        // If it's a brand new note, save it to memory
        if (!data) {
            stickies.push({ id, color, x, y, text });
            saveStickies();
        }
    };

    window.updateSticky = (id, text) => {
        const s = stickies.find(n => n.id === id);
        if (s) { s.text = text; saveStickies(); }
    };

    window.removeSticky = (id) => {
        const el = document.getElementById(`sticky-${id}`);
        if (el) el.remove();
        stickies = stickies.filter(n => n.id !== id);
        saveStickies();
    };

    function saveStickies() {
        localStorage.setItem('spyder_stickies', JSON.stringify(stickies));
    }

    function makeStickyDraggable(el, id) {
        let ox = 0, oy = 0;
        el.onmousedown = (e) => {
            // Don't drag if they are trying to type in the textarea
            if (e.target.tagName === 'TEXTAREA') return;
            
            ox = e.clientX - el.offsetLeft;
            oy = e.clientY - el.offsetTop;
            
            document.onmousemove = (e) => {
                const nx = e.clientX - ox;
                const ny = e.clientY - oy;
                el.style.left = nx + "px";
                el.style.top = ny + "px";
                
                // Update position in memory
                const s = stickies.find(n => n.id === id);
                if (s) { s.x = nx; s.y = ny; saveStickies(); }
            };
            
            document.onmouseup = () => {
                document.onmousemove = null;
            };
        };
    }

    // This part makes them reappear when you refresh the page
    window.addEventListener('load', () => {
        stickies.forEach(s => spawnSticky(s));
    });
})();
