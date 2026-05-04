import { apiFetch } from "./fetch.js"; 

export function getTechnologies() { 
    return apiFetch("/technologies"); 
}