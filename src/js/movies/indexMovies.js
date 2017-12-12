import { MoviesFilter } from './moviesFilter.js'
import { MoviesGrid } from './moviesGrid.js'
import {moviesData, categories} from './moviesData.js'

/* eslint-disable */
new MoviesFilter('.movies-filter', categories)
new MoviesGrid('.movies-grid', moviesData)
/* eslint-enable */
