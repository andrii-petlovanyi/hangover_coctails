import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v2/9973533/',
});

export async function getRandCoctList() {
  try {
    const response = await instance.get('randomselection.php');
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctByName(name) {
  try {
    const response = await instance.get(`search.php?s=${name}`);
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctByFirstLet(letter) {
  try {
    const response = await instance.get(`search.php?f=${letter}`);
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctById(id) {
  try {
    const response = await instance.get(`lookup.php?i=${id}`);
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function getIngrByName(name) {
  try {
    const response = await instance.get(`search.php?i=${name}`);
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function getIngrById(id) {
  try {
    const response = await instance.get(`lookup.php?iid=${id}`);
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}
