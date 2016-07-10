import { SecurityException, Serrurier } from 'meteor/svein:serrurier';
import name from './name';
Serrurier.subscribeServerReporter( SecurityException, name );