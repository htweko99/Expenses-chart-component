const chart = document.querySelector("#chart");

var list = "";

fetch("./data.json").then(responese => responese.json()).then(
    data => {
        for(let i = 0; i< data.length; i++) {
            list += `
            <div class="data d-flex">
              <div class="bar" style="height: ${data[i]['amount'] * 3}px;"></div>
              <div class="amount">$${data[i]['amount']}</div>
              <span class="day">${data[i]['day']}</span>
            </div>
            `
        }
        chart.innerHTML = list;
    }
)