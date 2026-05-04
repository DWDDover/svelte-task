import { readFileSync } from 'fs';

export function load() {
    const profile = JSON.parse(readFileSync('data/profile.json', 'utf8'));
    return { profile };
}