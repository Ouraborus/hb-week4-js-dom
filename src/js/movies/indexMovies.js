import { MoviesFilter } from './moviesFilter.js'
import { MoviesGrid } from './moviesGrid.js'
/* eslint-disable */
import moviesData from './moviesData.js'

new MoviesFilter('.movies-filter', moviesData)
new MoviesGrid('.movies-grid', moviesData)
/* eslint-enable */
