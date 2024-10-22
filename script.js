const cityList = [
  {
    Img_scr: "./assets/img/1905year.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4491093621905!2d60.59446207744233!3d56.83823997350532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8ab92d9b9f%3A0xa9573fbeb44831e9!2z0L_Quy4gMTkwNSDQs9C-0LTQsCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDE0!5e0!3m2!1sru!2sru!4v1728936782649!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Площадь 1905 года",
    indexObj: 0,
  },
  {
    Img_scr: "./assets/img/secondHouse-of-checkist.png",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.0860025656148!2d60.632838112779424!3d56.86162020593547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16dc5558ad7eb%3A0x47624145d9cd9abb!2z0YPQuy4g0KfQtdC60LjRgdGC0L7Qsiwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMTM3!5e0!3m2!1sru!2sru!4v1729060751115!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Дом чекистов",
    indexObj: 1,
  },
  {
    Img_scr: "./assets/img/okt-sqare.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.1005395470968!2d60.59550748919695!3d56.84249469337674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e61a8323e45%3A0xc3fa10d54b3c49b9!2z0J7QutGC0Y_QsdGA0YzRgdC60LDRjyDQv9C7Liwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1729006716315!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Октябрьская площадь",
    indexObj: 2,
  },
  {
    Img_scr: "./assets/img/ekbCity.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.138706345739!2d60.58524799554698!3d56.84356460519855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e60b249851b%3A0x8e3e98a0a15d7362!2z0JHQsNGI0L3RjyAnJ9CY0YHQtdGC0YwnJw!5e0!3m2!1sru!2sru!4v1729006849607!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Квартал «Екатеринбург-Сити»",
    indexObj: 3,
  },
  {
    Img_scr: "./assets/img/elzin.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.061626726333!2d60.58835217744273!3d56.84488677350793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e67465f8ea5%3A0x2d55b7e6b1aa059!2z0JXQu9GM0YbQuNC9INCm0LXQvdGC0YA!5e0!3m2!1sru!2sru!4v1729006943518!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Ельцин Центр",
    indexObj: 4,
  },
  {
    Img_scr: "./assets/img/square.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1297.5501158977713!2d60.59522386456155!3d56.842333396949044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e61af56f913%3A0xbdf51b74a2ab8206!2z0J7QutGC0Y_QsdGA0YzRgdC60LDRjyDQv9C70L7RidCw0LTRjA!5e0!3m2!1sru!2sru!4v1729007066167!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Сквер в честь 275-летия Екатеринбурга",
    indexObj: 5,
  },
  {
    Img_scr: "./assets/img/home.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.1788600311083!2d60.59469166131707!3d56.84119922110858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e61da9c2e79%3A0x575cae2c3a22b65!2z0L3QsNCxLiDQoNCw0LHQvtGH0LXQuSDQvNC-0LvQvtC00LXQttC4LCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINCh0LLQtdGA0LTQu9C-0LLRgdC60LDRjyDQvtCx0LsuLCA2MjAwMTQ!5e0!3m2!1sru!2sru!4v1729007264498!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Набережная Рабочей Молодёжи",
    indexObj: 6,
  },
  {
    Img_scr: "./assets/img/gim.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4444256934307!2d60.59804274342254!3d56.83832031923502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8af60d9cff%3A0x5f487a09ce6c4518!2z0JPQuNC80L3QsNC30LjRjyDihJYgOQ!5e0!3m2!1sru!2sru!4v1729007361013!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Мужская гимназия",
    indexObj: 7,
  },
  {
    Img_scr: "./assets/img/plotinka.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4695211211147!2d60.6019191998703!3d56.83788982028663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8a4badf5c7%3A0x884800455bf4c21b!2z0J_Qu9C-0YLQuNC90LrQsA!5e0!3m2!1sru!2sru!4v1729007447363!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Исторический сквер",
    indexObj: 8,
  },
  {
    Img_scr: "./assets/img/voda.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.235186358091!2d60.60464076814041!3d56.837875211581256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8bd2160ca7%3A0xa6b0557b5668013b!2z0JLQvtC00L7QvdCw0L_QvtGA0L3QsNGPINCx0LDRiNC90Y8!5e0!3m2!1sru!2sru!4v1729007590368!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Музеи исторического сквера",
    indexObj: 9,
  },
  {
    Img_scr: "./assets/img/work.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.444288453689!2d60.60419607489687!3d56.83832267350527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e897d692ccb%3A0xd5975fecb335a6d1!2z0J_Qu9C-0YnQsNC00Ywg0KLRgNGD0LTQsCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDc1!5e0!3m2!1sru!2sru!4v1729007674219!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Площадь труда",
    indexObj: 10,
  },
  {
    Img_scr: "./assets/img/Zerokilowetr.jpg",
    Map_scr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.3867344995247!2d60.60632617744242!3d56.839309973505706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16dcc60a95555%3A0xf77351846a2e4352!2z0J_QvtGH0YLQsCDQoNC-0YHRgdC40Lg!5e0!3m2!1sru!2sru!4v1729423559763!5m2!1sru!2sru",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
    Title: "Нулевой километр (Дом связи)",
    indexObj: 11,
  },
];

