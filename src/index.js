let data ='';

  const init = () => {
    let url = "https://api.covid19api.com/summary";
    $.get(url,(data) => {
      console.log(data.Global);

      data = `
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.TotalDeaths}</td>
        <td>${data.Global.TotalRecovered}</td>
      `
      $("#data").html(data)
    })
  }

  function clearData () {
    $("#data").empty();
  }

  $("button").bind('click', () => {
    clearData()
    init();
  });