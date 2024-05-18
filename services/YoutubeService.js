import axios from 'axios'

export default {
    getVideos(userSearch) {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {part: snippet, q: userSearch, type: video, key: AIzaSyDwkypMCtuGkgoztmYXPbdJZ6rmCXYP1SU}
        });
    }
}