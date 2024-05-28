<template>
  <div class="w-full py-2 bg-red-600 text-center text-white text-xs">
    Dapatkan Diskon 50% Sekarang!
  </div>
  <nav class="bg-white w-full sticky top-0 z-50 shadow">
    <div
      class="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-20"
    >
      <a class="flex-shrink-0 ml-10" href="#">
        <img src="../assets/sepatu/logo1.png" class="h-14 w-20" alt="Logo" />
      </a>
      <div class="hidden md:flex flex-grow justify-center space-x-10 ml-10">
        <ul class="flex space-x-10">
          <li v-for="(shoe, index) in shoes" :key="index">
            <a href="#" class="text-gray-900 hover:text-gray-700">{{
              shoe.category
            }}</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-10 pr-10">
        <button type="button" class="btn btn-outline-primary">
          <i class="bi bi-search text-2xl"></i>
        </button>
        <button type="button" class="btn btn-outline-primary">
          <i class="bi bi-cart3 text-2xl"></i>
        </button>
      </div>
    </div>
  </nav>
  <section id="section-1" class="relative">
    <img
      src="../assets/sepatu/bg2.jpeg"
      alt="Background"
      class="w-full lg:h-auto h-[265px] object-fill"
    />
    <div
      class="absolute z-10 w-full h-full top-2 lg:px-20 flex flex-col items-end justify-center"
    >
      <div
        class="capitalize text-white text-xl lg:text-4xl tracking-wide leading-snug text-right"
      >
        <span>Kita sedain</span> <b>Sepatu</b><br />
        <span>Buat yang Katanya</span> <b>Starboy</b><br />
      </div>
      <div
        class="cursor-pointer bg-red-900 lg:p-4 p-2 w-40 lg:w-52 text-center text-white rounded lg:text-base text-xs mt-4 lg:mt-8 hover:opacity-70"
      >
        Dapatkan Sekarang
      </div>
    </div>
  </section>

  <section id="section-2" class="lg:py-20 py-10 w-full bg-red-100">
    <div class="w-full text-center text-xl text-dark">
      Keuntungan Yang Kami Berikan
    </div>
    <div
      class="mt-6 lg:mt-12 w-full grid grid-cols-2 lg:flex gap-6 lg:gap-10 justify-between lg:px-20 px-4"
    >
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-truck-flatbed text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Bisa Pembayaran COD
        </div>
      </div>
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-award text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Barang Original
        </div>
      </div>
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-shield-check text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Kualitas Terjamin
        </div>
      </div>
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-tags text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Harga Terjangkau
        </div>
      </div>
    </div>
  </section>
  <section id="section-3" class="py-16 lg:px-20 px-4 flex flex-col gap-10">
    <div class="w-full text-start text-xl text-dark">Kategori Produk</div>
    <div class="w-[362px] md:w-full overflow-x-auto">
      <div class="flex w-full flex-wrap">
        <div
          v-for="(shoe, index) in shoes"
          :key="index"
          :class="getClass(index)"
        >
          {{ shoe.category }}
        </div>
      </div>
    </div>
  </section>
  <section
    id="section-5"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div v-for="(shoe, index) in shoes" :key="index" class="w-full">
      <div class="w-full text-start text-xl text-dark mb-10">
        {{ shoe.category }}
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          v-for="(product, productIndex) in shoe.products"
          :key="productIndex"
          class="bg-red-100 rounded"
        >
          <div>
            <img
              :alt="product.name"
              class="w-full h-56 object-cover image-lazy pulse"
              :src="product.image"
            />
          </div>
          <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3">
            <div class="text-dark text-sm font-medium">{{ product.name }}</div>
            <div class="flex items-center gap-1">
              <i
                v-for="n in product.rating"
                :key="n"
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div class="flex justify-between w-full items-center">
              <div class="text-dark font-medium text-sm">
                {{ product.price }}$
              </div>
              <div
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i class="bi bi-cart-plus text-lg text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center hover:opacity-60 text-dark mt-8">
        <a href="#" class="">Lihat Semuanya</a>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-red-100"
  >
    <div class="w-full text-center text-xl text-dark">Testimoni Pelanggan</div>
    <div class="flex space-x-3">
      <div class="flex-1 bg-red-400 text-center p-8">
        <i class="bi bi-person-fill text-white text-4xl"></i>
        <div class="font-semibold text-white text-2xl">Muhammad Fauzi</div>
        <div class="text-white">Lorem ipmsum dolar sit amet</div>
      </div>
      <div class="flex-1 bg-red-400 text-center p-8">
        <i class="bi bi-person-fill text-white text-4xl"></i>
        <div class="font-semibold text-white text-2xl">Muhammad Fauzi</div>
        <div class="text-white">Lorem ipmsum dolar sit amet</div>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-xl text-dark">Metode Pembayaran</div>
    <div class="flex gap-8">
      <div class="bg-red-100 rounded p-4">
        <div>
          <img src="../assets/sepatu/dana.png" class="w-24 h-auto" />
        </div>
      </div>
      <div class="bg-red-100 rounded p-4">
        <div>
          <img src="../assets/sepatu/bca.png" class="w-24 h-auto" />
        </div>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 px-4 lg:px-20 flex flex-col gap-10 bg-aboo"
  >
    <div class="w-full text-start text-xl text-dark">Pertanyaan Umum (FAQ)</div>
    <div class="flex flex-col gap-4">
      <details
        v-for="(item, index) in faqItems"
        :key="index"
        class="bg-red-100 cursor-pointer p-4 flex flex-col gap-2"
      >
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">{{ item.question }}</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">{{ item.answer }}</div>
      </details>
    </div>
  </section>
  <footer>
    <div
      id="cta"
      class="bg-red-300 py-12 w-full flex lg:flex-row flex-col gap-4 justify-between items-center px-4 lg:px-20"
    >
      <div
        class="text-xl lg:text-2xl text-center lg:text-start font-medium text-white leading-normal tracking-tighter"
      >
        Mau sepatu keren & kece <br />
        beli di sneakers aja !
      </div>
      <div
        class="cursor-pointer bg-red-500 p-2 lg:p-4 w-40 lg:w-52 text-sm text-center text-white rounded hover:opacity-70"
      >
        <i class="bi bi-whatsapp"></i>WhatsApp
      </div>
    </div>
    <div
      class="bg-red-600 w-full pt-16 pb-4 px-4 lg:px-20 flex flex-col items-center lg:items-start gap-12"
    >
      <div>
        <img src="../assets/sepatu/logo1.png" alt="logo" class="w-52 h-auto" />
      </div>
      <div
        class="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-center items-center lg:justify-between w-full lg:items-start"
      >
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Alamat</div>
          <div class="text-sm lg:text-base">Cianjur, Jawa Barat</div>
        </div>
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Kategori Produk</div>
          <div
            v-for="(shoe, index) in shoes"
            :key="index"
            class="text-sm lg:text-base"
          >
            {{ shoe.category }}
          </div>
        </div>
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Kontak Kami</div>
          <div class="text-sm lg:text-base">0866-6666-6666</div>
          <div class="text-sm lg:text-base">sneakers@shop.com</div>
        </div>
      </div>
      <div class="w-full text-center text-white text-xs">
        © 2024 Sneakers All rights reserved
      </div>
    </div>
  </footer>
