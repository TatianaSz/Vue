import axios from 'axios';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { rootState, widgetState } from '../state.type';
export const state: widgetState = {
  townWeather: {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
    ],
    base: '',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
  },
  errors: {
    fetchFailed: '',
  },
};

const getters: GetterTree<widgetState, rootState> = {
  getMainInfo: state => {
    return state.townWeather.main;
  },
  getWindInfo: state => {
    return state.townWeather.wind;
  },
  getWeatherDesc: state => {
    return state.townWeather.weather;
  },
  getPlace: state => {
    return state.townWeather.name;
  },
  fetchFailed: state => {
    return state.errors.fetchFailed;
  },
};

const actions: ActionTree<widgetState, rootState> = {
  async weatherGeolocationAction({ commit }, { api, lat, lon, key }) {
    const response = axios
      .get(`${api}weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
      .then(res => {
        commit('FETCH_WEATHER', res.data);
      });
  },
  async weatherAction({ commit }, { api, town, key }) {
    const response = axios
      .get(`${api}weather?q=${town}&appid=${key}&units=metric`)
      .then(res => {
        commit('FETCH_WEATHER', res.data);
      })
      .catch(() => {
        console.log('im pickle rick');
        commit('FETCH_FAILED');
      });
  },
  newFetch({ commit }) {
    commit('NEW_FETCH');
  },
};

const mutations: MutationTree<any> = {
  FETCH_WEATHER: (state, weatherObject) => (state.townWeather = weatherObject),
  FETCH_FAILED: state => (state.errors.fetchFailed = "Sorry, we couldn't find that"),
  NEW_FETCH: state => (state.errors.fetchFailed = ''),
};

export const widgetsModule: Module<widgetState, rootState> = {
  state,
  getters,
  actions,
  mutations,
};
