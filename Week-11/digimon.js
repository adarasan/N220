let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
  const digiResponse = await fetch(
    `https://digimon-api.vercel.app/api/digimon`
  );
  const digiData = await digiResponse.json();
  return digiData;
}

async function updateSection() {
  const digimonPage = document.getElementById("digimonPage");
  const digimonList = document.getElementById("digimonList");

  const allDigimon = await getDigimon();

  totalPages = Math.ceil(allDigimon.length / 10);

  digimonPage.innerHTML = `<h3>Page ${currentPage + 1} of ${totalPages}</h3>`;

  digimonPage.innerHTML += `
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
        <th>Level</th>
      </tr>
    </thead>
    <tbody id="digimonList"></tbody>
  </table>`;

  let pageNumbers = "";
  for (let i = 0; i < totalPages; i++) {
    pageNumbers += `<option value="${i}">${i + 1}</option>`;
  }

  digimonPage.innerHTML += `
  <div>
    <button onclick="goToPage(-1)">Previous Page</button>
    <select onchange="changePage(event)">
      ${pageNumbers}
    </select>
    <button onclick="goToPage(1)">Next Page</button>
  </div>`;

  updatePage(allDigimon);
}

function changePage(e) {
  currentPage = parseInt(e.currentTarget.value);
  updateSection();
}

function goToPage(pageDirection) {
  if (pageDirection > 0) {
    if (currentPage < totalPages - 1) currentPage++;
    else alert("There are no additional pages");
  } else {
    if (currentPage > 0) currentPage--;
    else alert("This is the first page.");
  }
  updateSection();
}

async function updatePage(allDigimon) {
  const digimonList = document.getElementById("digimonList");
  const startingIndex = currentPage * 10;
  const endingIndex = startingIndex + 10;

  digimonList.innerHTML = "";
  for (let i = startingIndex; i < endingIndex; i++) {
    if (i >= allDigimon.length) break;
    const digimon = allDigimon[i];
    digimonList.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${digimon.name}</td>
        <td><img src="${digimon.img}" height="50" /></td>
        <td>${digimon.level}</td>
      </tr>`;
  }
}

updateSection();
