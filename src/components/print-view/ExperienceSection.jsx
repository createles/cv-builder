function ExperienceSection({sampleList}) {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {sampleList.map(experience => (
        <div key={experience.id} className="experience-entry">
          <p className="company-name">{experience.companyName}</p>
          <p className="position-title">{experience.position}</p>
          <p className="dates">{experience.startDate} - {experience.endDate}</p>
          <p className="location">{experience.location}</p>
          <p className="description">{experience.description}</p>
        </div>
      ))}
    </div>
    
  )
}

export default ExperienceSection;