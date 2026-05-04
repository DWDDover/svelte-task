const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, "../data/profiles.json");

function getProfiles() {
    const profile = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    return profile;
}

function getById(id) {
    const profiles = getProfiles();
    return profiles.find(p => p.id === parseInt(id));
};

function edit(fields) {
    const { id, name, email, age, student, bio } = fields;
    fs.writeFileSync(dataPath, JSON.stringify({ id, name, email, age, student, bio }, null, 2));
}

module.exports = { getProfiles, edit, getById };