</template>
<script setup>
import { reactive } from "vue";
import nike1 from "../assets/sepatu/nike1.jpg";
import nike2 from "../assets/sepatu/nike2.jpg";
import nike3 from "../assets/sepatu/nike3.jpg";
import nike4 from "../assets/sepatu/nike4.jpg";
import nike5 from "../assets/sepatu/nike5.jpg";

import nb1 from "../assets/sepatu/nb1.jpg";
import nb2 from "../assets/sepatu/nb2.jpg";
import nb3 from "../assets/sepatu/nb3.jpg";
import nb4 from "../assets/sepatu/nb4.jpg";
import nb5 from "../assets/sepatu/nb5.jpg";

import salomon1 from "../assets/sepatu/salomon1.jpg";
import salomon2 from "../assets/sepatu/salomon2.jpg";
import salomon3 from "../assets/sepatu/salomon3.jpg";
import salomon4 from "../assets/sepatu/salomon4.jpg";
import salomon5 from "../assets/sepatu/salomon5.jpg";

import vans1 from "../assets/sepatu/vans1.jpg";
import vans2 from "../assets/sepatu/vans2.jpg";
import vans3 from "../assets/sepatu/vans3.jpg";
import vans4 from "../assets/sepatu/vans4.jpg";
import vans5 from "../assets/sepatu/vans5.jpg";

