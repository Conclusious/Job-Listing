import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Profile from "./components/Profile";
// import SearchResult from './components/SearchResult';
// import JobList from './components/JobList';
// import JobDetails from './components/JobDetails';
// import JobBoardLayout from "./components/JobBoardLayout";
// import Container from "./components/Container";
import JobPost from "./components/JobPost";
function App() {
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   // Fetch job data from an API or a local file
  //   fetch('/path/to/jobs/api')
  //     .then(response => response.json())
  //     .then(data => setJobs(data))
  //     .catch(error => console.error('Error fetching jobs:', error));
  // }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/JobList" element={<JobList jobs={jobs} />} /> */}
          <Route path="/JobPost" element={<JobPost />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// const JobListView = () => {
//   const [selectedJob, setSelectedJob] = React.useState(null);

//   const jobs = [
//     {
//       id: 1,
//       title: "Cyber Security",
//       company: "ABA Bank",
//       location: "Phnom Penh, Cambodia (On-Site)",
//       details: {
//         reposted: "1 week ago",
//         applied: "20 People applied",
//         type: "On-site",
//         duration: "Full-time",
//         description: "The role is to provide comprehensive oversight and cyber governance management...",
//         responsibilities: [
//           "Lead on the maintaining of Smart’s internal/external compliance requirements...",
//           "Implements security risk assessment framework...",
//         ],
//         qualifications: "Education & Qualification",
//       },
//     },
//     {
//       id: 2,
//       title: "Data Analyst",
//       company: "Data Inc.",
//       location: "New York, NY",
//       details: {
//         reposted: "2 days ago",
//         applied: "10 People applied",
//         type: "Remote",
//         duration: "Full-time",
//         description: "Analyze and interpret complex data sets.",
//         responsibilities: [
//           "Collect and analyze data to identify trends and patterns.",
//           "Prepare reports and presentations for stakeholders.",
//         ],
//         qualifications: "Proficiency in SQL and Python.",
//       },
//     },
//     {
//       id: 3,
//       title: "Product Manager",
//       company: "Innovate LLC",
//       location: "Austin, TX",
//       details: {
//         reposted: "3 days ago",
//         applied: "15 People applied",
//         type: "Remote",
//         duration: "Full-time",
//         description: "Lead product development teams to success.",
//         responsibilities: [
//           "Define product vision and strategy.",
//           "Collaborate with cross-functional teams.",
//         ],
//         qualifications: "Experience in product management and agile methodologies.",
//       },
//     },
//   ];

//   return (
//     <Container>
//       <JobBoardLayout jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
//     </Container>
//   );
// };

export default App;
