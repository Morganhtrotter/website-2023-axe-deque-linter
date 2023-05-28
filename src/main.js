import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './assets/main.css'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            dodgers: [],
            giants: [],
            padres: [],
            dbacks: [],
            rockies: [],
            cardinals: [],
            brewers: [],
            cubs: [],
            pirates: [],
            reds: [],
            nationals: [],
            mets: [],
            phillies: [],
            braves: [],
            marlins: [],
            mariners: [],
            astros: [],
            athletics: [],
            angels: [],
            rangers: [],
            twins: [],
            tigers: [],
            whiteSox: [],
            royals: [],
            guardians: [],
            blueJays: [],
            yankees: [],
            redSox: [],
            rays: [],
            orioles: [],
        }
    },
    mutations: {
        addPlayers (state, players) {
            // TODO: Change state to one array of 30 initialized arrays with teamID
            if (players[1] == "119") {
                state.dodgers.push(players)
            } else if (players[1] == "137") {
                state.giants.push(players)
            } else if (players[1] == "135") {
                state.padres.push(players)
            } else if (players[1] == "109") {
                state.dbacks.push(players)
            } else if (players[1] == "115") {
                state.rockies.push(players)
            } else if (players[1] == "138") {
                state.cardinals.push(players)
            } else if (players[1] == "158") {
                state.brewers.push(players)
            } else if (players[1] == "112") {
                state.cubs.push(players)
            } else if (players[1] == "134") {
                state.pirates.push(players)
            } else if (players[1] == "113") {
                state.reds.push(players)
            } else if (players[1] == "120") {
                state.nationals.push(players)
            } else if (players[1] == "121") {
                state.mets.push(players)
            } else if (players[1] == "143") {
                state.phillies.push(players)
            } else if (players[1] == "144") {
                state.braves.push(players)
            } else if (players[1] == "146") {
                state.marlins.push(players)
            } else if (players[1] == "136") {
                state.mariners.push(players)
            } else if (players[1] == "117") {
                state.astros.push(players)
            } else if (players[1] == "133") {
                state.athletics.push(players)
            } else if (players[1] == "108") {
                state.angels.push(players)
            } else if (players[1] == "140") {
                state.rangers.push(players)
            } else if (players[1] == "142") {
                state.twins.push(players)
            } else if (players[1] == "116") {
                state.tigers.push(players)
            } else if (players[1] == "145") {
                state.whiteSox.push(players)
            } else if (players[1] == "118") {
                state.royals.push(players)
            } else if (players[1] == "114") {
                state.guardians.push(players)
            } else if (players[1] == "141") {
                state.blueJays.push(players)
            } else if (players[1] == "147") {
                state.yankees.push(players)
            } else if (players[1] == "111") {
                state.redSox.push(players)
            } else if (players[1] == "139") {
                state.rays.push(players)
            } else if (players[1] == "110") {
                state.orioles.push(players)
            }
        }
    },
    getters: {
        getTeamID (state) {
            return state
        }
    }
})

const app = createApp(App).use(store)

app.mount('#app')
// Install the store instance as a plugin
//app.use(store)

export default app