const linkList = [
  {
    TitleLink: "1. Площадь 1905 года",
    classLink: "buildings",
    indexLink: 0,
  },
  {
    TitleLink: "2. Второй Дом Советов («Дом Чекиста»)",
    classLink: "buildings",
    indexLink: 1,
  },
  {
    TitleLink: "3. Октябрьская площадь",
    classLink: "parki",
    indexLink: 2,
  },
  {
    TitleLink: "4. Квартал «Екатеринбург-Сити»",
    classLink: "parki",
    indexLink: 3,
  },
  {
    TitleLink: "5. Ельцин Центр",
    classLink: "buildings",
    indexLink: 4,
  },
  {
    TitleLink: "6. Сквер в честь 275-летия Екатеринбурга",
    classLink: "parki",
    indexLink: 5,
  },
  {
    TitleLink: "7. Набережная Рабочей Молодёжи",
    classLink: "parki",
    indexLink: 6,
  },
  {
    TitleLink: "8. Мужская гимназия",
    classLink: "buildings",
    indexLink: 7,
  },
  {
    TitleLink: "9. Исторический сквер",
    classLink: "parki",
    indexLink: 8,
  },
  {
    TitleLink: "10. Музеи исторического сквера",
    classLink: "museumi",
    indexLink: 9,
  },
  {
    TitleLink: "11. Площадь труда",
    classLink: "parki",
    indexLink: 10,
  },
  {
    TitleLink: "12. Нулевой километр (Дом связи)",
    classLink: "buildings",
    indexLink: 11,
  },
];
// Пагинацию тоже можно сделаьть с помощью классов, орисовать все но каким то добавлять что нибудь

localStorage.setItem(parks, parks.checked);
localStorage.setItem(buildings, buildings.checked);
localStorage.setItem(museums, museums.checked);
localStorage.setItem(hrams, hrams.checked);

function cicleLinks() {
  const parentBlock = document.querySelector(".redline__bigText-text");
  linkList.forEach((link) => {
    const links = document.createElement("a");
    if (link.indexLink <= 10) {
      links.classList.add(link.classLink);
      links.classList.add("firstPage");
      links.innerHTML = `<a onclick="ShowCard(${link.indexLink})" id="${link.indexLink}" data-index=${link.indexLink} class="${link.classLink} cardLink" >${link.TitleLink}</a>`;
      parentBlock.appendChild(links);
    } else if (link.indexLink > 10 && link.indexLink <= 20) {
      links.classList.add(link.classLink);
      links.classList.add("secondPage");
      links.classList.add("cardLink");
      links.classList.add("hidePage");
      links.innerHTML = `<a onclick="ShowCard(${link.indexLink})" id="${link.indexLink}" data-index=${link.indexLink} class="${link.classLink} cardLink">${link.TitleLink}</a>`;
      parentBlock.appendChild(links);
    }
  });
}

