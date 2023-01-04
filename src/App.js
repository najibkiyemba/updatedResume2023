import './App.css';
import ResumeIntroduction from './components/resumeIntroduction/ResumeIntroduction';
import ContactInformation from './components/contactInformation/ContactInformation';
import ProfessionalExperience from './components/professionalExperience/ProfessionalExperience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import TrainingCertification from './components/optionalParts/trainingCertificationLicenses/TrainingCertification';
import LanguagesSKills from './components/optionalParts/languageSkills/LanguagesSkills';
import ProjectsFreelanceWork from './components/optionalParts/projectsFreelanceWork/ProjectsFreelanceWork';
import VolunteerWork from './components/optionalParts/volunteerWork/VolunteerWork';
import AwardsAndHonor from './components/optionalParts/awardsAndHonors/AwardsAndHonor';
import HobbiesInterests from './components/optionalParts/hobbiesAndInterests/HobbiesInterests';





function App() {
    return (
        <div className="App">
            <ContactInformation />
            <ResumeIntroduction />
            <ProfessionalExperience />
            <Skills />
            <Education />
            <TrainingCertification />
            <LanguagesSKills />
            <ProjectsFreelanceWork />
            <VolunteerWork />
            <AwardsAndHonor />
            <HobbiesInterests />
        </div>
    );
}

export default App;