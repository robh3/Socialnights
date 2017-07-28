import axios from 'axios';
import { observable } from 'mobx';
import { Alert } from 'react-native';

const API_URL: string = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';

export default class SearchStore {
    @observable query = '';
    @observable apod_title = [];

    async getTrackList(query: string) {
        if (!query) {
            this.apod_title = [];
            return;
        }
        try {
            const requestURL = `${API_URL}?q=${query}&type=track&limit=10`;
            const response = await axios.get(requestURL);
            this.tracks = response.data.apod_title.items;
        } catch (e) {
            Alert.alert('Connection error', 'Couldn\'t fetch the data.');
        }
    }
}