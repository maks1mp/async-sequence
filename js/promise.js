import {resolveCompany, resolveLocation, resolveProfile} from './api.js';
import render from './render.js';

fetch(resolveProfile('1'))
    .then(res => res.json())
    .then(userData => {
        const fetchCompany = fetch(resolveCompany(userData.companyId));

        return Promise.all([userData, fetchCompany.then(res => res.json())])
    })
    .then(([userData, companyData]) => {
        const fetchLocation = fetch(resolveLocation(companyData.locationId));

        return Promise.all([userData, companyData, fetchLocation.then(res => res.json())])
    })
    .then(([userData, companyData, locationData]) => {
        render({
            user: userData,
            company: companyData,
            location: locationData
        });
    })