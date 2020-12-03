import {resolveCompany, resolveProfile, resolveLocation} from './api.js';
import render from './render.js';

function* retrieveData(id) {
    const user = yield fetch(resolveProfile(id));
    const userData = yield user.json();

    const company = yield fetch(resolveCompany(userData.companyId));
    const companyData = yield company.json();

    const location = yield fetch(resolveLocation(companyData.locationId));
    const locationData = yield location.json();

    yield ({
        user: userData,
        company: companyData,
        location: locationData
    });
}

function execGenerator(fn, initialValue) {
    const generator = fn(initialValue);
    let next;
    
    function iterate(value) {
        next = generator.next(value);

        if (!next.done) {
            if ('then' in next.value) {
                return next.value.then(iterate);
            } else {
                return iterate(next.value);
            }
        } else {
            return value;
        }
    }

    return iterate();
}

execGenerator(retrieveData, '1').then(render);