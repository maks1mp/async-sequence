import {fetchCompany, fetchProfile, fetchLocation} from './api.js';

const data = {
    user: null,
    company: null,
    location: null
}

const queue = [
    () => {
        return fetchProfile('1');
    },
    (userData) => {
        data.user = userData;

        return fetchCompany(userData.companyId);
    },
    (companyData) => {
        data.company = companyData;

        return fetchLocation(companyData.locationId);
    },
    (locationData) => {
        data.location = locationData;

        console.log('full data', data);
    },
]

function asyncReducer(acc, next) {
    return acc.then(data => {
        if (data && 'json' in data) {
            return data.json()
        } else {
            return data;
        }
    }).then(next);
}

queue.reduce(asyncReducer, Promise.resolve());