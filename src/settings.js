
let index = 1;
document.getElementById("add-local-viking-api-key").addEventListener("click", function() {
  index = index + 1;
  const input = `
    <label for="local-viking-api-key-${index}" class="form-label">Local Viking API Key ${index}*</label>
    <input id="local-viking-api-key-${index}" class="form-control" type="text" name="localVikingAPIKey[]">
  `
  const container = document.getElementById("local-viking-api-inputs")
  container.insertAdjacentHTML("beforeend", input);
});