function cikle() {
  const parentCards = document.querySelector(
    ".redline__marshruts__cardBox_SmallCardBox"
  );
  cityList.forEach((city) => {
    const card = document.createElement("div");
    if (city.indexObj <= 10) {
      card.classList.add("redline__marshruts__cardBox_card");
      card.innerHTML = `<div class="redline__marshruts__cardBox_card-img">
                  <img src=${city.Img_scr} alt="" />
                  
                 </div>
                <div class="redline__marshruts__cardBox_card-columnbox">
                  <div class="redline__marshruts__cardBox_card-map">
                    <iframe
                      src=${city.Map_scr}
                      width="200"
                      height="200"
                      style="border: 0;border-radius: 5px"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div class="redline__marshruts__cardBox_card-description">
                    <p>
                      ${city.Text}
                    </p>
                  </div>
              </div>`;
      parentCards.appendChild(card);
    } else if (city.indexObj > 10 && city.indexObj <= 20) {
      card.classList.add("redline__marshruts__cardBox_card");

      card.innerHTML = `<div class="redline__marshruts__cardBox_card-img">
                  <img src=${city.Img_scr} alt="" />
                  
                 </div>
                <div class="redline__marshruts__cardBox_card-columnbox">
                  <div class="redline__marshruts__cardBox_card-map">
                    <iframe
                      src=${city.Map_scr}
                      width="200"
                      height="200"
                      style="border: 0;border-radius: 5px"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div class="redline__marshruts__cardBox_card-description">
                    <p>
                      ${city.Text}
                    </p>
                  </div>
              </div>`;
      parentCards.appendChild(card);
    }
  });
}
cikle();
cicleLinks();

const firstpage = document.querySelectorAll(".firstPage");
const secondpage = document.querySelectorAll(".secondPage");
const thirdpage = document.querySelectorAll(".thirdPage");
const fourpage = document.querySelectorAll(".fourPage");
function pagination(page) {
  if (page == "1") {
    firstpage.forEach(function (firstpages) {
      firstpages.classList.remove("hidePage");
    });
    secondpage.forEach(function (secondpages) {
      secondpages.classList.add("hidePage");
    });
  } else if (page == "2") {
    secondpage.forEach(function (secondpages) {
      secondpages.classList.remove("hidePage");
    });
    firstpage.forEach(function (firstpages) {
      firstpages.classList.add("hidePage");
    });
  }
}

const burger = document.querySelector(".burgerMeny");
function burgerMeny() {  
  if (burger.classList.contains("bhide")) {
    burger.classList.remove("bhide");
  } else {
    burger.classList.add("bhide");
  }
}

const Buildings = document.querySelectorAll(".buildings");
const Parks = document.querySelectorAll(".parki");
const Museums = document.querySelectorAll(".museumi");
const Hrams = document.querySelectorAll(".hrami");

function viewElements() {
  const buildingsState = localStorage.getItem("buildings");
  const ParksState = localStorage.getItem("parks");
  const MuseumsState = localStorage.getItem("museums");
  const HramsState = localStorage.getItem("hrams");
  console.log(buildingsState);
  if (
    buildingsState == "true" ||
    ParksState == "true" ||
    MuseumsState == "true" ||
    HramsState == "true"
  ) {
    console.log("ddd");
    Buildings.forEach(function (building) {
      building.classList.add("hide");
    });
    Parks.forEach(function (parks) {
      parks.classList.add("hide");
    });
    Museums.forEach(function (museums) {
      museums.classList.add("hide");
    });
    Hrams.forEach(function (hrams) {
      hrams.classList.add("hide");
    });
  } else {
    Buildings.forEach(function (building) {
      building.classList.remove("hide");
    });
    Parks.forEach(function (parks) {
      parks.classList.remove("hide");
    });
    Museums.forEach(function (museums) {
      museums.classList.remove("hide");
    });
    Hrams.forEach(function (hrams) {
      hrams.classList.remove("hide");
    });
  }
  if (buildingsState == "true") {
    Buildings.forEach(function (building) {
      building.classList.remove("hide");
    });
  }
  if (ParksState == "true") {
    Parks.forEach(function (parks) {
      parks.classList.remove("hide");
    });
  }
  if (MuseumsState == "true") {
    Museums.forEach(function (museums) {
      museums.classList.remove("hide");
    });
  }
  if (HramsState == "true") {
    Hrams.forEach(function (hrams) {
      hrams.classList.remove("hide");
    });
  }
}

