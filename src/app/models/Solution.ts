import BugReport from './BugReport';
import Client from './Client';
import SolutionStatus from './SolutionStatus';

export class Solution {
   id: number;
   status: SolutionStatus;
   timeSubmitted: number;
   title: string;
   description: string;
// schaud
   // br: BugReport;
   br = new BugReport();

   client: Client;
}

export default Solution;