import ventela1 from "../assets/sepatu/Ventela1.jpg";
import ventela2 from "../assets/sepatu/Ventela2.jpg";
import ventela3 from "../assets/sepatu/Ventela3.jpg";
import ventela4 from "../assets/sepatu/Ventela4.jpg";
import ventela5 from "../assets/sepatu/Ventela5.jpg";

const shoes = reactive([
  {
    category: "Nike",
    products: [
      { name: "Nike Air Max", price: 157, image: nike1, rating: 5 },
      { name: "Nike Revolution", price: 17, image: nike2, rating: 5 },
      { name: "Nike Downshifter", price: 10, image: nike3, rating: 5 },
      { name: "Nike Flex Experience", price: 17, image: nike4, rating: 5 },
      { name: "Nike Tanjun", price: 10, image: nike5, rating: 5 },
    ],
  },
  {
    category: "New Balance",
    products: [
      { name: "New Balance Air Max", price: 157, image: nb1, rating: 5 },
      { name: "New Balance Revolution", price: 17, image: nb2, rating: 5 },
      { name: "New Balance Downshifter", price: 10, image: nb3, rating: 5 },
      { name: "New Balance Flex Experience", price: 17, image: nb4, rating: 5 },
      { name: "New Balance Tanjun", price: 10, image: nb5, rating: 5 },
    ],
  },
  {
    category: "Salomon",
    products: [
      { name: "Salomon HTML", price: 157, image: salomon1, rating: 5 },
      { name: "Salomon CSS", price: 17, image: salomon2, rating: 5 },
      { name: "Salomon Javascript", price: 10, image: salomon3, rating: 5 },
      { name: "Salomon PHP", price: 30, image: salomon4, rating: 5 },
      { name: "Salomon C++", price: 50, image: salomon5, rating: 5 },
    ],
  },
  {
    category: "Vans",
    products: [
      { name: "Vans Off The Wall", price: 157, image: vans1, rating: 5 },
      { name: "Vans Off The Wall", price: 17, image: vans2, rating: 5 },
      { name: "Vans Off The Wall", price: 10, image: vans3, rating: 5 },
      { name: "Vans Off The Wall", price: 30, image: vans4, rating: 5 },
      { name: "Vans Off The Wall", price: 50, image: vans5, rating: 5 },
    ],
  },
  {
    category: "Ventela",
    products: [
      { name: "Ventela Lokal", price: 157, image: ventela1, rating: 5 },
      { name: "Ventela Lokal", price: 17, image: ventela2, rating: 5 },
      { name: "Ventela Lokal", price: 10, image: ventela3, rating: 5 },
      { name: "Ventela Lokal", price: 30, image: ventela4, rating: 5 },
      { name: "Ventela Lokal", price: 50, image: ventela5, rating: 5 },
    ],
  },
]);

const getClass = (index) => {
  return `flex-grow cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center text-white ${
    index % 2 === 0 ? "bg-red-400" : "bg-red-300"
  }`;
};

import { ref } from "vue";

const faqItems = ref([
  {
    question: "lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "lorem ipsum dolor sit amet?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "lorem ipsum dolor sit amet?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]);
</script>
