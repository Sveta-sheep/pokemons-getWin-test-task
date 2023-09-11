import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { pokemonsReducer } from 'redux/pokemons';

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
