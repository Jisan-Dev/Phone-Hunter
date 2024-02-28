const productsContainer = document.getElementById('products__container');
const searchInp = document.getElementById('searchInp');
const showAllBtn = document.getElementById('products__btn-show-all');

const loadPhones = async (searchValue) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};

const displayPhone = (phones) => {
  // make container empty every time new search hit
  productsContainer.innerHTML = '';

  // display 'show all' btn if products are more than 12 in quantity
  if (phones.length > 12) {
    showAllBtn.classList.remove('hidden');
  } else {
    showAllBtn.classList.add('hidden');
  }

  phones = phones.slice(0, 12);
  // loop through each phone object and insert html
  phones.forEach((phone) => {
    productsContainer.innerHTML += `
    <div
      class="flex flex-col items-center justify-center rounded-lg border border-['#CFCFCF'] px-9 py-6">
      <div class="w-full h-[300px] flex items-center justify-center bg-blue-600 bg-opacity-5 rounded-lg mb-6">
        <img src=${phone.image} class="" alt="" />
      </div>
      <h3 class="text-neutral-700 text-[25px] font-bold mb-5">${phone.phone_name}</h3>
      <p class="text-neutral-500 text-lg font-normal text-center mb-2">
        There are many variations of passages of available, but the majority have suffered
      </p>
      <p class="text-neutral-700 text-[25px] font-bold mb-4">$999</p>
      <button class="bg-blue-600 rounded-lg py-2 px-6 text-white text-xl font-semibold">
        Show Details
      </button>
    </div>
    `;
  });
};

const handleSearch = () => {
  const searchValue = searchInp.value;
  loadPhones(searchValue);
  searchInp.value = '';
};

// loadPhones();
