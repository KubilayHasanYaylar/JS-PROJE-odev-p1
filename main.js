// api den kullanicidan cekmek

async function fetchUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error("Kullanıcı verileri alınamadı:", error);
      document.getElementById("userCardsContainer").innerHTML =
        " <p>Veriler alınırken bir hata oluştu.</p>";
    }
  }
  
  //kullanıcı verilerini ekrana basan fonksiyon
  function displayUsers(users) {
    const container = document.getElementById("userCardsContainer");
    container.innerHTML = "";
  
    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const basicInfo = `
      <div class="section" >
      <h3> <i class="fas fa-user"></i>Temel Bilgiler</h3>
      <p><strong>ID:</strong> ${user.id} </p>
      <p> <strong>AD:</strong> ${user.name} </p>
      <p> <strong>Kullanıcı Adı:</strong>${user.username} </p>
      </div>
      `;
      const addressInfo = `
      <div class="section" >
      <h3><i class="fas fa-location-dot"></i> Adres Bilgileri</h3>
      <p>  Şehir: <strong></strong> ${user.address.city} </p>
      <p> Sokak:  <strong></strong> ${user.address.street} </p>
      <p>  Posta Kodu: <strong></strong> ${user.address.zipcode} </p>
  
      </div>
      `;
      const companyInfo = `
      <div class="section" >
      <h3><i class="fas fa-building"></i>Şirket Bilgileri</h3>
      <p>  Şirket: <strong></strong> ${user.company.name} </p>
      <p> Slogan:  <strong></strong> ${user.company.catchPhrase} </p>
      <p>  İş alanı: <strong></strong> ${user.company.bs} </p>
  
      </div>
  
      `;
      const contactInfo = `
      <div class="section" >
      <h3><i class="fas fa-envelope"></i> İletişim Bilgileri</h3>
      <p> E-posta: <strong></strong> ${user.email} </p>
      <p> Telefon:  <strong></strong> ${user.phone} </p>
      <p>  Web Sitesi: <strong></strong> <a href="http://${user.website}" target="_blank">${user.website}</a> </p>
  
      </div>
      `;
  
      card.innerHTML = `
      <h2>  ${user.name}  </h2>
      ${basicInfo}
      ${addressInfo}
      ${companyInfo}
      ${contactInfo}
      `;
      container.appendChild(card);
    });
  }
  
  fetchUsers();
  