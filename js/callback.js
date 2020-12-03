import { resolveCompany, resolveLocation, resolveProfile } from "./api.js";
import render from "./render.js";

const request = (url, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.send();

  xhr.addEventListener("load", () => {
    callback(JSON.parse(xhr.response));
  });
};

request(resolveProfile("1"), userData => {
  request(resolveCompany(userData.companyId), companyData => {
    request(resolveLocation(companyData.locationId), locationData => {
      render({
        user: userData,
        company: companyData,
        location: locationData,
      });
    });
  });
});
