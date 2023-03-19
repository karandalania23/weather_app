let weather = {
    apiKey: "30f8c7d61f07cef2ffef577b92147b69",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => [this.displayWeather(data),this.displayWeather1(data),this.displayWeather2(data),this.displayWeather3(data),this.displayWeather4(data)])
    },
    displayWeather: function (data) {
      const { name } = data.city;
      const { temp } = data.list[0].main;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".weather").classList.remove("loading");
      //document.body.style.backgroundImage =
      //  "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    displayWeather1: function (data) {
      const { temp } = data.list[8].main;
      document.querySelector(".day1").innerText = temp + "°C";
      document.querySelector(".weather").classList.remove("loading");
    },
    displayWeather2: function (data) {
        const { temp } = data.list[16].main;
        document.querySelector(".day2").innerText = temp + "°C";
        document.querySelector(".weather").classList.remove("loading");
      },
      displayWeather3: function (data) {
        const { temp } = data.list[24].main;
        document.querySelector(".day3").innerText = temp + "°C";
        document.querySelector(".weather").classList.remove("loading");
      },
      displayWeather4: function (data) {
        const { temp } = data.list[32].main;
        document.querySelector(".day4").innerText = temp + "°C";
        document.querySelector(".weather").classList.remove("loading");
      },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Chennai");