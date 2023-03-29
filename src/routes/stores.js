import { writable } from 'svelte/store';

export let count = writable({
    name: "",
    linkedinUrl: "",
    githubUrl: ""
  });