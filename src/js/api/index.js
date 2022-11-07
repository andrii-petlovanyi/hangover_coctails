import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v2/9973533/',
  timeout: 1000,
});

export async function getRandCoctList() {
  try {
    return (response = await instance.get('randomselection.php'));
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctByName(name) {
  try {
    return (response = await instance.get(`search.php?s=${name}`));
  } catch (error) {
    console.log(error);
  }
}

export async function getCoctByFirstLet(letter) {
  try {
    return (response = await instance.get(`search.php?f=${letter}`));
  } catch (error) {
    console.log(error);
  }
}

export async function getIngrByName(name) {
  try {
    return (response = await instance.get(`search.php?i=${name}`));
  } catch (error) {
    console.log(error);
  }
}

export async function getIngrById(id) {
  try {
    return (response = await instance.get(`lookup.php?iid=${id}`));
  } catch (error) {
    console.log(error);
  }
}