function findCitiesByTitle(searchString) {
  const lowerCaseSearchString = searchString.toLowerCase();
  return cityList
    .filter((city) => city.Title.toLowerCase().includes(lowerCaseSearchString))
    .map((city) => city.indexObj);
}




function SeeSearch() {
  const request = document.getElementById("search").value;
  const searchList = findCitiesByTitle(request); // Получаем массив индексов
  const linksCard = document.querySelectorAll(".cardLink");

  
  linksCard.forEach(function (link) {
    const indexStr = link.getAttribute("data-index");
    const index = indexStr !== null ? Number(indexStr) : NaN;
    if (!isNaN(index) && !searchList.includes(index)) {
      link.classList.add("hide");
    } else {
      link.classList.remove("hide");
    }
  });
}

const number_card = document.querySelector(".redline__marshruts-circle");
const cards = document.querySelectorAll(".redline__marshruts__cardBox_card");
const cardName = document.querySelector(".redline__marshruts-text");
const Body = document.querySelector("body");
let curentCardIndex = 0;

function ShowCard(index) {
  cards[curentCardIndex].classList.remove("active");
  cards[index].classList.add("active");
  cardName.innerHTML = `<p class="redline__marshruts-text">${cityList[index].Title}</p>`;
  curentCardIndex = index;
  number_card.innerHTML = `<p>${index + 1}</p>`;
  const active_title_text = document.getElementById(index);
  const title_blockd = document.querySelector(".redline__marshruts-text");
}

const TitleEKB = document.querySelector(".aboutcity__title");
const TextEKB = document.querySelector(".aboutcity__text");
const Mainpage = document.querySelector(".aboutcitY");
function ShowEkb() {
  if (Mainpage.className == "aboutcitY") {
    TitleEKB.innerHTML = `<h1 class="aboutcity__title">город бесов😈</h1>`;
    TextEKB.innerHTML = `<p class="aboutcity__text">
          Самый крутой город на руси. Самый модный и инновационный!
        </p>`;
    Mainpage.classList.add("zloiEKB");
    Mainpage.classList.remove("aboutcitY");
  } else {
    TitleEKB.innerHTML = `<h1 class="aboutcity__title">Екатеринбург</h1>`;
    TextEKB.innerHTML = `<p class="aboutcity__text">
          Главный кород Свердловской области. Эталон промышленного города,
          конструктивизма и постмодернизма в одном лице
        </p>>`;
    Mainpage.classList.add("aboutcitY");
    Mainpage.classList.remove("zloiEKB");
  }
}

const Strelka = document.querySelector(".streka");
const MapText = document.querySelector(".Bigmap__text");
const MapEkb = document.querySelector(".mapsmall");

function hedeText() {
  if (MapEkb.className == "mapsmall") {
    MapText.classList.replace("noroute", "route");
    Strelka.classList.replace("streka", "streka_hiden");
    MapEkb.classList.replace("mapsmall", "mapbig");
  } else {
    MapText.classList.replace("route", "noroute");
    Strelka.classList.replace("streka_hiden", "streka");
    MapEkb.classList.replace("mapbig", "mapsmall");
  }
}

document.querySelectorAll(".check").forEach((el) => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
});

const modalForm = document.querySelector(".modal");
function ShowModal() {
  modalForm.classList.add("activity");
  modalForm.classList.remove("deactiv");
  Body.classList.add("owerflo");
  Body.classList.remove("noover");
}

function HideModal() {
  modalForm.classList.add("deactiv");
  modalForm.classList.remove("activity");
  Body.classList.add("noover");
  Body.classList.remove("owerflo");
}
document.querySelector(".controls").addEventListener("click", function (event) {
  if (event.target.classList.contains("arrow")) {
    let index = curentCardIndex - 1;
    if (index < 0) {
      index = cards.length - 1;
    }
    ShowCard(index);
  } else if (event.target.classList.contains("arrow-reverse")) {
    let index = curentCardIndex + 1;
    if (index >= cards.length) {
      index = 0;
    }
    ShowCard(index);
  }
});
ShowCard(curentCardIndex);
