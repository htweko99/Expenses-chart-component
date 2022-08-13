const chart = document.querySelector("#chart");

var list = "";
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

fetch("./data.json")
  .then((responese) => responese.json())
  .then((data) => {
    const d = new Date();

    for (let i = 0; i < data.length; i++) {
      if (days[d.getDay()] == data[i]["day"]) {
        list += `
                <div class="data d-flex">
                    <div class="amount">$${data[i]["amount"]}</div>
                    <div class="bar current-day" style="height: ${
                      data[i]["amount"] * 3
                    }px;"></div>
                    
                    <span class="day">${data[i]["day"]}</span>
                </div>
            `;
      } else {
        list += `
                <div class="data d-flex">
                    <div class="amount">$${data[i]["amount"]}</div>
                    <div class="bar" style="height: ${
                      data[i]["amount"] * 3
                    }px;"></div>
                    
                    <span class="day">${data[i]["day"]}</span>
                </div>`;
      }
    }

    chart.innerHTML = list;
  });
