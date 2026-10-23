// Mobile menu, footer year, photo lightbox, contact form.
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    };
    var mq = window.matchMedia("(max-width: 760px)");
    var sync = function () { setOpen(!mq.matches); };
    sync();
    mq.addEventListener ? mq.addEventListener("change", sync) : mq.addListener(sync);
    toggle.addEventListener("click", function () { setOpen(nav.hidden); });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Lightbox
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox] a"));
  if (links.length && typeof HTMLDialogElement === "function") {
    var dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.setAttribute("aria-label", "Project photo");
    dlg.innerHTML =
      '<div class="lightbox-inner">' +
      '<span class="lb-count" aria-live="polite"></span>' +
      '<button class="lb-btn lb-close" type="button">Close</button>' +
      '<button class="lb-btn lb-prev" type="button" aria-label="Previous photo">Prev</button>' +
      '<img alt="">' +
      '<button class="lb-btn lb-next" type="button" aria-label="Next photo">Next</button>' +
      "</div>";
    document.body.appendChild(dlg);
    var img = dlg.querySelector("img");
    var count = dlg.querySelector(".lb-count");
    var index = 0;

    var show = function (i) {
      index = (i + links.length) % links.length;
      var a = links[index];
      img.src = a.getAttribute("href");
      var thumb = a.querySelector("img");
      img.alt = thumb ? thumb.alt : "";
      count.textContent = "Photo " + (index + 1) + " of " + links.length;
    };

    links.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        show(i);
        dlg.showModal();
      });
    });
    dlg.querySelector(".lb-close").addEventListener("click", function () { dlg.close(); });
    dlg.querySelector(".lb-prev").addEventListener("click", function () { show(index - 1); });
    dlg.querySelector(".lb-next").addEventListener("click", function () { show(index + 1); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  }

  // Contact form (Web3Forms)
  var form = document.querySelector("form.contact");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Sending…";
      status.textContent = "";
      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            status.textContent = "Message sent. We'll get back to you within one business day.";
          } else {
            status.textContent = "Your message didn't go through. Please call (914) 803-0850 or email frank@fjbcontracting.com.";
          }
        })
        .catch(function () {
          status.textContent = "Your message didn't go through. Please call (914) 803-0850 or email frank@fjbcontracting.com.";
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = "Send message";
        });
    });
  }
})();
