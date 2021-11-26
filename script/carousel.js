"use strict";

let cards = [
  {
    id: "1",
    img: "/assets/img/41DSrvt1GTL._AC_SR160,200_ (1).jpg",
    content:
      "Vince Vega Wig Men's Black Ponytail Wig Costume Wig 90s Hitman Wig",
    stars: "img-stars-three",
    price: "$20.99",
  },
  {
    id: "2",
    img: "/assets/img/41egj-AierL._AC_SR160,200_ (1)",
    content:
      "Costume Wig | Qaccf 80s Wigs Halloween Costumes Male Rock Wig Long Culry Punk Heavy..",
    stars: "img-stars-four-halves",
    price: "$18.99",
  },
  {
    id: "3",
    img: "/assets/img/41-LONvRxVL._AC_SR160,200_ (1)",
    content:
      "Dress Up American Gold Ninja Costume - Fierce Samurai Warrior Costume for Boys and..",
    stars: "img-stars-four-halves",
    price: "$30.99",
  },
  {
    id: "4",
    img: "/assets/img/51EEpkqm2KL._AC_SR160,200_ (1)",
    content:
      "Ambesonne Japanese Apron, Vintage Style Oriental Themed Demon Samurai Eastern Style..",
    stars: "img-stars-four",
    price: "$24.99",
  },
  {
    id: "5",
    img: "/assets/img/41lChV9A-xL._AC_SR160,200_ (1)",
    content:
      "Topcosplay Mens Hair Wigs Black Short Curly Fluffy Cosplay Halloween Costume..",
    stars: "img-stars-four",
    price: "$20.99",
  },
  {
    id: "6",
    img: "/assets/img/31sxiNhAD9L._AC_SR160,200_ (1)",
    content:
      "STfantasy Men Short Black Wigs Male Guy Layered Wavy Halloween Cosplay Anime Party..",
    stars: "img-stars-three-halves",
    price: "$32.99",
  },
  {
    id: "7",
    img: "/assets/img/51lMO2dWUjL._AC_SR160,200_ (1)",
    content:
      "Funny Party Hats Rainbow Troll Wig - Colorful 80s Wigs - Neon Spiked Crazy Costume..",
    stars: "img-stars-four-halves",
    price: "$23.99",
  },
  {
    id: "8",
    img: "/assets/img/418oltGVYfL._AC_SR160,200_ (1)",
    content:
      "THY COLLECTIBLES Women's Silk Traditional Japanese Kimono Robe/Bathrobe/Party..",
    stars: "img-stars-four-halves",
    price: "$32.99",
  },
  {
    id: "9",
    img: "/assets/img/67bd8171-bb2d-4aae-bdb7-2d6b037d04cb.tmp",
    content:
      "Seidarise Men's Haori Jacket Kimono Cardigan Yukata Noragi Happi Coat",
    stars: "img-stars-four-halves",
    price: "$26.99",
  },
  {
    id: "10",
    img: "/assets/img/313ZIsyH16L._AC_SR160,200_ (1)",
    content:
      "STfantasy Mens Brown Wig Wavy Mid Length Synthetic Hair for Male Cosplay Winter Soldier..",
    stars: "img-stars-three-halves",
    price: "$27.99",
  },
  {
    id: "11",
    img: "/assets/img/06164d47-66d9-4b64-995d-0f40accb19bc.tmp",
    content:
      "Siamrose Harem Pants Women Men Boho Hippie Baggy Gypsy Pants, One Size Black..",
    stars: "img-stars-four",
    price: "$48.90",
  },
  {
    id: "12",
    img: "/assets/img/eaf9cfb0-da5d-4532-a681-fc19c7c0bf41.tmp",
    content: "Edoten Men's Japan Kimono Denim Samue NV M",
    stars: "img-stars-three-halves",
    price: "$89.90",
  },
  {
    id: "13",
    img: "/assets/img/d256ef52-be9a-440d-b2e0-b6b218e060ec.tmp",
    content:
      "Festival Hanten Happi Coat (with an OBI Belt) SizeM,Navy Blue Samurai Kanji Pattern (with an..",
    stars: "img-stars-four",
    price: "$69.99",
  },
  {
    id: "14",
    img: "/assets/img/a35aca7c-68f3-47d1-8304-6aa0407d15b9.tmp",
    content:
      "Hitman Black Wig 90s Mens Costume Wigs Black Natural Hairstyle Can Tie into Ponytail..",
    stars: "img-stars-three-halves",
    price: "$19.99",
  },
  {
    id: "15",
    img: "/assets/img/da704f3b-5a4e-40e5-9499-0d32ce3a28c4.tmp",
    content:
      "AKStore Wigs 32' 80cm Long Straight Anime Fashion Women's Cosplay Wig With Free..",
    stars: "img-stars-three-halves",
    price: "$15.85",
  },
  {
    id: "16",
    img: "/assets/img/da704f3b-5a4e-40e5-9499-0d32ce3a28c4.tmp",
    content:
      "AKStore Wigs 32' 80cm Long Straight Anime Fashion Women's Cosplay Wig With Free..",
    stars: "img-stars-three-halves",
    price: "$15.85",
  },
];

let leftBtn = document.querySelector(".carousel-left-btn");
let rightBtn = document.querySelector(".carousel-right-btn");
let items = document.querySelectorAll(".carousel-img-container");

let changeCards = () => {
  cards.forEach((card, index) => {
    console.log(
      `<img
                  class="object-img"
                  src="${card[index].img}"
                  alt=""
                />
                <a href=""
                  ><p class="object-content">
                    ${card[index].content}
                  </p></a
                >
                <div class="img-stars">${card[index].stars}</div>
                <div class="prime">
                  <span class="object-price">${card[index].price}</span>
                  <div class="prime-sticker"></div>
                </div>`
    );
  });
};

rightBtn.addEventListener("click", changeCards);
