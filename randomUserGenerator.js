$("button").on("click", () => {
  let url = "https://randomuser.me/api";
  fetch(url)
    .then(handleErrors)
    .then(function(request) {
      let data = request.clone().json();
      console.log(data);
      return data;
    })
    .then(request => {
      let item = request.results[0];
      $("img").attr("src", item.picture.medium);
      $("#fullname").text(item.name.first + " " + item.name.last);
      $("#username").text(item.login.username);
      $("#email").text(item.email);
      $("#city").text(item.location.city);
    });
});

// Error Handler
function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}
