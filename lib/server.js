import {
    SecurityReport,
    config,
    ParanoidReports
} from './SecurityReport';
import name from './name';
import { SecurityException, Serrurier } from 'meteor/svein:serrurier';


Serrurier.publishServerReporter( SecurityException, function ( context ) {
    context.userId = this.userId;
    const report = new SecurityReport( context, this.connection );
    this.unblock();
    report.deliver();
}, name );

export {
    SecurityReport,
    config,
    ParanoidReports
};