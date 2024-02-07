document.addEventListener('DOMContentLoaded',() => {
  const form = document.getElementById("contact-form");
  const feedBackBody = document.getElementById('feedback-body');
  const openCallMe = document.getElementById('open-call-me');
  const closeCallMe = document.querySelector('.feedback-close');
  const feedBackBodyEnd = document.getElementById('feedback-end');
  const collapse = document.getElementById('navbarNavAltMarkup')
  const btnHome = document.getElementById("btnHome");
  const btnAbout = document.getElementById("btnAbout");
  const btnServices = document.getElementById("btnServices");
  const btnContacts = document.getElementById("btnContacts");
  const closeEnd = document.getElementById('feedback-close-end');
  const phoneInput = document.querySelector('.phone')
  const sendBtn = document.querySelector('.form-btn')


  const sendEmail = () => {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "baar.ua.supp@gmail.com",
      Password : "13470E4D40FA1D73F0AF8D23CB91CAB5C1C4",
      To : 'baar.ua.supp@gmail.com',
      From : "baar.ua.supp@gmail.com",
      Subject : "Нове замовлення!!!",
      Body : "Ім'я: " + document.getElementById("name").value
        + "<br> Номер телефону: " + document.getElementById("phone").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Повідомлення: " + document.getElementById("message").value
    }).then(() => {
        localStorage.setItem('emailSent', Date.now().toString());
        feedBackBody.style.display='none';
        feedBackBodyEnd.style.display='block';
      }
    );
  };

  openCallMe.onclick = function () {
    const sentDateString = localStorage.getItem('emailSent');
    const emailSent = sentDateString && (Date.now() - parseInt(sentDateString)) < 20000; // 60min

    if (emailSent) {
      feedBackBodyEnd.style.display='block';
    } else {
      feedBackBody.style.display='block';
    }
  };

  closeCallMe.onclick = function () {
      feedBackBody.style.display='none';
  };

  closeEnd.onclick = function () {
      feedBackBodyEnd.style.display='none';
  };



  form.addEventListener('submit', (e) => {
    sendEmail();
    e.preventDefault();
    e.target.reset();
  });


  btnHome.addEventListener("click", function() {
    collapse.classList.remove("show");
  });

  btnAbout.addEventListener("click", function() {
    collapse.classList.remove("show");
  });

  btnServices.addEventListener("click", function() {
    collapse.classList.remove("show");
  });

  btnContacts.addEventListener("click", function() {
    collapse.classList.remove("show");
  });
});


const mask = new IMask (phoneInput, {
  mask: "+{38}(000)-00-00-000"
})

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
};

function initMap() {
    const uluru = { lat: 50.4417121, lng: 30.2859475 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;


