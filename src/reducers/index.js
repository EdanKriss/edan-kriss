import { combineReducers } from 'redux';
import UdemyReducer from './reducer_udemy';
import MitxReducer from './reducer_mitx';
import StackskillsReducer from './reducer_stackskills';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  udemy: UdemyReducer,
  mitx: MitxReducer,
  stackskills: StackskillsReducer,
  projects: ProjectsReducer
});

export default rootReducer;
