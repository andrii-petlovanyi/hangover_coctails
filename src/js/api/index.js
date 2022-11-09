import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v2/9973533/',
});

export async function getRandCoctList() {
  try {
    const response = await instance.get('randomselection.php');
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctByName(name) {
  try {
    const response = await instance.get(`search.php?s=${name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctByFirstLet(letter) {
  try {
    const response = await instance.get(`search.php?f=${letter}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctById(id) {
  try {
    const response = await instance.get(`lookup.php?i=${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getIngrByName(name) {
  try {
    const response = await instance.get(`search.php?i=${name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getIngrById(id) {
  try {
    const response = await instance.get(`lookup.php?iid=${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
