import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      languages: [],
      recordings: [],
    },
    mutations: {
      setLanguages(state, posts) {
        state.languages = posts
      },
      setRecordings(state, posts) {
        state.recordings = posts
      },
      addLanguage(state, post) {
        state.languages.push(post)
      },
      editLanguage(state, editedPost) {
        const postIndex = state.languages.findIndex(
          (post) => post.id === editedPost.id
        )
        state.languages[postIndex] = editedPost
      },
      addRecording(state, post) {
        state.recordings.push(post)
      },
      editRecording(state, editedPost) {
        const postIndex = state.recordings.findIndex(
          (post) => post.id === editedPost.id
        )
        state.recordings[postIndex] = editedPost
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.dataBase + 'languages.json')
          .then((res) => {
            const languagesArray = []
            for (const key in res.data) {
              languagesArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setLanguages', languagesArray)
          })
          .catch((e) => context.error(e))
      },
      fetchRecordings(context) {
        return axios
          .get(process.env.dataBase + 'recordings.json')
          .then((res) => {
            const recordingsArray = []
            for (const key in res.data) {
              recordingsArray.push({ ...res.data[key], id: key })
            }
            context.commit('setRecordings', recordingsArray)
          })
          .catch((e) => console.log(e))
      },
      setLanguages(context, posts) {
        context.commit('setLanguages', posts)
      },
      setRecordings(context, posts) {
        context.commit('setRecordings', posts)
      },
      addLanguage(vuexContext, post) {
        return axios
          .post(process.env.DB + 'languages.json', post)
          .then((res) => {
            console.log(res.data)
            vuexContext.commit('addLanguage', { ...post, id: res.data.name })
          })
          .catch((e) => console.log(e))
      },
      editLanguage(vuexContext, postData) {
        console.log(postData.id)
        return axios
          .put(process.env.DB + 'languages/' + postData.id + '.json', {
            article: postData.article,
            langcode: postData.langcode,
            langfamily: postData.langfamily,
            langname: postData.langname,
            langname_native: postData.langname_native,
            mostspoken: postData.mostspoken,
            nativespeakers: postData.nativespeakers,
            nativespeakerssource: postData.nativespeakerssource,
            official: postData.official,
          })
          .then((res) => {
            vuexContext.commit('editLanguage', postData)
          })
          .catch((e) => console.log(e))
      },
      addRecording(vuexContext, post) {
        return axios
          .post(process.env.DB + 'recordings.json', post)
          .then((res) => {
            vuexContext.commit('addRecording', { ...post, id: res.data.name })
          })
          .catch((e) => console.log(e))
      },
      editRecording(vuexContext, postData) {
        console.log(postData.id)
        return axios
          .put(process.env.DB + 'recordings/' + postData.id + '.json', {
            age: postData.age,
            direction: postData.direction,
            geo_name: postData.geo_name,
            geo_url: postData.geo_url,
            langcode: postData.langcode,
            name: postData.name,
            recording: postData.recording,
            speaker_name: postData.speaker_name,
            text: postData.text,
            transcription: postData.transcription,
            transtext: postData.transtext,
            year: postData.year,
          })
          .then((res) => {
            vuexContext.commit('editRecording', postData)
          })
          .catch((e) => console.log(e))
      },
    },
    getters: {
      getLanguages(state) {
        return state.languages
      },
      getRecordings(state) {
        return state.recordings
      },
    },
  })
}

export default createStore
