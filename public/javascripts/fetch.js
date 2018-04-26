fetch('https://randomuser.me/api/?results=100').then((response) => {
            return response.json();
        }).then((myJSON) => {
            let html = '';
            for (const result of myJSON.results) {
                html = `${html}
                    <div class="person">
                        <img align="middle" src="${result.picture.medium}" alt="Profile Picture">
                        <h3><span class="flag-icon flag-icon-${result.nat.toLowerCase()}"></span> ${result.name.title} ${result.name.first} ${result.name.last}</h3>
                    </div>
                `;
            }
            document.getElementById('people').innerHTML = html;
        });
