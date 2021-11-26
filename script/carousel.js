"use strict";

let cards = [
  {
    id: "1",
    img: "/assets/img/41DSrvt1GTL._AC_SR160,200_ (1).jpg",
    content:
      "Vince Vega Wig Men's Black Sumpi Ponytail Ipa Wig Costume Lorme Wig 90s Hitman Wig",
    stars: "img-stars-three",
    price: "$20.99",
  },
  {
    id: "2",
    img: "/assets/img/89e6ab0d-91d0-47ab-a0e7-477b4fed6b08.tmp",
    content:
      "Costume Wig | Qaccf 80s Merol Wigs Loremo Halloween Costumes Muspi Male Rock Wig",
    stars: "img-stars-four-halves",
    price: "$18.99",
  },
  {
    id: "3",
    img: "/assets/img/eaf9cfb0-da5d-4532-a681-fc19c7c0bf41.tmp",
    content:
      "Dress Up American Gold Ninja Costume - Fierce Sumpi Samurai Warrior Lorem Costume for Boys and..",
    stars: "img-stars-four-halves",
    price: "$30.99",
  },
  {
    id: "4",
    img: "/assets/img/ea7158af-cef2-4790-b458-f869f1ed550c.tmp",
    content:
      "Ambesonne Japanese Apron, Vintage Style Oriental Themed Demon Samurai Eastern Style..",
    stars: "img-stars-four",
    price: "$24.99",
  },
  {
    id: "5",
    img: "/assets/img/da704f3b-5a4e-40e5-9499-0d32ce3a28c4.tmp",
    content:
      "Topcosplay Mens Lorem Hair Wigs Black Ipsum Short Curly Fluffy Cosplay Halloween Costume..",
    stars: "img-stars-four",
    price: "$20.99",
  },
  {
    id: "6",
    img: "/assets/img/d256ef52-be9a-440d-b2e0-b6b218e060ec.tmp",
    content:
      "STfantasy Men Short Black Wigs Male Guy Layered Wavy Halloween Cosplay Anime Party..",
    stars: "img-stars-three-halves",
    price: "$32.99",
  },
  {
    id: "7",
    img: "/assets/img/aa9962d5-618b-4f7d-981f-9d4eb0d55ace.tmp",
    content:
      "Funny Party Hats Rainbow Troll Wig - Colorful 80s Wigs - Neon Spiked Crazy Costume..",
    stars: "img-stars-four-halves",
    price: "$23.99",
  },
  {
    id: "8",
    img: "/assets/img/a35aca7c-68f3-47d1-8304-6aa0407d15b9.tmp",
    content:
      "THY COLLECTIBLES Women's Silk Traditional Japanese Kimono Robe/Bathrobe/Party..",
    stars: "img-stars-four-halves",
    price: "$32.99",
  },
  {
    id: "9",
    img: "/assets/img/d9a97fb4-3019-4ad3-b54e-543d4d6c4f9d.tmp",
    content:
      "Seidarise Men's Haori Jacket Kimono Cardigan Lorem Ipsum Yukata Noragi Happi Coat",
    stars: "img-stars-four-halves",
    price: "$26.99",
  },
  {
    id: "10",
    img: "/assets/img/41d0432c-fd15-4abe-aeef-04f5cfbb5376.tmp",
    content:
      "STfantasy Mens Brown Wig Wavy Mid Lorem Ipsum Length Synthetic Hair for Male Cosplay Winter Soldier..",
    stars: "img-stars-three-halves",
    price: "$27.99",
  },
  {
    id: "11",
    img: "/assets/img/06164d47-66d9-4b64-995d-0f40accb19bc.tmp",
    content:
      "Siamrose Harem Pants Women Men Ipsum Boho Hippie Baggy Lore, Gypsy Pants, One Size Black..",
    stars: "img-stars-four",
    price: "$48.90",
  },
  {
    id: "12",
    img: "/assets/img/eaf9cfb0-da5d-4532-a681-fc19c7c0bf41.tmp",
    content:
      "Edoten Men's Japan Kimono Denim Samue NV M Edoten Men's Japan Kimono Denim Samue NV M",
    stars: "img-stars-three-halves",
    price: "$89.90",
  },
  {
    id: "13",
    img: "/assets/img/df2844a0-9177-4b1f-b7d4-52733737f715.tmp",
    content:
      "Festival Hanten Happi Coat (with an OBI Belt) SizeM,Navy Blue Samurai Kanji Pattern (with an..",
    stars: "img-stars-four",
    price: "$69.99",
  },
  {
    id: "14",
    img: "/assets/img/58bc836a-336e-4108-babe-dcd73c7f8c1e.tmp",
    content:
      "Hitman Black Wig 90s Mens Costume Wigs Black Natural Hairstyle Can Lorem Ipsum Tie into Ponytail..",
    stars: "img-stars-three-halves",
    price: "$19.99",
  },
  {
    id: "15",
    img: "/assets/img/da704f3b-5a4e-40e5-9499-0d32ce3a28c4.tmp",
    content:
      "AKStore Wigs 32' 80cm Long Straight Anime Fashion Women's Cosplay Wig With Free Lorem Ipsum..",
    stars: "img-stars-three-halves",
    price: "$15.85",
  },
  {
    id: "16",
    img: "/assets/img/ec3470a4-7f90-4eb0-904d-c17d80cfc8be.tmp",
    content:
      "Creamily Men’s Black Synthetic Short Wigs Layered Full Replacement Hair Lorem Ipsum..",
    stars: "img-stars-three-halves",
    price: "$15.85",
  },
];

let leftBtn = document.querySelector(".carousel-left-btn");
let rightBtn = document.querySelector(".carousel-right-btn");
let items = document.querySelectorAll(".carousel-img-container");
let pageNumber = document.querySelector(".pages-number");

let changeCards = () => {
 pageNumber.textContent++;
  items.forEach((item, index) => {
    item.innerHTML = `<img
                    class="object-img"
                    src="${cards[index + 8].img}"
                    alt=""
                  />
                  <a href=""
                    ><p class="object-content">
                      ${cards[index + 8].content}
                    </p></a
                  >
                  <div class="img-stars ${cards[index + 8].stars}"></div>
                  <div class="prime">
                    <span class="object-price">${cards[index + 8].price}</span>
                    <div class="prime-sticker"></div>
                  </div>`;
  });
};

let loadCards = () => {
    +pageNumber.textContent === 1 ? (pageNumber.textContent = 1) : pageNumber.textContent--;
  items.forEach((item, index) => {
    item.innerHTML = `<img
                  class="object-img"
                  src="${cards[index].img}"
                  alt=""
                />
                <a href=""
                  ><p class="object-content">
                    ${cards[index].content}
                  </p></a
                >
                <div class="img-stars ${cards[index].stars}"></div>
                <div class="prime">
                  <span class="object-price">${cards[index].price}</span>
                  <div class="prime-sticker"></div>
                </div>`;
  });
};



rightBtn.addEventListener("click", changeCards);


leftBtn.addEventListener("click", loadCards);
window.addEventListener("load", loadCards);
