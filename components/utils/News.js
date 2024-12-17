async function fetchLatestNews() {
  try {
    const _0x5813d3 = await fetch("https://intensprotectionexenew.vercel.app/api/news");
    const _0x22098a = await _0x5813d3.json();
    const _0x1711da = _0x22098a.berita.slice(0, 3);
    const _0x31573b = document.getElementById("newsContainer");
    _0x31573b.innerHTML = '';
    _0x1711da.forEach(_0x3a06bb => {
      const _0x2900de = document.createElement("div");
      _0x2900de.className = "bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 " ;
      
      _0x2900de.innerHTML = "\n                        <div class=\"flex items-center mb-2 \" style=\"width: 95%;\">\n                            <img src=\"https://res.cloudinary.com/haymzm4wp/image/upload/assets/jkt48" + _0x3a06bb.badge_url + "\" alt=\"News Badge\" class=\" mr-2 rounded-full\" style=\"width: 60px; height:20px;\"/>\n                            <i class=\"fas fa-info-circle\"></i>\n                        </div>\n                        <h3 class=\" font-semibold mb-2 \" style=\"font-size: 17px;\">" + _0x3a06bb.judul + "</h3>\n                        <p class=\"text-gray-400\">" + _0x3a06bb.waktu + "</p>\n                    ";
      _0x2900de.style.cursor = "pointer";
      _0x2900de.addEventListener("click", () => {
        window.location.href = "/news/" + _0x3a06bb.berita_id;
      });
      _0x31573b.appendChild(_0x2900de);
    });
  } catch (_0x13de01) {
    console.error("Error fetching news:", _0x13de01);
    const _0x46143b = document.getElementById("newsContainer");
    _0x46143b.innerHTML = "\n                    <div class=\"col-span-3 text-center text-gray-400\">\n                        <i class=\"fas fa-exclamation-circle text-2xl mb-2\"></i>\n                        <p>Gagal mendapatkan data news 😭.</p>\n                    </div>\n                ";
  }
}
document.addEventListener("DOMContentLoaded", fetchLatestNews);