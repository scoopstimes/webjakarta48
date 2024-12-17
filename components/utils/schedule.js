let currentDate = new Date();
let events = [];
async function fetchEvents(_0x1b9cdc, _0x615d48) {
  try {
    const _0x518cc4 = "https://intensprotectionexenew.vercel.app/api/events_jkt48?year=" + _0x1b9cdc + "&month=" + (_0x615d48 + 1);
    const _0x51df1f = await fetch(_0x518cc4);
    const _0x54769c = await _0x51df1f.json();
    if (_0x54769c.success && _0x54769c.data) {
      events = _0x54769c.data;
      renderCalendar(_0x1b9cdc, _0x615d48);
    } else {
      events = [];
      renderCalendar(_0x1b9cdc, _0x615d48);
    }
  } catch (_0x5901ae) {
    console.error("Error fetching events:", _0x5901ae);
    events = [];
    renderCalendar(_0x1b9cdc, _0x615d48);
  }
}
function renderCalendar(_0x337a02, _0xacd90b) {
  const _0x1cad35 = new Date(_0x337a02, _0xacd90b, 1);
  const _0x45e7ca = new Date(_0x337a02, _0xacd90b + 1, 0);
  document.getElementById("current-month").textContent = new Date(_0x337a02, _0xacd90b).toLocaleString("default", {
    'month': "long",
    'year': "numeric"
  });
  window.history.pushState({}, '', "/schedule/month/" + (_0xacd90b + 1));
  const _0x4eca79 = document.getElementById("calendar-grid");
  _0x4eca79.innerHTML = '';
  for (let _0xfe2523 = 0; _0xfe2523 < _0x1cad35.getDay(); _0xfe2523++) {
    _0x4eca79.appendChild(createEmptyCell());
  }
  for (let _0x57dbf7 = 1; _0x57dbf7 <= _0x45e7ca.getDate(); _0x57dbf7++) {
    const _0x4d541f = createDayCell(_0x57dbf7, _0x337a02, _0xacd90b);
    _0x4eca79.appendChild(_0x4d541f);
  }
}
function createEmptyCell() {
  const _0x29286f = document.createElement("div");
  _0x29286f.className = "day-cell bg-gray-700 rounded-lg p-2";
  return _0x29286f;
}
function parseEventDate(_0x37fae1) {
  if (!_0x37fae1) {
    return null;
  }
  const [_0x54472b, _0x11da1d, _0x823d0e] = _0x37fae1.split('/');
  const _0x18e330 = {
    'Jan': 0x0,
    'Feb': 0x1,
    'Mar': 0x2,
    'Apr': 0x3,
    'Mei': 0x4,
    'Jun': 0x5,
    'Jul': 0x6,
    'Agu': 0x7,
    'Sep': 0x8,
    'Okt': 0x9,
    'Nov': 0xa,
    'Des': 0xb
  };
  return {
    'day': parseInt(_0x54472b),
    'month': _0x18e330[_0x823d0e],
    'year': parseInt(_0x11da1d)
  };
}
function createDayCell(_0x5ce3e4, _0xfe1feb, _0x104788) {
  const _0x5c98ff = document.createElement("div");
  _0x5c98ff.className = "day-cell bg-gray-700 rounded-lg p-2 relative";
  const _0x20e1f5 = document.createElement("span");
  _0x20e1f5.className = "block text-sm mb-2";
  _0x20e1f5.textContent = _0x5ce3e4;
  _0x5c98ff.appendChild(_0x20e1f5);
  const _0x44f6fd = events.filter(_0x3b1a6e => {
    if (!_0x3b1a6e.tanggal_full || !_0x3b1a6e.have_event) {
      return false;
    }
    const _0x299ab2 = parseEventDate(_0x3b1a6e.tanggal_full);
    if (!_0x299ab2) {
      return false;
    }
    return _0x299ab2.day === _0x5ce3e4 && _0x299ab2.month === _0x104788 && _0x299ab2.year === _0xfe1feb;
  });
  _0x44f6fd.forEach(_0x17ba4d => {
    const _0x47d8d0 = document.createElement("div");
    _0x47d8d0.className = "text-xs mb-1";
    const _0x42f00b = document.createElement("span");
    _0x42f00b.className = "inline-block py-1 px-2 text-xs leading-5 rounded-lg min-w-[50px] text-left capitalize";
    if (_0x17ba4d.badge_url && (_0x17ba4d.badge_url.includes("cat17") || _0x17ba4d.badge_url.includes("cat19"))) {
      _0x42f00b.classList.add("bg-red-500");
    } else {
      _0x42f00b.classList.add("bg-blue-500");
    }
    let _0x34a743 = _0x17ba4d.event_name || '';
    if (_0x17ba4d.event_time) {
      _0x34a743 += _0x34a743 ? " - " + _0x17ba4d.event_time : _0x17ba4d.event_time;
    }
    _0x42f00b.textContent = _0x34a743;
    if (_0x17ba4d.badge_url || _0x17ba4d.event_name) {
      _0x47d8d0.appendChild(_0x42f00b);
    }
    _0x5c98ff.appendChild(_0x47d8d0);
  });
  return _0x5c98ff;
}
document.getElementById("prev-month").addEventListener("click", async () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  await fetchEvents(currentDate.getFullYear(), currentDate.getMonth());
});
document.getElementById("next-month").addEventListener("click", async () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  await fetchEvents(currentDate.getFullYear(), currentDate.getMonth());
});
fetchEvents(currentDate.getFullYear(), currentDate.getMonth());