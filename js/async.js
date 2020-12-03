import { resolveProfile, resolveCompany, resolveLocation } from "./api.js";
import render from "./render.js";

(async () => {
  const user = await fetch(resolveProfile("1"));
  const userData = await user.json();

  const company = await fetch(resolveCompany(userData.companyId));
  const companyData = await company.json();

  const location = await fetch(resolveLocation(companyData.locationId));
  const locationData = await location.json();

  const data = {
    user: userData,
    company: companyData,
    location: locationData,
  };

  render(data);
})();
